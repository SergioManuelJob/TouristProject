package com.example.backend.entity.service.impl;

import com.example.backend.entity.dao.IUserDao;
import com.example.backend.entity.models.User;
import com.example.backend.entity.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserDao userDao;
    @Override
    public List<User> getAll() {
        return (List<User>)userDao.findAll();
    }

    @Override
    public User getOne(long id) {
        return userDao.findById(id).get();
    }

    @Override
    public void post(User appUser) {
        userDao.save(appUser);
    }

    @Override
    public void put(User user, long id) {
        userDao.findById(id).ifPresent((x)->{
            user.setId(id);
            userDao.save(user);
        });
    }

    @Override
    public void delete(long id) {
        userDao.deleteById(id);
    }
}
