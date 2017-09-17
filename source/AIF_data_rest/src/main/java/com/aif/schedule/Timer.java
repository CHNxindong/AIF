package com.aif.schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.aif.service.UserServiceImpl;

@Component
public class Timer {
	@Autowired
	UserServiceImpl userServiceImpl;

	@Scheduled(cron="0 21 20 * * ?")
	public void timerCron(){
		userServiceImpl.doService();
	}
}
