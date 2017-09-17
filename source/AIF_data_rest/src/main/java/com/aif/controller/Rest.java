package com.aif.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aif.service.AifProjectServiceImpl;
import com.aif.service.UserServiceImpl;


@RestController  
@RequestMapping(value="/datacal/*",method=RequestMethod.GET)
public class Rest {
    @Autowired
	UserServiceImpl userServiceImpl;
    
    @Autowired
	AifProjectServiceImpl aifProjectServiceImpl;
	 
	 @RequestMapping(value="getUserName",method=RequestMethod.GET)  
	    public void getUserName(@RequestParam("id")String id, HttpServletResponse response) throws IOException {  
		    response.setCharacterEncoding("UTF-8");
	        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	        response.setHeader("Pragma", "no-cache");
	        response.setHeader("Access-Control-Allow-Origin", "*");
	        response.setDateHeader("Expires", 0);
	        response.setHeader("Access-Control-Allow-Methods","GET");  
	        response.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");  

	        PrintWriter out = response.getWriter();

		    System.out.println("id:"+id);
	        out.print("{\"value\":\""+userServiceImpl.getUserName(id)+"\"}");  
	    }  
	 
	 @RequestMapping(value="getAifProject",method=RequestMethod.GET)  
	    public Object getAifProject(HttpServletResponse response) throws IOException {  
		    response.setCharacterEncoding("UTF-8");
	        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	        response.setHeader("Pragma", "no-cache");
	        response.setHeader("Access-Control-Allow-Origin", "*");
	        response.setDateHeader("Expires", 0);
	        response.setHeader("Access-Control-Allow-Methods","GET");  
	        response.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");  
	        
	        return aifProjectServiceImpl.getAllAifProject();
	    }  
}
