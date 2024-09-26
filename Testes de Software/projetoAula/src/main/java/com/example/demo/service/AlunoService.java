package com.example.demo.service;

import com.example.demo.Dao.AlunoDao;
import com.example.demo.model.Aluno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    AlunoDao aDao;

    public List<Aluno> alunosAprovados(){
        List<Aluno> lista = aDao.findByStatus("APROVADO");
        return lista;
    }

    public Aluno saveAluno(Aluno alu) throws SQLException {
        if (alu.getNome().isBlank() || alu.getNome().isEmpty() ){
            throw new SQLException("Nome não pode ser vazio");
        }
        if (!alu.getEmail().contains("@")  ){
            throw new SQLException("Email Inválido");
        }
        if (alu.getNota1() < 0 || alu.getNota2() < 0 ){
            throw new SQLException("Notas Incorretas");
        }
        return aDao.save( alu );
    }

    public Optional<Aluno> buscarAlunoPorId(int id) throws SQLException {
        Optional<Aluno> aluno = aDao.findById(id);
        if (aluno.isEmpty()) {
            throw new SQLException("Aluno não encontrado com o ID: " + id);
        }
        return aluno;
    }

    public Aluno atualizarNotas(int id, double novaNota1, double novaNota2) throws SQLException {
        Optional<Aluno> alunoOptional = aDao.findById(id);
        if (alunoOptional.isEmpty()) {
            throw new SQLException("Aluno não encontrado com o ID: " + id);
        }

        Aluno aluno = alunoOptional.get();
        if (novaNota1 < 0 || novaNota2 < 0) {
            throw new SQLException("Notas inválidas");
        }

        aluno.setNota1(novaNota1);
        aluno.setNota2(novaNota2);

        return aDao.save(aluno);
    }

    public List<Aluno> buscarAlunosPorNotaMinima(double notaMinima) {
        return aDao.findAll().stream()
                .filter(aluno -> (aluno.getNota1() + aluno.getNota2()) / 2 >= notaMinima)
                .collect(Collectors.toList());
    }

    public Aluno atualizarStatus(int id) throws SQLException {
        Optional<Aluno> alunoOptional = aDao.findById(id);
        if (alunoOptional.isEmpty()) {
            throw new SQLException("Aluno não encontrado com o ID: " + id);
        }

        Aluno aluno = alunoOptional.get();
        double media = (aluno.getNota1() + aluno.getNota2()) / 2;

        if (media >= 6) {
            aluno.setStatus("APROVADO");
        } else {
            aluno.setStatus("REPROVADO");
        }

        return aDao.save(aluno);
    }

}
