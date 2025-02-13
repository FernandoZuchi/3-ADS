package com.example.demo.Dao;

import com.example.demo.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlunoDao extends JpaRepository<Aluno, Integer> {


    public List<Aluno> findByStatus(String status);

    public Aluno findByNome(String nome);

}
