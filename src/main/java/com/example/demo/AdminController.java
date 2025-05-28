package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    private final AdminConfig adminConfig;

    @Autowired
    public AdminController(AdminConfig adminConfig) {
        this.adminConfig = adminConfig;
    }

    @GetMapping("/admin-info")
    public String getAdminInfo() {
        return "Username: " + adminConfig.getUsername() +
                " | Password: " + adminConfig.getPassword();
    }
}
