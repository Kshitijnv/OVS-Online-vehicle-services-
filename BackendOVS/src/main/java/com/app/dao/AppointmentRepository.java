package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.entities.Appointment;
import com.app.entities.Bill;
import com.app.entities.User;
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

	Optional<List<Appointment>> findByUser(User user);
	
	@Query("select a from Appointment a left join fetch a.user")
	List<Appointment> findAllAppointments();
	
	@Query("SELECT a FROM Appointment a LEFT JOIN FETCH a.user WHERE a.id = :id")
	Optional<Appointment> findAppointmentById(@Param("id") Long id);

	Optional<Appointment> findByBill(Bill bill);
	
}
