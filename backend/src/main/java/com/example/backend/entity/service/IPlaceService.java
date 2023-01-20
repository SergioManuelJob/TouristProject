package com.example.backend.entity.service;

import com.example.backend.entity.models.Place;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.ResponseEntity;

import java.util.List;
public interface IPlaceService {
    public List< Place > getAll();
    public Place getOne(long id);
    public void post(Place place);
    public void put(Place place, long id);
    public void delete(long id);

    public ResponseEntity<ByteArrayResource> exportInvoice(int idPlace);
}
