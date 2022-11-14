package com.example.backend.entity.service;

import com.example.backend.entity.dao.IReviewDao;
import com.example.backend.entity.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService implements IReviewService {
    @Autowired
    private IReviewDao reviewDao;
    @Override
    public List<Review> getAll() {
        return (List<Review>)reviewDao.findAll();
    }

    @Override
    public Review getOne(long id) {
        return reviewDao.findById(id).get();
    }

    @Override
    public void post(Review review) {
        reviewDao.save(review);
    }

    @Override
    public void put(Review review, long id) {
        reviewDao.findById(id).ifPresent((x)->{
            review.setId(id);
            reviewDao.save(review);
        });
    }

    @Override
    public void delete(long id) {
        reviewDao.deleteById(id);
    }
}
