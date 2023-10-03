package com.te.securitywithjwt.response;

import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Component
public class AppResponse {

	private String token;
	private String message;
	private String status;
	private int error;
	private Object data;
}
