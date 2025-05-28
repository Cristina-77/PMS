package com.example.demo;

import com.google.api.client.auth.oauth2.Credential;
import com.example.demo.google.GoogleAuth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OAuthTest {

    // Creează un logger folosind SLF4J
    private static final Logger logger = LoggerFactory.getLogger(OAuthTest.class);

    public static void main(String[] args) {
        try {
            // Obține credențialele de la GoogleAuth
            Credential cred = GoogleAuth.getCredentials();

            // Afișează token-ul de acces
            System.out.println("Access Token: " + cred.getAccessToken());
        } catch (Exception e) {
            // Loghează eroarea în loc să folosești printStackTrace
            logger.error("A apărut o eroare în procesul de autentificare: ", e);
        }
    }
}
