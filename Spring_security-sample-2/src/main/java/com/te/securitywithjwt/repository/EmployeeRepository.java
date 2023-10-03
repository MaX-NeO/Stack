package com.te.securitywithjwt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.te.securitywithjwt.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	Optional<com.te.securitywithjwt.entity.Employee> findByEmployeeEmail(String email);
}
