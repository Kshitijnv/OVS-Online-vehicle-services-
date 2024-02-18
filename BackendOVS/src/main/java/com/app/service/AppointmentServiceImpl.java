package com.app.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AddressRepository;
import com.app.dao.AppointmentRepository;
import com.app.dao.CarServiceRepository;
import com.app.dao.UserRepository;
import com.app.dao.VehicleRepository;
import com.app.entities.Address;
import com.app.entities.Appointment;
import com.app.entities.Bill;
import com.app.entities.CarService;
import com.app.entities.Status;
import com.app.entities.User;
import com.app.entities.Vehicle;
import com.app.paymentgateway.OrderRequest;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService {

	@Autowired
	private AppointmentRepository appointmentDao;
	@Autowired
	private CarServiceRepository carServiceDao;
	@Autowired
	private VehicleRepository vehicleDao;
	@Autowired
	private AddressRepository addressDao;
	@Autowired
	private UserRepository userDao;

	@Override
	public List<Appointment> getAllAppointments() {
		return appointmentDao.findAll();
	}

	@Override
	public Appointment getAppointmentById(Long id) {
		return appointmentDao.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Appointment not found with id: " + id));
	}

	@Override
	public Appointment createAppointment(OrderRequest orderRequest, Bill persistOrder, User userFromDb) {

		// Implement logic for creating appointment
		Appointment appointment = new Appointment();
		appointment.setBill(persistOrder);
		appointment.setUser(userFromDb);
		appointment.setPickUpDate(orderRequest.getPickUpDate());
		appointment.setPickUpTime(orderRequest.getPickUpTime());
		CarService carService = carServiceDao.findById(orderRequest.getServiceId()).get();
		appointment.setCarService(carService);

		Vehicle vehicle = new Vehicle();
		vehicle.setFuelType(orderRequest.getVehicle().getFuelType());
		vehicle.setManufacturer(orderRequest.getVehicle().getManufacturer());
		vehicle.setYearOfManufacturer(orderRequest.getVehicle().getYearOfManufacturer());
		Vehicle saveVehicle = vehicleDao.save(vehicle);
		appointment.setVehicle(saveVehicle);

		orderRequest.setNewAddress(true);
		System.out.println("after vehicle saving");
		appointment.setStatus(Status.BOOKED);
		Address address;
		if (orderRequest.isNewAddress()) {
			orderRequest.getAddress().setOwner(userFromDb);
			address = addressDao.save(orderRequest.getAddress());
		} else {
			boolean b = orderRequest.isNewAddress();
			System.out.println("inside else" + b);
			address = addressDao.findById(orderRequest.getAddress().getId()).get();
		}
		appointment.setAddress(address);
		return appointmentDao.save(appointment);
	}

	@Override
	public Appointment updateAppointment(Long id, Appointment updatedAppointment) {
		// Implement logic for updating appointment
		// You may need to handle relationships and validations
		Appointment existingAppointment = getAppointmentById(id);
		// Update fields of existingAppointment with values from updatedAppointment
		// ...
		return appointmentDao.save(existingAppointment);
	}

	@Override
	public void deleteAppointment(Long id) {
		// Implement logic for deleting appointment
		// You may need to handle relationships and validations
		appointmentDao.deleteById(id);
	}

	@Override
	public List<Appointment> getAllAppointmentsByUser(String email) {
		User user = userDao.findByEmailId(email).orElseThrow(() -> new EntityNotFoundException());

//		Optional<List<Appointment>> findAppointmentByUser = appointmentDao.findByUser(user);
//		if(findAppointmentByUser.isPresent()) {
//			return findAppointmentByUser.get();
//		}
		return appointmentDao.findByUser(user).orElseThrow(() -> new EntityNotFoundException());

	}
}
