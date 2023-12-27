package com.tam.service.impl;

import java.util.List;

import com.tam.dao.RoleDAO;
import com.tam.entity.Role;
import com.tam.service.RoleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RoleServiceImql implements RoleService {
	@Autowired
	RoleDAO dao;
	@Override
	public List<Role> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

}
