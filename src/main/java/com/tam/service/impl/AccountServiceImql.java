package com.tam.service.impl;

import java.util.List;

import com.tam.dao.AccountDAO;
import com.tam.entity.Account;
import com.tam.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AccountServiceImql implements AccountService {
	@Autowired
	AccountDAO dao;

	@Override
	public Account findById(String username) {
		// TODO Auto-generated method stub
		return dao.findById(username).get();
	}

	@Override
	public List<Account> getAdministrators() {
		// TODO Auto-generated method stub
		return dao.getAdministrators();
	}

	@Override
	public List<Account> findAll() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}
	
}
