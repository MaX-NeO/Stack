package com.iamneo.ecom.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.iamneo.ecom.dto.request.ProductRequest;
import com.iamneo.ecom.dto.response.ProductResponse;
import com.iamneo.ecom.model.Product;
import com.iamneo.ecom.repository.ProductRepository;
import com.iamneo.ecom.service.ProductService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public boolean saveProduct(ProductRequest request) {
        if (productRepository.findByProductName(request.getProductName()).isPresent()) {
            return false;
        }

        Product product = Product.builder()
                .productName(request.getProductName())
                .productPrice(request.getProductPrice())
                .productQuantity(request.getProductQuantity())
                .productDesc(request.getProductDesc())
                .productImage(request.getProductImage())
                .build();

        productRepository.save(product);
        return true;
    }

    @Override
    public List<ProductResponse> getAllProducts() {
        List<Product> productList = productRepository.findAll();

        return productList.stream()
                .map(this::mapProductToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public ProductResponse getProduct(Long pid) {
        Product product = productRepository.findByPid(pid);
        return mapProductToResponse(product);
    }

    @Override
    public ProductResponse updateProduct(ProductRequest request, Long pid) {
        Product product = productRepository.findByPid(pid);

        if (product != null) {
            product.setProductName(request.getProductName());
            product.setProductPrice(request.getProductPrice());
            product.setProductQuantity(request.getProductQuantity());
            product.setProductDesc(request.getProductDesc());
            product.setProductImage(request.getProductImage());

            productRepository.save(product);

            return mapProductToResponse(product);
        } else {
            throw new EntityNotFoundException("Product with pid " + pid + " not found");
        }
    }

    @Override
    public boolean deleteProduct(Long pid) {
        Product product = productRepository.findByPid(pid);

        if (product != null) {
            productRepository.deleteByPid(pid);
            return true;
        } else {
            return false;
        }
    }

    private ProductResponse mapProductToResponse(Product product) {
        return ProductResponse.builder()
                .pid(product.getPid())
                .productName(product.getProductName())
                .productPrice(product.getProductPrice())
                .productQuantity(product.getProductQuantity())
                .productDesc(product.getProductDesc())
                .productImage(product.getProductImage())
                .build();
    }

    @Override
    public Product getProductModelId(Long pid) {
        return productRepository.findByPid(pid);
    }
}
