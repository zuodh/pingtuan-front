package com.pingtuan.fresh.vo;

/**
 * Created by zuodaohui on 2017/3/16.
 */
public enum ResultStatusCode {
    OK(0, "OK"),
    SYSTEM_ERR(30001,"System error"),
    INVALID_CLIENTID(30003, "Invalid clientid"),
    INVALID_PASSWORD(30004, "User name or password is incorrect"),
    INVALID_CAPTCHA(30005, "Invalid captcha or captcha overdue"),
    INVALID_TOKEN(30006, "Invalid token");

    ResultStatusCode(Integer errcode, String errmsg) {
        this.errmsg = errmsg;
        this.errcode = errcode;
    }

    private String errmsg;
    private Integer errcode;

    public int getErrcode() {
        return errcode;
    }

    public String getErrmsg() {
        return errmsg;
    }
}
