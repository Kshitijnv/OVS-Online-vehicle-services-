package com.app.controller;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Appointment;
import com.app.service.AppointmentService;

@RestController
@RequestMapping("/appointments")
@CrossOrigin(origins = "http://localhost:3000/")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@GetMapping
	public ResponseEntity<List<AppointmentDTO>> getAllAppointments() {
		try {
			List<AppointmentDTO> allAppointments = appointmentService.getAllAppointments();
			return ResponseEntity.status(HttpStatus.OK).body(allAppointments);
		} catch (Exception e) {
			System.out.println("error occurred in" + e.getClass());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@GetMapping("/{id}/complete")
	public ResponseEntity<Void> setAppointmentComplete(@PathVariable Long id) {
		try {
			appointmentService.setCompleteAppointment(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<AppointmentDTO> getAppointmentDetails(@PathVariable Long id) {
		try {
			System.out.println("in appointment by user handler");
			AppointmentDTO appointment = appointmentService.getAppointmentById(id);
			return ResponseEntity.status(HttpStatus.OK).body(appointment);
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@GetMapping("/all/{email}")
	public ResponseEntity<List<Appointment>> getAllAppointmentsByUser(@PathVariable String email) {
		try {
			List<Appointment> allAppointmentsByUser = appointmentService.getAllAppointmentsByUser(email);
			return ResponseEntity.status(HttpStatus.OK).body(allAppointmentsByUser);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteAppointment(@PathVariable Long id) {
		try {
			appointmentService.deleteAppointment(id);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
}
