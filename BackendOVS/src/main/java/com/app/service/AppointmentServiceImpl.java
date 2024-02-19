package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.controller.AppointmentDTO;
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
	public List<AppointmentDTO> getAllAppointments() {
		List<Appointment> findAll = appointmentDao.findAllAppointments();
		List<AppointmentDTO> appointmentDTOs = new ArrayList<>();
		for(Appointment appoint:findAll) {
			AppointmentDTO appointmentDTO =  mapToDTO(appoint);
			appointmentDTOs.add(appointmentDTO);
		}
		return appointmentDTOs;
	}

	AppointmentDTO mapToDTO(Appointment appointment){
		AppointmentDTO appointmentDTO = new AppointmentDTO();
		appointmentDTO.setId(appointment.getId());
		appointmentDTO.setOwnerName(appointment.getUser().getFirstName() + appointment.getUser().getLastName());
		appointmentDTO.setOwnerVehicleName(appointment.getVehicle().getManufacturer());
		appointmentDTO.setStatus(appointment.getStatus().toString());
		appointmentDTO.setServiceName(appointment.getCarService().getName());
		return appointmentDTO;
	}
	@Override
	public AppointmentDTO getAppointmentById(Long id) {
		Appointment appointment = appointmentDao.findAppointmentById(id).orElseThrow(()->new EntityNotFoundException());
		AppointmentDTO appointmentDTO = new AppointmentDTO();
		appointmentDTO.setOrderId(appointment.getBill().getRazorPayId());
		appointmentDTO.setOwnerName(appointment.getUser().getFirstName() + appointment.getUser().getLastName());
		appointmentDTO.setServiceName(appointment.getCarService().getName());
		appointmentDTO.setTxDate(appointment.getBill().getTransactionDate());
		appointmentDTO.setOwnerVehicleName(appointment.getVehicle().getManufacturer());
		appointmentDTO.setAmount(appointment.getBill().getApplicationFee());
		return appointmentDTO;
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

	@Override
	public void setCompleteAppointment(Long id) {
		Appointment appointment = appointmentDao.findById(id).orElseThrow(()->new EntityNotFoundException());
		appointment.setStatus(Status.COMPLETED);
		appointmentDao.save(appointment);
	}

	@Override
	public Appointment getAppointmentByBillId(Bill bill) {
		Optional<Appointment> findByBill = appointmentDao.findByBill(bill);
		return findByBill.get();
	}
}
