package com.example.backend.entity.service;

import com.example.backend.entity.dao.IUserDao;
import com.example.backend.entity.models.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService{

    @Autowired
    private IUserDao userDao;
    @Override
    public List<AppUser> getAll() {
        return (List<AppUser>)userDao.findAll();
    }

    @Override
    public AppUser getOne(long id) {
        return userDao.findById(id).get();
    }

    @Override
    public void post(AppUser appUser) {
        userDao.save(appUser);
    }

    @Override
    public void put(AppUser appUser, long id) {
        userDao.findById(id).ifPresent((x)->{
            appUser.setId(id);
            userDao.save(appUser);
        });
    }

    @Override
    public void delete(long id) {
        userDao.deleteById(id);
    }
}
