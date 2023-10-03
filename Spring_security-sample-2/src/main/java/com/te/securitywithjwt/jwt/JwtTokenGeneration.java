package com.te.securitywithjwt.jwt;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenGeneration {
//	The JwtTokenGeneration class in your project is responsible for handling JWT tokens. Here's an explanation of this class:
	private static final String SECRETKEY = "4D635166546A576D5A7134743777217A25432A462D4A614E645267556B587032";
	
//	This method generates a JWT token based on the provided UserDetails. 
//	It sets claims, including the subject (username), issue date, and expiration date, and signs the token with a secret key.
	public String generateToken(UserDetails userDetails) {
		return generateToken(new HashMap<>(),userDetails);
	}

	public String generateToken(
			Map<String,Object> extraClaims,
			UserDetails userDetails) {
		return Jwts
				.builder()
				.setClaims(extraClaims)
				.setSubject(userDetails.getUsername())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+1000*60*24))
				.signWith(getSignKey(), SignatureAlgorithm.HS256)
				.compact();
	}
//	 This method extracts the username (subject) from a JWT token.
	public String extractUsername(String token) {
		return extractClaim(token,Claims::getSubject);
	}

	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims); 
	}

	public Claims extractAllClaims(String token) {
		return 	Jwts
				.parserBuilder()
				.setSigningKey(getSignKey())
				.build()
				.parseClaimsJws(token)
				.getBody();
	}

	public Key getSignKey() {
		byte[] keyBytes = Decoders.BASE64.decode(SECRETKEY);
		return Keys.hmacShaKeyFor(keyBytes);
	}
//	This method validates a JWT token. It checks if the token's subject (username) matches the provided UserDetails, 
//	and it checks if the token is not expired.
	public boolean isTokenvalidate(String token,UserDetails userDetails) {
		final String userName=extractUsername(token);
		return (userName.equals(userDetails.getUsername())) && !isTokenExpired(token);  
	}
	
	public boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}
	
	public Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}

}

