package com.dx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dx.service.UserServiceImpl;

@RestController
@RequestMapping(value="/datacal/*")
public class AIF_rest {
	@Autowired
	UserServiceImpl userServiceImpl;
	
	@RequestMapping(value="getUserNameById",method=RequestMethod.GET)
	public void getUserNameById(@RequestParam("id")String id){
		System.out.println(id);
		String username=userServiceImpl.getUserName(id);
		System.out.println(username);
	}
}
