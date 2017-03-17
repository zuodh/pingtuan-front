package com.pingtuan.fresh.service;

import com.pingtuan.fresh.dao.entity.UserInfo;
import org.springframework.stereotype.Service;

/**
 * Created by zuodaohui on 2017/3/16.
 */
@Service
public class UserInfoRepository {
    public UserInfo findUserInfoByName(String userName) {
        return new UserInfo();
    }
}
