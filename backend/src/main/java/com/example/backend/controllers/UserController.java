package com.example.backend.controllers;

import com.example.backend.entity.models.AppUser;
import com.example.backend.entity.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    IUserService userService;

    @GetMapping("/user")
    public List<AppUser> getAll() {
        return userService.getAll();
    }

    @GetMapping("/user/{id}")
    public AppUser getOne(@PathVariable(value = "id")long id) {
        return userService.getOne(id);
    }

    @PostMapping("/user")
    public void post(AppUser appUser) {
        userService.post(appUser);
    }

    @PutMapping("/user/{id}")
    public void put(AppUser appUser, @PathVariable(value = "id") long id) {
        userService.put(appUser, id);
    }

    @DeleteMapping("/user/{id}")
    public void delete(@PathVariable(value = "id") long id) {
        userService.delete(id);
    }
}
