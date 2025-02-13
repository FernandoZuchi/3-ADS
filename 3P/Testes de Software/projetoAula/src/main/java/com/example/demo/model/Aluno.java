package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Aluno {

    @Id
    private int id;
    private String nome;
    private String email;
    private double nota1, nota2;
    private String status;

    public boolean isAprovado(){
        double media = media();
        return media >= 7;
    }

    public double media() {
        return nota1 + nota2 /2;
    }

}
