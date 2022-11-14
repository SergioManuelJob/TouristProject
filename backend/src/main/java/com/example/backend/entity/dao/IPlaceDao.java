package com.example.backend.entity.dao;

import com.example.backend.entity.models.Place;
import org.springframework.data.repository.CrudRepository;

public interface IPlaceDao extends CrudRepository<Place, Long> {
}
