package com.te.securitywithjwt.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.te.securitywithjwt.repository.EmployeeRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
//	The ApplicationConfig class in your project is responsible for configuring various beans used in the application. 
//	Here's an explanation of each part of this class:
	private final EmployeeRepository employeeRepository;

//	This bean configures a UserDetailsService implementation. 
//	It's responsible for loading user details based on their username (in your case, the email).
	@Bean
	public UserDetailsService userDetailsService() {
		return username -> employeeRepository.findByEmployeeEmail(username)
				.orElseThrow(() -> new UsernameNotFoundException("user not found"));
	}

//	his bean configures an AuthenticationProvider. It uses the DaoAuthenticationProvider, 
//	which is a common implementation that checks user credentials against a UserDetailsService. 
//	It also specifies the password encoder for hashing and verifying passwords.
	@Bean
	public AuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
		daoAuthenticationProvider.setUserDetailsService(userDetailsService());
		daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
		return daoAuthenticationProvider;
	}
//	This bean configures the AuthenticationManager.
//	It retrieves the AuthenticationManager from the AuthenticationConfiguration and makes it available as a bean.
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
		return configuration.getAuthenticationManager();
	}
	
//	This bean configures a password encoder. It's responsible for encoding and verifying passwords securely. 
//	In your case, you're using the BCrypt password encoder.

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
