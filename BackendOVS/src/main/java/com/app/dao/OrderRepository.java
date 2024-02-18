package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Bill;
@Repository
public interface OrderRepository extends JpaRepository<Bill, Long> {

	 Optional<Bill> findByrazorPayId(String razorpayOrderId);
}
