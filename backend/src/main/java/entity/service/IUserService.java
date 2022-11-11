package entity.service;

import entity.models.Review;
import entity.models.User;

import java.util.List;

public interface IUserService {
    public List<User> getAll();
    public User getOne(long id);
    public void post(User user);
    public void put(User user, long id);
    public void delete(long id);
}
