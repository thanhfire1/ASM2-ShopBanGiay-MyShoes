package com.tam.service;

import java.util.List;

import com.tam.entity.Account;



public interface AccountService {
	public Account findById(String username);

	public List<Account> getAdministrators();

	public List<Account> findAll();
}
