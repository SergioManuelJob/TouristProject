package entity.dao;

import entity.models.Place;
import org.springframework.data.repository.CrudRepository;

public interface IPlaceDao extends CrudRepository<Place, Long> {
}
