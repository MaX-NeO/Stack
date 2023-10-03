package com.te.securitywithjwt.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
public class DemoController {

	@PostMapping("/volleyball")
	public ResponseEntity<String> volleyBall() {
		return new ResponseEntity<String>("volleyball", HttpStatus.ACCEPTED);
	}

	@PostMapping("/football")
	public ResponseEntity<String> footBall() {
		return new ResponseEntity<String>("football", HttpStatus.ACCEPTED);
	}

	@PostMapping("/cricket")
	public ResponseEntity<String> cricket() {
		return new ResponseEntity<String>("cricket", HttpStatus.ACCEPTED);
	}

}
