package com.example.backend.entity.service;

import com.example.backend.entity.models.AppUser;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IUserService {
    public List<AppUser> getAll();
    public AppUser getOne(long id);
    public void post(AppUser appUser);
    public void put(AppUser appUser, long id);
    public void delete(long id);
}
