package com.dx.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dx.dao.UserDao;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	UserDao userDao;
	
	public String getUserName(String id) {
		String username=userDao.getUserName(id);
		return username;
	}
	
	public void doService(){
		System.out.println("Hello World!");
		System.out.println(getUserName("1"));
	}

}
