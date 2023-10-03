package com.te.securitywithjwt.jwt;

import java.io.IOException;

import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter{
	
	private final JwtTokenGeneration jwtTokenGeneration;
	
	
	private final UserDetailsService userDetailsService;

	@Override
	protected void doFilterInternal( 
		@NonNull HttpServletRequest request,@NonNull  HttpServletResponse response,@NonNull FilterChain filterChain)
			throws ServletException, IOException {
		  
			final String authHeader=request.getHeader("Authorization");
			final String jwt;
			final String userEmail;
			if(authHeader == null || !authHeader.startsWith("Bearer ")) {
				filterChain.doFilter(request, response);
				return; 
			}
			jwt=authHeader.substring(7);
			userEmail=jwtTokenGeneration.extractUsername(jwt); 
			if(userEmail != null && SecurityContextHolder.getContext().getAuthentication()==null) {
				UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
			 if(jwtTokenGeneration.isTokenvalidate(jwt, userDetails)) {
				 UsernamePasswordAuthenticationToken authenticationToken= new UsernamePasswordAuthenticationToken(
						 userDetails, null, userDetails.getAuthorities()); 
				 authenticationToken.setDetails(
						 new WebAuthenticationDetailsSource().buildDetails(request));
				 SecurityContextHolder.getContext().setAuthentication(authenticationToken);
			 }
			}
			filterChain.doFilter(request, response);
	}

}
 