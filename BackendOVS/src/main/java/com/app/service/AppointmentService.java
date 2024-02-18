package com.app.service;

import java.util.List;

import com.app.entities.Appointment;
import com.app.entities.Bill;
import com.app.entities.User;
import com.app.paymentgateway.OrderRequest;

public interface AppointmentService {
	//To fetch all the appointments
	List<Appointment> getAllAppointments();
	
	//To fetch all appointment by user id
	List<Appointment> getAllAppointmentsByUser(String id);
	
	//To fetch single appointment
	Appointment getAppointmentById(Long id);
	
	//To create an appointment
	Appointment createAppointment(OrderRequest orderRequest,Bill persistOrder,User userFromDb);
	
	//To update the appointment (When appointment postponed)
	Appointment updateAppointment(Long id, Appointment updatedAppointment);
	
	//To cancel the appointment 
	void deleteAppointment(Long id);
}
