package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.CarService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("car-service")
public class ServiceController {

	@Autowired
	private CarService carService;
	
	@GetMapping
	public ResponseEntity<List<com.app.entities.CarService>> getAllServices(){
		List<com.app.entities.CarService> allServices = carService.getAllServices();
		return ResponseEntity.ok(allServices);
	}
}
