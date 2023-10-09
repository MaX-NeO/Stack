package com.iamneo.ecom.service;

import java.util.List;

import com.iamneo.ecom.dto.request.OrderRequest;
import com.iamneo.ecom.dto.response.CountResponse;
import com.iamneo.ecom.dto.response.OrderResponse;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

    List<OrderResponse> getOrders(Long uid);

    CountResponse orderCount();

}
