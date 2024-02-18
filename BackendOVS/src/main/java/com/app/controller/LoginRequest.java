package com.app.controller;

import com.app.entities.User;

public class LoginRequest {

	private CartRequest cartRequest;
	private User user;

	public LoginRequest() {
		// TODO Auto-generated constructor stub
	}

	public CartRequest getCartRequest() {
		return cartRequest;
	}

	public void setCartRequest(CartRequest cartRequest) {
		this.cartRequest = cartRequest;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
