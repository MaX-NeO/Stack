package com.te.securitywithjwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.te.securitywithjwt.dto.LoginDto;
import com.te.securitywithjwt.entity.Employee;
import com.te.securitywithjwt.jwt.JwtTokenGeneration;
import com.te.securitywithjwt.response.AppResponse;

@Service

public class EmployeeServiceImpl {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenGeneration tokenGeneration;

	@Autowired
	com.te.securitywithjwt.repository.EmployeeRepository employeeRepository;

	public Employee saveEmployeeData(Employee employee) {
		System.out.println(employee);
		employee.setEmployeePassword(passwordEncoder.encode(employee.getEmployeePassword()));
		return employeeRepository.save(employee);

	}

	public Employee getEmployeeInfo(int id) {
		return employeeRepository.findById(id).get();

	}

	public AppResponse authenticateLogin(LoginDto loginDto) {
      System.out.println(loginDto);
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassWord()));

		Employee findByEmail = employeeRepository.findByEmployeeEmail(loginDto.getEmail()).orElseThrow();
		String generateToken = tokenGeneration.generateToken(findByEmail);
		System.out.println(generateToken);

		return AppResponse.builder().token(generateToken).build();

	}

}
