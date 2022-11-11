package entity.dao;

import entity.models.Review;
import org.springframework.data.repository.CrudRepository;

public interface IReviewDao extends CrudRepository<Review, Long> {
}
