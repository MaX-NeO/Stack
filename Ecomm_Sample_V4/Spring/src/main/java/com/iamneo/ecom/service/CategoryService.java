package com.iamneo.ecom.service;

import java.util.List;

import com.iamneo.ecom.dto.response.CategoryResponse;

public interface CategoryService {

    List<CategoryResponse> getAllCategories();

}
