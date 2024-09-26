package com.example.demo.service.Mock;

import com.example.demo.service.EmailService;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceMock02 extends EmailService {

    public void sendEmail(String email, String titulo,
                          String corpo) throws Exception {
        throw new Exception("538 - Destinátario inválido!!!");
    }

}
