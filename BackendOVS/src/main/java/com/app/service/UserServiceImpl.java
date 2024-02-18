package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRepository;
import com.app.entities.User;
@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userDao;
	
	
	    @Override
	    public User findOrCreateUser(String email,User user) {
	    	Optional<User> existingUser = userDao.findByEmailId(email);
	        if (existingUser.isPresent()) {
	        	//login
	        	User persistUser = existingUser.get();
	        	persistUser.getEmailId();	        	
	            return persistUser;
	        } else {
	            // Set other user attributes as needed
	        	//signup
	            User savedUser = userDao.save(user);
	            return savedUser;
	        }
	    }

		@Override
		public void saveCartServiceDetails(String username, User user) {
			
//			//getting the persisted user from DB
//			Optional<User> userDb = userDao.findByEmailId(user.getEmailId());
//			User user2 = userDb.get();
//			if(user.getService()!=null) {
//				//Fetching the persisted Service from the Db by its name which comes from Client 
//				Optional<CarService> carServiceWrapper = serviceDao.findByName(user.getService().getName());	
//				//Changing the state of object
//				user2.setService(carServiceWrapper.get());
//			}
//			//Commit the state of object to persist 
//			 userDao.save(user2);
		}

		@Override
		public User findUser(String username) {
//			userDao.findByUsername(username);	
			return userDao.findByUsername(username).get();
		}

		

	
}
