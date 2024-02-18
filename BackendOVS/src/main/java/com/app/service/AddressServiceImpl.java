package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AddressRepository;
import com.app.entities.Address;
import com.app.entities.User;
@Service
@Transactional
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressRepository addressDao;
	
	@Override
	public Address saveAddress(Address address,User userFromDb) {
		address.setOwner(userFromDb);
		Address savedAddress = addressDao.save(address);
		return savedAddress;
	}

}
