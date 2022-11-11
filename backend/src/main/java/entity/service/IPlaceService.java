package entity.service;

import entity.models.Place;

import java.util.List;

public interface IPlaceService {
    public List< Place > getAll();
    public Place getOne(long id);
    public void post(Place place);
    public void put(Place place, long id);
    public void delete(long id);
}
