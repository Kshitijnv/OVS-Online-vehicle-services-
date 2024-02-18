package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

@Entity
public class Appointment extends BaseEntity{
	@Enumerated(EnumType.STRING)
	private Status status;
	
	private String pickUpDate;
    
    private String pickUpTime;
    
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "user_id")
	private User user;
	
	@ManyToOne (fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
	@JoinColumn(name="service_id")//optional : to specify name of FK col
	private CarService carService;
	
	@OneToOne (fetch = FetchType.EAGER)//mandatory , o.w hib throws MappingExc
	@JoinColumn(name="Appointment_bill_id")//optional : to specify name of FK col
	@MapsId
	private Bill bill;

	@ManyToOne (fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
	@JoinColumn(name="vehicle_id")//optional : to specify name of FK col
	private Vehicle vehicle;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.MERGE)
    @JoinColumn(name = "address_id")
    private Address address;
	
	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public CarService getCarService() {
		return carService;
	}

	public void setCarService(CarService carService) {
		this.carService = carService;
	}

	public Bill getBill() {
		return bill;
	}

	public void setBill(Bill bill) {
		this.bill = bill;
	}
	
	
}
