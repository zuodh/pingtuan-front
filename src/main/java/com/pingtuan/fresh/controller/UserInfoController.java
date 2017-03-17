package com.pingtuan.fresh.controller;

import com.pingtuan.fresh.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/userInfo")  
public class UserInfoController {
	    @Autowired
	    private UserInfoService userInfoService;

	    @RequestMapping(value = "/show")  
	    public String show(){
	        return userInfoService.show();
	    }

	    @RequestMapping(value = "/showDao")  
	    public Object showDao(@RequestParam(value="age",defaultValue="12") int age){
	        return userInfoService.showDao(age);
	    }
}
