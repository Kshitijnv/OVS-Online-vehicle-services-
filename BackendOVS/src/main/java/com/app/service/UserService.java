package com.app.service;

import com.app.entities.User;


public interface UserService {
	
	User findOrCreateUser(String email,User user);

	void saveCartServiceDetails(String username, User user);
	
	User findUser(String username);
	
}
