package com.example.backend.entity.dao;

import com.example.backend.entity.models.Place;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface IPlaceDao extends CrudRepository<Place, Long> {

    @Query(value = "SELECT * FROM db_tourist.place p where p.id =:idPlace", nativeQuery = true)
    Iterable<Place> findById(int idPlace);

}
