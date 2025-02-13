package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class EmailService {

    public void sendEmail(String email, String titulo,
                          String corpo) throws Exception {
        try {
            if (email.contains("@") && !titulo.isEmpty() && !corpo.isEmpty()) {
                System.out.println("O Gmail enviou um email para " + email +
                        " com titulo " + titulo+"\n\n"+corpo);
            }
        }catch (Exception ex){
            throw new Exception("Erro no envio de email : "+ex.getMessage());
        }
    }

}
