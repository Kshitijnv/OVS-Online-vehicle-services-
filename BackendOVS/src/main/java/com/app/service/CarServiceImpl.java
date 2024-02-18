package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CarServiceRepository;

@org.springframework.stereotype.Service
@Transactional
public class CarServiceImpl implements CarService {

	@Autowired
	private CarServiceRepository serviceDao;
	
	@Override
	public List<com.app.entities.CarService> getAllServices() {
		// TODO Auto-generated method stub
		List<com.app.entities.CarService> all = serviceDao.findAll();
		return all;
	}

}
