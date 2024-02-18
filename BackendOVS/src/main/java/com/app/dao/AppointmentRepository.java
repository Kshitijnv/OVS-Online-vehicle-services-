package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Appointment;
import com.app.entities.User;
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

	Optional<List<Appointment>> findByUser(User user);
}
