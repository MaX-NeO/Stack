package com.iamneo.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.ecom.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByCid(Long cid);

}
