package com.iamneo.ecom.service;

import java.util.List;

import com.iamneo.ecom.dto.request.ProductRequest;
import com.iamneo.ecom.dto.response.ProductResponse;
import com.iamneo.ecom.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

}
