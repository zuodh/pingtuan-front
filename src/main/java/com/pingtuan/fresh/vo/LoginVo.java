package com.pingtuan.fresh.vo;

import lombok.Data;

/**
 * Created by zuodaohui on 2017/3/16.
 */
@Data
public class LoginVo {
    private String clientId;
    private String userName;
    private String password;
    private String captchaCode;
    private String captchaValue;
}
