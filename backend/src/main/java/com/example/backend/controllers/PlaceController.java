package com.example.backend.controllers;

import com.example.backend.entity.models.Place;
import com.example.backend.entity.service.IPlaceService;
import com.example.backend.tools.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
public class PlaceController {

    @Autowired
    IPlaceService placeService;

    @GetMapping("/place")
    public List<Place> getAll() {
        List<Place> db = placeService.getAll();
        db.forEach((x)->{
            byte[] noZip = ImageUtility.decompressImage(x.getImage());
            x.setImage(noZip);
        });
        return db;
    }

    @GetMapping("/place/{id}")
    public Place getOne(@PathVariable(value = "id")long id) {
        final Place db = placeService.getOne(id);

        return Place.builder()
                .nameImg(db.getNameImg())
                .typeImg(db.getTypeImg())
                .image(ImageUtility.decompressImage(db.getImage()))
                .description(db.getDescription())
                .title(db.getTitle())
                .id(db.getId())
                .build();
    }

    @PostMapping("/place")
    public void post(Place place, @RequestParam("file") MultipartFile image) throws IOException {
        String randomID = UUID.randomUUID().toString();
        String filename = randomID.concat(randomID + image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf(".")));

        place.setNameImg(filename);
        place.setTypeImg(image.getContentType());
        place.setImage(ImageUtility.compressImage(image.getBytes()));
        placeService.post(place);
    }
    @PutMapping("/place/{id}")
    public void put(Place place,@PathVariable(value = "id") long id, @RequestParam("file") MultipartFile image) throws IOException {
        if(image != null) {
            String randomID = UUID.randomUUID().toString();
            String filename = randomID.concat(randomID + image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf(".")));

            place.setNameImg(filename);
            place.setTypeImg(image.getContentType());
            place.setImage(ImageUtility.compressImage(image.getBytes()));
        }
        else{
            place.setNameImg(getOne(id).getNameImg());
            place.setTypeImg(getOne(id).getTypeImg());
            place.setImage(ImageUtility.compressImage(getOne(id).getImage()));
        }
        placeService.put(place, id);
    }

    @DeleteMapping("/place/{id}")
    public void delete(@PathVariable(value = "id") long id) {
        placeService.delete(id);
    }
}
