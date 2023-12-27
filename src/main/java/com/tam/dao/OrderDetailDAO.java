package com.tam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tam.entity.OrderDetail;



public interface OrderDetailDAO extends JpaRepository<OrderDetail, Long>{

}
