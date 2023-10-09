package com.iamneo.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.ecom.model.OrderMapping;

public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}
