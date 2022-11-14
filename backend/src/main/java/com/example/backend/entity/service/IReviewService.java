package com.example.backend.entity.service;

import com.example.backend.entity.models.Review;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IReviewService {
    public List<Review> getAll();
    public Review getOne(long id);
    public void post(Review review);
    public void put(Review review, long id);
    public void delete(long id);
}
