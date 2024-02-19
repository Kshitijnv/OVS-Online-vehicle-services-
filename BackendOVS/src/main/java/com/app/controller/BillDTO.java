package com.app.controller;

import java.math.BigInteger;

public class BillDTO {
	private BigInteger applicationFee;
	private String transactionDate;
	private AppointmentDTO appointmentDTO;

	public BillDTO() {
		// TODO Auto-generated constructor stub
	}

	public BigInteger getApplicationFee() {
		return applicationFee;
	}

	public void setApplicationFee(BigInteger applicationFee) {
		this.applicationFee = applicationFee;
	}

	public String getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(String transactionDate) {
		this.transactionDate = transactionDate;
	}

	public AppointmentDTO getAppointmentDTO() {
		return appointmentDTO;
	}

	public void setAppointmentDTO(AppointmentDTO appointmentDTO) {
		this.appointmentDTO = appointmentDTO;
	}

}
