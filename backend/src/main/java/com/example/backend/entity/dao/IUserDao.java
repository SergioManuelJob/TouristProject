package com.example.backend.entity.dao;

import com.example.backend.entity.models.AppUser;
import org.springframework.data.repository.CrudRepository;

public interface IUserDao extends CrudRepository<AppUser, Long> {
}
