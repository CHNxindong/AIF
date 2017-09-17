package com.aif.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aif.dao.AifProjectDao;
import com.aif.entity.AifProject;

@Service
public class AifProjectServiceImpl implements AifProjectService {
	@Autowired
	AifProjectDao aifProjectDao;

	@Override
	public List<AifProject> getAllAifProject() {
		return aifProjectDao.getAllAifProject();
	}

}
