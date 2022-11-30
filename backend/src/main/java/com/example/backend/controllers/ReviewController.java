package com.example.backend.controllers;


import com.example.backend.entity.models.Review;
import com.example.backend.entity.service.IReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReviewController {

    @Autowired
    IReviewService reviewService;

    @GetMapping("/review")
    public List<Review> getAll() {
        return reviewService.getAll();
    }

    @GetMapping("/review/{id}")
    public Review getOne(@PathVariable(value = "id")long id) {
        return reviewService.getOne(id);
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @PostMapping("/review")
    public void post(Review review) {
        reviewService.post(review);
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @PutMapping("/review/{id}")
    public void put(Review review,@PathVariable(value = "id") long id) {
        reviewService.put(review, id);
    }

    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    @DeleteMapping("/review/{id}")
    public void delete(@PathVariable(value = "id") long id) {
        reviewService.delete(id);
    }
}
