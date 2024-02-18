package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.controller.CartRequest;
import com.app.dao.CarServiceRepository;
import com.app.dao.CartRepository;
import com.app.dao.UserRepository;
import com.app.entities.CarService;
import com.app.entities.Cart;
import com.app.entities.User;

@Service
@Transactional
public class CartServiceImpl implements CartService {
	@Autowired
	private CartRepository cartDao;
	@Autowired
	private UserRepository userDao;
	@Autowired
	private CarServiceRepository carServiceDao;

	@Override
	public void saveCartDetails(CartRequest cartRequest) {
		User user = userDao.findByUsername(cartRequest.getUsername()).get();
		Optional<Cart> findByUser = cartDao.findByUser(user);
		if(findByUser.isPresent()) {
			//exisiting user
			Cart cart = findByUser.get();
			if(cartRequest.getServiceId()!=null) {
				CarService carService = carServiceDao.findById(cartRequest.getServiceId()).get();
				cart.setCarServices(carService);
			}else {
				cart.setCarServices(null);
			}
			cartDao.save(cart);
		}else {
			Cart newCart = new Cart();
			newCart.setUser(user);
			//new user ,fill cart
			if(cartRequest.getServiceId()!=null) {
				CarService carService = carServiceDao.findById(cartRequest.getServiceId()).get();
				newCart.setCarServices(carService);
			}
			//new user , empty cart
			cartDao.save(newCart);
		}
	}

	@Override
	public Cart getCart(String username) {
		User user = userDao.findByUsername(username).get();
		 Optional<Cart> cart = cartDao.findByUser(user); // Assuming a query method like this
		    return cart.orElseGet(Cart::new);
	}

}
