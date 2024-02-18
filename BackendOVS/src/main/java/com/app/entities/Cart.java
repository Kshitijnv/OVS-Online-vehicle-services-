package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Cart extends BaseEntity {

	@OneToOne
	@JoinColumn(name = "car_service_id") // optional : to specify name of FK col
	private CarService carService;

	@OneToOne(fetch = FetchType.LAZY) // mandatory , o.w hib throws MappingExc
	@JoinColumn(name = "user_id") // optional : to specify name of FK col
	private User user;

	public CarService getCarServices() {
		return carService;
	}

	public void setCarServices(CarService carService) {
		this.carService = carService;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
