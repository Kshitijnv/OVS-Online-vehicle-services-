package com.app.service;

import com.app.entities.Address;
import com.app.entities.User;

public interface AddressService {

	Address saveAddress(Address address,User userFromDb);

}
