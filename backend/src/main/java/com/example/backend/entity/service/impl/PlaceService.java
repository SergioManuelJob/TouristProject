package com.example.backend.entity.service.impl;

import com.example.backend.entity.dao.IPlaceDao;
import com.example.backend.entity.models.Place;
import com.example.backend.entity.service.IPlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaceService implements IPlaceService {
    @Autowired
    private IPlaceDao placeDao;
    @Override
    public List<Place> getAll() {
        return (List<Place>)placeDao.findAll();
    }

    @Override
    public Place getOne(long id) {
        return placeDao.findById(id).get();
    }

    @Override
    public void post(Place place) {
        placeDao.save(place);
    }

    @Override
    public void put(Place place, long id) {
        placeDao.findById(id).ifPresent((x)->{
            place.setId(id);
            placeDao.save(place);
        });
    }

    @Override
    public void delete(long id) {
        placeDao.deleteById(id);
    }
}
