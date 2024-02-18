package com.app.controller;

import com.app.entities.Cart;
import com.app.entities.User;

public class LoginResponse {

	private User user;
	private Cart cart;
	public LoginResponse() {
		// TODO Auto-generated constructor stub
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Cart getCart() {
		return cart;
	}
	public void setCart(Cart cart) {
		this.cart = cart;
	}
	
}
