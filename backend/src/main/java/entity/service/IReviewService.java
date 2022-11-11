package entity.service;

import entity.models.Review;

import java.util.List;

public interface IReviewService {
    public List<Review> getAll();
    public Review getOne(long id);
    public void post(Review review);
    public void put(Review review, long id);
    public void delete(long id);
}
