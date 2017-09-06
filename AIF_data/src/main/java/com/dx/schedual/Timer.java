package com.dx.schedual;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.dx.service.UserServiceImpl;

@Component
public class Timer {
	@Autowired
	UserServiceImpl userServiceImpl;

	@Scheduled(cron="0 33 23 * * ?")
	public void timerCron(){
		userServiceImpl.doService();
	}
}
