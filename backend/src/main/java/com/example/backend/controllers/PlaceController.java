package com.example.backend.controllers;

import com.example.backend.entity.models.Place;
import com.example.backend.entity.service.IPlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlaceController {

    @Autowired
    IPlaceService placeService;

    @GetMapping("/place")
    public List<Place> getAll() {
        return placeService.getAll();
    }

    @GetMapping("/place/{id}")
    public Place getOne(@PathVariable(value = "id")long id) {
        return placeService.getOne(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/place")
    public void post(Place place) {
        placeService.post(place);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/place/{id}")
    public void put(Place place,@PathVariable(value = "id") long id) {
        placeService.put(place, id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/place/{id}")
    public void delete(@PathVariable(value = "id") long id) {
        placeService.delete(id);
    }
}
