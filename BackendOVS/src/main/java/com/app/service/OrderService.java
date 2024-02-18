package com.app.service;

import com.app.entities.Bill;
import com.app.paymentgateway.OrderRequest;

public interface OrderService {

	public Bill createOrder(OrderRequest orderRequest);
	
	public Bill getOrderDetails(String id);
	
}
