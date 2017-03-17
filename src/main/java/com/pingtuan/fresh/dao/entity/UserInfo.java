package com.pingtuan.fresh.dao.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class UserInfo implements Serializable{
	    private Long id;
	    private String name;
	    private int age;
	    private String role;
	    private String salt;
	    private String password;
}
