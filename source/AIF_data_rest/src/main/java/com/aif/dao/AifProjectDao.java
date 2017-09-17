package com.aif.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aif.entity.AifProject;

public interface AifProjectDao extends JpaRepository<AifProject,Long>{
	@Query(value="select * from aif_project",nativeQuery=true)
	public List<AifProject> getAllAifProject();
}
