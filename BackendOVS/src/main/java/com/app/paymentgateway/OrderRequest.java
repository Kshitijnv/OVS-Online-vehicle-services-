package com.app.paymentgateway;

import java.math.BigInteger;

import com.app.entities.Address;
import com.app.entities.Vehicle;

public class OrderRequest {
	String username;
	String pickUpDate;
	String pickUpTime;
	BigInteger amount;
	Address address;
	Long serviceId;
	Vehicle vehicle;
	boolean isNewAddress;
	
	public OrderRequest() {
		// TODO Auto-generated constructor stub
	}
	
	
	public boolean isNewAddress() {
		return isNewAddress;
	}


	public void setNewAddress(boolean isNewAddress) {
		this.isNewAddress = isNewAddress;
	}


	public String getPickUpDate() {
		return pickUpDate;
	}

	public void setPickUpDate(String pickUpDate) {
		this.pickUpDate = pickUpDate;
	}

	public String getPickUpTime() {
		return pickUpTime;
	}

	public void setPickUpTime(String pickUpTime) {
		this.pickUpTime = pickUpTime;
	}


	public Vehicle getVehicle() {
		return vehicle;
	}


	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}


	public Long getServiceId() {
		return serviceId;
	}

	public void setServiceId(Long serviceId) {
		this.serviceId = serviceId;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	
	
	public BigInteger getAmount() {
		return amount;
	}
	public void setAmount(BigInteger amount) {
		this.amount = amount;
	}
	
}
