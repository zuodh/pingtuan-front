package com.pingtuan.fresh.controller;

import com.pingtuan.fresh.jwt.Audience;
import com.pingtuan.fresh.vo.ResultMsg;
import com.pingtuan.fresh.vo.ResultStatusCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by zuodaohui on 2017/3/15.
 */
@RestController
public class HomeController {
    @RequestMapping("/home")
     public String home(){
         return "home";
     }
    @Autowired
    private Audience audience;

    @RequestMapping("getaudience")
    public Object getAudience()
    {
        ResultMsg resultMsg = new ResultMsg(ResultStatusCode.OK.getErrcode(), ResultStatusCode.OK.getErrmsg(), audience);
        return resultMsg;
    }
}
