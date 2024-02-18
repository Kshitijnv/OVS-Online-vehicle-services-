package com.app.entities;

import java.math.BigInteger;

import javax.persistence.Entity;

@Entity
public class Bill extends BaseEntity {

	private String razorPayId;

	private String transactionDate;

	private String transactionTime;

	private BigInteger applicationFee;

	public String getRazorPayId() {
		return razorPayId;
	}

	public void setRazorPayId(String razorPayId) {
		this.razorPayId = razorPayId;
	}

	public String getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(String transactionDate) {
		this.transactionDate = transactionDate;
	}

	public String getTransactionTime() {
		return transactionTime;
	}

	public void setTransactionTime(String transactionTime) {
		this.transactionTime = transactionTime;
	}

	public BigInteger getApplicationFee() {
		return applicationFee;
	}

	public void setApplicationFee(BigInteger applicationFee) {
		this.applicationFee = applicationFee;
	}

}
