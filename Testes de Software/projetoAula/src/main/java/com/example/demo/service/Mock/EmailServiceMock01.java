package com.example.demo.service.Mock;

import com.example.demo.service.EmailService;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceMock01 extends EmailService {

    public void sendEmail(String email, String titulo,
                          String corpo) throws Exception {
        System.out.println("Email enviado com sucesso!!!");
    }

}
