package com.backend.login.loginradiomilka.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.login.loginradiomilka.model.user.user;
import com.backend.login.loginradiomilka.repositories.UserRepository;

@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    public user findByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    public boolean isEmailTaken(String email) {
        return userRepository.existsByEmail(email);
    }
}