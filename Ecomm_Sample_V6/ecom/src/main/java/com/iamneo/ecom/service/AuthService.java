package com.iamneo.ecom.service;

import com.iamneo.ecom.dto.request.AuthenticationRequest;
import com.iamneo.ecom.dto.request.RegisterRequest;
import com.iamneo.ecom.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
