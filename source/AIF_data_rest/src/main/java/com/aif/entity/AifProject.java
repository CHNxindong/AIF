package com.aif.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="aif_project")
public class AifProject {
	private String projectName;
	private Integer projectId;
	private String projectIntroduce;
	private String projectJpg;
	private String projectVideo;
	private String projectPlace;
	private String projectVc;
	private String projectNonghu;
	private String projectState;
	
	@Id  
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id",length=10)
	public Integer getProjectId() {
		return projectId;
	}
	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}
	
	@Column(name="project_name",length=50)
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	@Column(name="project_introduce",length=1000)
	public String getProjectIntroduce() {
		return projectIntroduce;
	}
	public void setProjectIntroduce(String projectIntroduce) {
		this.projectIntroduce = projectIntroduce;
	}
	
	@Column(name="project_jpg",length=100)
	public String getProjectJpg() {
		return projectJpg;
	}
	public void setProjectJpg(String projectJpg) {
		this.projectJpg = projectJpg;
	}
	
	@Column(name="project_video",length=100)
	public String getProjectVideo() {
		return projectVideo;
	}
	public void setProjectVideo(String projectVideo) {
		this.projectVideo = projectVideo;
	}
	
	@Column(name="project_place",length=50)
	public String getProjectPlace() {
		return projectPlace;
	}
	public void setProjectPlace(String projectPlace) {
		this.projectPlace = projectPlace;
	}
	
	@Column(name="project_vc",length=50)
	public String getProjectVc() {
		return projectVc;
	}
	public void setProjectVc(String projectVc) {
		this.projectVc = projectVc;
	}
	
	@Column(name="project_nonghu",length=50)
	public String getProjectNonghu() {
		return projectNonghu;
	}
	public void setProjectNonghu(String projectNonghu) {
		this.projectNonghu = projectNonghu;
	}
	
	@Column(name="project_state",length=100)
	public String getProjectState() {
		return projectState;
	}
	public void setProjectState(String projectState) {
		this.projectState = projectState;
	}
	
	

}
