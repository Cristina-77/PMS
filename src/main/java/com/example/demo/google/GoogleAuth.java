package com.example.demo.google;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.auth.oauth2.GoogleCredentials;

import java.io.IOException;
import java.util.List;

public class GoogleAuth {

    // Metodă pentru obținerea credentialelor Google
    public static Credential getCredentials() throws IOException {
        // Încarcă fișierul JSON de cont de serviciu
        GoogleCredentials googleCredentials = GoogleCredentials.fromStream(
                        GoogleAuth.class.getResourceAsStream("\"D:\\faculta\\pc\\proiect-colectiv\\proiect-colectiv\\src\\main\\resources\\pc-monitori-200c977bebd7.json\""))
                .createScoped(List.of("https://www.googleapis.com/auth/drive"));

        // Convertește GoogleCredentials într-un GoogleCredential

        // Returnează credentialul Google
        return new GoogleCredential().setAccessToken(googleCredentials.getAccessToken().getTokenValue());
    }
}
