package com.example.backend.controllers;

import com.example.backend.entity.models.User;
import com.example.backend.entity.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    IUserService userService;

    @GetMapping("/user")
    public List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping("/user/{id}")
    public User getOne(@PathVariable(value = "id")long id) {
        return userService.getOne(id);
    }

    @PostMapping("/user")
    public void post(User user) {
        userService.post(user);
    }

    @PutMapping("/user/{id}")
    public void put(User user, @PathVariable(value = "id") long id) {
        user.setPassword(getOne(id).getPassword());
        user.setRoles(getOne(id).getRoles());
        userService.put(user, id);
    }
    @DeleteMapping("/user/{id}")
    public void delete(@PathVariable(value = "id") long id) {
        userService.delete(id);
    }
}
