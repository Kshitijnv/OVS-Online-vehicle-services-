package com.app.entities;

import javax.persistence.Entity;

@Entity
public class Vehicle extends BaseEntity{
   
	private String manufacturer;
	
	private int yearOfManufacturer;
	
	private String fuelType;
	
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public int getYearOfManufacturer() {
		return yearOfManufacturer;
	}
	public void setYearOfManufacturer(int yearOfManufacturer) {
		this.yearOfManufacturer = yearOfManufacturer;
	}
	public String getFuelType() {
		return fuelType;
	}
	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}
	
}
