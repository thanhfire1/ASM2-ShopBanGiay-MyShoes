package com.tam.service.impl;

import java.util.List;

import com.tam.dao.CategoryDAO;
import com.tam.entity.Category;
import com.tam.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class CategoryServiceImql implements CategoryService {
	@Autowired
	CategoryDAO cdao;
	
	@Override
	public List<Category> findAll() {
		// TODO Auto-generated method stub
		return cdao.findAll();
	}

}
