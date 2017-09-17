package com.aif.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User implements Serializable{
	private String username;
	private Integer id;
	
	@Id  
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id",length=10)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name="username",length=100)
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	public User(String username, Integer id) {
		super();
		this.username = username;
		this.id = id;
	}
	
	public User() {
		
	}
	
}
