package com.te.securitywithjwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.te.securitywithjwt.dto.LoginDto;
import com.te.securitywithjwt.entity.Employee;
import com.te.securitywithjwt.response.AppResponse;
import com.te.securitywithjwt.service.EmployeeServiceImpl;

@RestController
@RequestMapping("/authcontrol")
public class UserController {

	@Autowired
	EmployeeServiceImpl employeeService;
//	@PreAuthorize("USER")
	@PostMapping("/save")
	public Employee saveEmployee(@RequestBody Employee employee) {
		System.out.println(employee);
		return employeeService.saveEmployeeData(employee);

	}


//	@PreAuthorize("ROLE_ADMIN")
	@GetMapping("/getID")
	public com.te.securitywithjwt.entity.Employee getEmployeeInfo(@RequestParam int id) {
		System.err.println(id);
		return employeeService.getEmployeeInfo(id);
	}

	@PostMapping("/logIn")
	public ResponseEntity<AppResponse> userLogin(@RequestBody LoginDto dto) {
		System.out.println(dto);
		AppResponse user = employeeService.authenticateLogin(dto);
		if (user != null) {
			return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
		} else {
			AppResponse appResponse = null;
			appResponse.setMessage("Register UnSucessfully");
			return new ResponseEntity<>(appResponse, HttpStatus.BAD_REQUEST);
		}

	}

}
