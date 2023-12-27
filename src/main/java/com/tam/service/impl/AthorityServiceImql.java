package com.tam.service.impl;

import java.util.List;

import com.tam.dao.AccountDAO;
import com.tam.dao.AuthorityDAO;
import com.tam.entity.Account;
import com.tam.entity.Authority;
import com.tam.service.AthorityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AthorityServiceImql  implements AthorityService {
	@Autowired
	AuthorityDAO dao;
	@Autowired
	AccountDAO acdao;

	@Override
	public List<Authority> findAuthoritiesOfAdministrators() {
		// TODO Auto-generated method stub
		List<Account> accounts =acdao.getAdministrators();
		return dao.authritiesOf(accounts);
	}

	@Override
	public List<Authority> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

	@Override
	public Authority create(Authority auth) {
		// TODO Auto-generated method stub
		return dao.save(auth);
	}
	
}
