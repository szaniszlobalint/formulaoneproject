package com.formulaone.demo.controllers;

import com.formulaone.demo.entities.AppUser;
import com.formulaone.demo.repositories.AppUserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class AppUserController {

    private final AppUserRepository appUserRepository;

    public AppUserController(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    @PostMapping("rest/loginuser")
    public boolean loginUser(@RequestBody AppUser appUser) {

        if (appUserRepository.findByUsername(appUser.getUsername()) == null) return false;

        return Objects.equals(appUserRepository.findByUsername(appUser.getUsername()).getPassword(), appUser.getPassword());
    }


}
