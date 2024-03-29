package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long > {
	
	
	Optional<User> findByEmailId(String email);
	
	Optional<User> findByUsername(String username);
}
