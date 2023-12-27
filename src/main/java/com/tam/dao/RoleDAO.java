package com.tam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tam.entity.Role;



public interface RoleDAO extends JpaRepository<Role, String> {

}
