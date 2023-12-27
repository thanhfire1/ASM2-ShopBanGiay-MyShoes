package com.tam.service;

import java.util.List;

import com.tam.entity.Authority;



public interface AthorityService {

	public List<Authority> findAuthoritiesOfAdministrators();

	public List<Authority> findAll();
	
	public void delete(Integer id);

	public Authority create(Authority auth);

}
