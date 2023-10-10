package com.iamneo.ecom.service;

import java.util.List;

import com.iamneo.ecom.dto.response.FeedbackResponse;

public interface FeedbackService {

    List<FeedbackResponse> getFeedbacks();

}
