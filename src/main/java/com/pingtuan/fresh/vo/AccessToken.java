package com.pingtuan.fresh.vo;

import lombok.Data;

/**
 * Created by zuodaohui on 2017/3/16.
 */
@Data
public class AccessToken {
    private String access_token;
    private String token_type;
    private long expires_in;
}
