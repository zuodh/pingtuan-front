package com.pingtuan.fresh.controller;

import com.pingtuan.fresh.dao.entity.UserInfo;
import com.pingtuan.fresh.jwt.Audience;
import com.pingtuan.fresh.service.UserInfoRepository;
import com.pingtuan.fresh.util.JwtHelper;
import com.pingtuan.fresh.util.MD5Util;
import com.pingtuan.fresh.vo.AccessToken;
import com.pingtuan.fresh.vo.LoginVo;
import com.pingtuan.fresh.vo.ResultMsg;
import com.pingtuan.fresh.vo.ResultStatusCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by zuodaohui on 2017/3/16.
 */
@RestController
public class JsonWebToken {
    @Autowired
    private UserInfoRepository userRepositoy;

    @Autowired
    private Audience audienceEntity;

    @RequestMapping("oauth/token")
    public Object getAccessToken(@RequestBody LoginVo loginPara)
    {
        ResultMsg resultMsg;
        try
        {
            if(loginPara.getClientId() == null
                    || (loginPara.getClientId().compareTo(audienceEntity.getClientId()) != 0))
            {
                resultMsg = new ResultMsg(ResultStatusCode.INVALID_CLIENTID.getErrcode(),
                        ResultStatusCode.INVALID_CLIENTID.getErrmsg(), null);
                return resultMsg;
            }

            //验证码校验在后面章节添加


            //验证用户名密码
            UserInfo user = userRepositoy.findUserInfoByName(loginPara.getUserName());
            if (user == null)
            {
                resultMsg = new ResultMsg(ResultStatusCode.INVALID_PASSWORD.getErrcode(),
                        ResultStatusCode.INVALID_PASSWORD.getErrmsg(), null);
                return resultMsg;
            }
            else
            {
                String md5Password = MD5Util.getMD5(loginPara.getPassword()+user.getSalt());

                if (md5Password.compareTo(user.getPassword()) != 0)
                {
                    resultMsg = new ResultMsg(ResultStatusCode.INVALID_PASSWORD.getErrcode(),
                            ResultStatusCode.INVALID_PASSWORD.getErrmsg(), null);
                    return resultMsg;
                }
            }

            //拼装accessToken
            String accessToken = JwtHelper.createJWT(loginPara.getUserName(), String.valueOf(user.getName()),
                    user.getRole(), audienceEntity.getClientId(), audienceEntity.getName(),
                    audienceEntity.getExpiresSecond() * 1000, audienceEntity.getBase64Secret());

            //返回accessToken
            AccessToken accessTokenEntity = new AccessToken();
            accessTokenEntity.setAccess_token(accessToken);
            accessTokenEntity.setExpires_in(audienceEntity.getExpiresSecond());
            accessTokenEntity.setToken_type("bearer");
            resultMsg = new ResultMsg(ResultStatusCode.OK.getErrcode(),
                    ResultStatusCode.OK.getErrmsg(), accessTokenEntity);
            return resultMsg;

        }
        catch(Exception ex)
        {
            resultMsg = new ResultMsg(ResultStatusCode.SYSTEM_ERR.getErrcode(),
                    ResultStatusCode.SYSTEM_ERR.getErrmsg(), null);
            return resultMsg;
        }
    }
}
