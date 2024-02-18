package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.CarService;
@Repository
public interface CarServiceRepository extends JpaRepository<CarService, Long> {

	Optional<CarService> findByName(String name);
}
