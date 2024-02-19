package com.app.controller;

import java.math.BigInteger;

public class AppointmentDTO {
	private Long id;
	private String ownerName;
	private String ownerVehicleName;
	private String status;
	private String serviceName;
	private String txDate;
	private String orderId;
	private BigInteger amount;
	public AppointmentDTO() {
		// TODO Auto-generated constructor stub
	}

	
	public BigInteger getAmount() {
		return amount;
	}


	public void setAmount(BigInteger amount) {
		this.amount = amount;
	}


	public String getTxDate() {
		return txDate;
	}


	public void setTxDate(String txDate) {
		this.txDate = txDate;
	}


	public String getOrderId() {
		return orderId;
	}


	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getOwnerVehicleName() {
		return ownerVehicleName;
	}

	public void setOwnerVehicleName(String ownerVehicleName) {
		this.ownerVehicleName = ownerVehicleName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
	
}
