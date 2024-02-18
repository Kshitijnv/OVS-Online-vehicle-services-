package com.app.service;

import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.Date;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.OrderRepository;
import com.app.entities.Bill;
import com.app.entities.User;
import com.app.paymentgateway.OrderRequest;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
@Service
@Transactional
public class OrderServiceImpl implements OrderService {
	@Autowired
	private OrderRepository orderDao;
	
	@Autowired
	private AppointmentService appointmentService;
	@Autowired
	private UserService userService;
	
	 @Value("${razorpay.api.key}")
	    private String razorpayApiKey;

	    private RazorpayClient client;

	    @PostConstruct
	    public void initializeRazorpayClient() throws RazorpayException {
	        client = new RazorpayClient(razorpayApiKey, "2i8MOwkmwCDQaE4gu24J3K7h");
	    }
	
	@Override
	public Bill createOrder(OrderRequest orderRequest) {
		System.out.println("in try block");
		Order order;
		try {
			order = createRazorPayOrder(orderRequest.getAmount());
			System.out.println("After creating order");
			String orderId = (String) order.get("id");
			Date timestamp = (Date) order.get("created_at");
			
			Bill persistOrder = new Bill();
			persistOrder.setRazorPayId(orderId);
			
			SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
			String txDate = dateFormatter.format(timestamp);
			persistOrder.setTransactionDate(txDate);
			
			persistOrder.setTransactionTime(LocalTime.now().toString());
			
			persistOrder.setApplicationFee(orderRequest.getAmount());
			User userFromDb = userService.findUser(orderRequest.getUsername());
			appointmentService.createAppointment(orderRequest, persistOrder, userFromDb);
			
			orderDao.save(persistOrder);
			return persistOrder;
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("in class "+ e.getClass()+e.getMessage());
		}
		
	}

	@Override
	 public Bill getOrderDetails(String id) {
        Optional<Bill> order = orderDao.findByrazorPayId(id);
        return order.get();
    }

   
	private Order createRazorPayOrder(BigInteger amount) throws RazorpayException {
		if (client == null) {
			throw new IllegalStateException("RazorpayClient is not initialized.");
		}

		JSONObject options = new JSONObject();
		// Convert the amount to paise (multiplying by 100)
		// Bcoz Payment gateways often require the amount to be specified in the
		// smallest unit of the currency
		// (e.g., paise) to avoid floating-point precision issues.
		options.put("amount", amount.multiply(new BigInteger("100")));
		options.put("receipt", "txn_12345");
		options.put("currency", "INR");
		// To enable automatic capture of the payment
//		options.put("payment_captcha", 1);
		// Return the JSONObject to the client (RazorPayClient client)
		return client.orders.create(options);
	}
}
