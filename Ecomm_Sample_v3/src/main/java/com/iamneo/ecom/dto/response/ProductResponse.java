package com.iamneo.ecom.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponse {
    private Long pid;
    private String productName;
    private float productPrice;
    private Long productQuantity;
    private String productImage;
    private String productDesc;
}
