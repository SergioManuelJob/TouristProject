package com.example.backend.entity.dao;

import com.example.backend.entity.models.Review;
import org.springframework.data.repository.CrudRepository;

public interface IReviewDao extends CrudRepository<Review, Long> {
}
