package com.pingtuan.fresh.service;

import java.util.List;

import com.pingtuan.fresh.dao.UserInfoDao;
import com.pingtuan.fresh.dao.entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;


@Service
public class UserInfoService {
	    @Autowired
	    private UserInfoDao userInfoDao;

	    public String show(){
	        return "hello world!";
	    }

	    public List<UserInfo> showDao(int age){
	        return userInfoDao.get(age);
	    }
}
