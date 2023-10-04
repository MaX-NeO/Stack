package com.iamneo.ecom.service;

import java.util.List;

import com.iamneo.ecom.dto.request.UserRequest;
import com.iamneo.ecom.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
