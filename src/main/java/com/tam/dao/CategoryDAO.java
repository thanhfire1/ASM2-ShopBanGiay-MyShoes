package com.tam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tam.entity.Category;



public interface CategoryDAO  extends JpaRepository<Category, String>{

}
