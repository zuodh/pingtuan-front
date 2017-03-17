package com.pingtuan.fresh.dao;

import com.pingtuan.fresh.dao.entity.UserInfo;

import java.util.List;

@Mapper
public interface UserInfoDao {

	 List<UserInfo> get(int age);


}
