package com.app.paymentgateway;

public class OrderResponse {
	String secretKey;
	String razorpayOrderId;
	String applicationFee;
	String secretId;
	String paymentGatewayName;
	
	public OrderResponse() {
		// TODO Auto-generated constructor stub
	}
	
	
	public String getSecretKey() {
		return secretKey;
	}
	public void setSecretKey(String secretKey) {
		this.secretKey = secretKey;
	}
	
	public String getRazorpayOrderId() {
		return razorpayOrderId;
	}
	public void setRazorpayOrderId(String razorpayOrderId) {
		this.razorpayOrderId = razorpayOrderId;
	}
	public String getApplicationFee() {
		return applicationFee;
	}
	public void setApplicationFee(String applicationFee) {
		this.applicationFee = applicationFee;
	}
	public String getSecretId() {
		return secretId;
	}
	public void setSecretId(String secretId) {
		this.secretId = secretId;
	}
	public String getPaymentGatewayName() {
		return paymentGatewayName;
	}
	public void setPaymentGatewayName(String paymentGatewayName) {
		this.paymentGatewayName = paymentGatewayName;
	}
	

}
