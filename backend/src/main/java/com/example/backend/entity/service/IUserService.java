package com.example.backend.entity.service;

import com.example.backend.entity.models.AppUser;
import com.example.backend.entity.models.User;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IUserService {
    public List<User> getAll();
    public User getOne(long id);
    public void post(User user);
    public void put(User user, long id);
    public void delete(long id);
}
