package com.aif.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.Query;

import com.aif.entity.User;

public interface UserDao extends JpaRepository<User,Long>{
	@Query(value="select username from user where id=?1",nativeQuery=true)
	public String getUserName(String id);
}
