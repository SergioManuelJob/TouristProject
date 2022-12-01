package com.example.backend.entity.dao;

import com.example.backend.entity.models.User;
import org.springframework.data.repository.CrudRepository;

public interface IUserDao extends CrudRepository<User, Long> {
}
