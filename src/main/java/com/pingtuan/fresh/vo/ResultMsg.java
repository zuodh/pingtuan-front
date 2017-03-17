package com.pingtuan.fresh.vo;

import com.pingtuan.fresh.jwt.Audience;
import lombok.Data;

import java.io.Serializable;

/**
 * Created by zuodaohui on 2017/3/16.
 */
@Data
public class ResultMsg implements Serializable{
    private Integer errcode;
    private String errMsg;
    private Object data;
    public ResultMsg(Integer errcode,String errMsg,Object data){
        this.errMsg=errMsg;
        this.errcode=errcode;
        this.data=data;
    }
}
