package com.iamneo.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.ecom.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
