package com.iamneo.ecom.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.ecom.constant.Api;
import com.iamneo.ecom.dto.request.OrderRequest;
import com.iamneo.ecom.service.OrderService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.ORDER)
@RequiredArgsConstructor
@Tag(name = "Order")
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/save")
    public ResponseEntity<String> saveOrder(@RequestBody OrderRequest request) {
        boolean isSaved = orderService.saveOrder(request);
        return isSaved ? ResponseEntity.status(200).body("Order saved successfully!")
                : ResponseEntity.badRequest().build();
    }
}
