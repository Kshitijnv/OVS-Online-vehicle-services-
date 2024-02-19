package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Cart;
import com.app.entities.User;
import com.app.service.CartService;
import com.app.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private CartService cartService;

	@PostMapping()
	public ResponseEntity<?> saveOrFind(@RequestBody User user) {
		User findOrCreateUser = userService.findOrCreateUser(user.getEmailId(), user);
		Cart cart = cartService.getCart(user.getUsername());

		LoginResponse response = new LoginResponse();
		response.setUser(findOrCreateUser);
		response.setCart(cart);
		return ResponseEntity.status(HttpStatus.OK).body(response);
	}

	@PostMapping("/cart")
	public ResponseEntity<?> saveCartDetails(@RequestBody CartRequest cartRequest) {
		cartService.saveCartDetails(cartRequest);
		return ResponseEntity.ok(null);
	}
	
}
