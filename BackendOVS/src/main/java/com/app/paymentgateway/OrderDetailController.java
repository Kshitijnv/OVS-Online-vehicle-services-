package com.app.paymentgateway;


import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.controller.BillDTO;
import com.app.entities.Bill;
import com.app.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/order")
public class OrderDetailController {
	@Autowired
	private OrderService orderService;
	

	


	@PostMapping("/createOrder")
	public ResponseEntity<Object> createOrder(@RequestBody OrderRequest orderRequest) {
		
		//Dependent objects-> Bill,Appointment,Address
		
		System.out.println("insideeee");
		OrderResponse response = new OrderResponse();
		
		try {
			System.out.println(orderRequest.isNewAddress());
			//creating order from razor pay
			Bill persistOrder = orderService.createOrder(orderRequest);
			//sending response
			response.setRazorpayOrderId(persistOrder.getRazorPayId());
			response.setApplicationFee("" + orderRequest.getAmount());
			response.setPaymentGatewayName("razorpay");
			
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Error creating Razorpay order: " + e.getMessage());
		}

	}
	@GetMapping("/{id}")
    public ResponseEntity<BillDTO> getOrderDetails(@PathVariable String id) {
        try {
        	BillDTO orderDetails = orderService.getOrderDetails(id);
            return ResponseEntity.ok(orderDetails);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

}
