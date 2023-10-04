package com.iamneo.ecom.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iamneo.ecom.dto.info.ProductInfo;
import com.iamneo.ecom.dto.request.OrderRequest;
import com.iamneo.ecom.model.Order;
import com.iamneo.ecom.model.OrderMapping;
import com.iamneo.ecom.model.Product;
import com.iamneo.ecom.model.User;
import com.iamneo.ecom.repository.OrderRepository;
import com.iamneo.ecom.repository.ProductRepository;
import com.iamneo.ecom.repository.UserRepository;
import com.iamneo.ecom.service.OrderService;
import com.iamneo.ecom.service.ProductService;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;
    private final ProductService productService;

    @Override
    public boolean saveOrder(OrderRequest request) {
        User user = userRepository.findByUid(request.getUid());
        List<ProductInfo> productInfoList = request.getProducts();
        long orderTotal = calculateOrderTotal(productInfoList);

        if (orderTotal <= 0) {
            throw new IllegalArgumentException("Order total must be greater than zero.");
        }

        try {
            Order order = createOrder(request, user, orderTotal, productInfoList);
            orderRepository.save(order);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private Order createOrder(OrderRequest request, User user, long orderTotal, List<ProductInfo> productInfoList) {
        Order order = Order.builder()
                .orderDate(new Date())
                .orderAddress(request.getOrderAddress())
                .paymentMode(request.getPaymentMode())
                .user(user)
                .orderTotal(orderTotal)
                .orderMappings(request.getProducts().stream()
                        .map(productRequest -> {
                            Product product = productService.getProductModelId(productRequest.getPid());
                            if (product != null) {
                                return OrderMapping.builder().product(product).build();
                            } else {
                                throw new IllegalArgumentException("Invalid product ID: " + productRequest.getPid());
                            }
                        })
                        .collect(Collectors.toList()))
                .build();

        updateProductQuantities(productInfoList);

        return order;
    }

    private List<Product> updateProductQuantities(List<ProductInfo> productInfoList) {
        List<Product> updatedProducts = new ArrayList<>();

        for (ProductInfo productInfo : productInfoList) {
            Long productId = productInfo.getPid();
            Long quantity = productInfo.getQuantity();

            Product product = getProductOrThrow(productId);

            if (product.getProductQuantity() < quantity) {
                throw new IllegalArgumentException("Insufficient quantity for product ID: " + productId);
            }

            Product updatedProduct = createUpdatedProduct(product, quantity);
            productRepository.save(updatedProduct);
            updatedProducts.add(updatedProduct);
        }

        return updatedProducts;
    }

    private Product getProductOrThrow(Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found for ID: " + productId));
    }

    private Product createUpdatedProduct(Product product, Long quantity) {
        Product updatedProduct = new Product();
        updatedProduct.setPid(product.getPid());
        updatedProduct.setProductName(product.getProductName());
        updatedProduct.setProductPrice(product.getProductPrice());
        updatedProduct.setProductQuantity(product.getProductQuantity() - quantity);
        updatedProduct.setProductImage(product.getProductImage());
        updatedProduct.setProductDesc(product.getProductDesc());
        return updatedProduct;
    }

    private long calculateOrderTotal(List<ProductInfo> productInfoList) {
        return productInfoList.stream()
                .mapToLong(productInfo -> {
                    Product product = getProductOrThrow(productInfo.getPid());
                    if (product.getProductQuantity() < productInfo.getQuantity()) {
                        throw new IllegalArgumentException(
                                "Insufficient quantity for product ID: " + productInfo.getPid());
                    }
                    return (long) (product.getProductPrice() * productInfo.getQuantity());
                })
                .sum();
    }
}
