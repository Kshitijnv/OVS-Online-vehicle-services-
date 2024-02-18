package com.app.service;

import com.app.controller.CartRequest;
import com.app.entities.Cart;

public interface CartService {
	
	void saveCartDetails(CartRequest cartRequest);
	
	Cart getCart(String username);
}
