package com.iamneo.ecom.service;

import com.iamneo.ecom.dto.request.OrderRequest;

public interface OrderService {

    boolean saveOrder(OrderRequest request);

}
