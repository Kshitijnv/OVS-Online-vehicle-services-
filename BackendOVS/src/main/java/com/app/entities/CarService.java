package com.app.entities;

import javax.persistence.Entity;

@Entity
public class CarService extends BaseEntity {

	private String name;

    private Double price;

    private String specifications;

    private String duration;

    private String bonusService;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getSpecifications() {
		return specifications;
	}

	public void setSpecifications(String specifications) {
		this.specifications = specifications;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getBonusService() {
		return bonusService;
	}

	public void setBonusService(String bonusService) {
		this.bonusService = bonusService;
	}

    
}
