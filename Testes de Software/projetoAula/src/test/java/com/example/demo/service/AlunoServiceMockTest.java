package com.example.demo.service;

import com.example.demo.Dao.AlunoDao;
import com.example.demo.model.Aluno;
import org.junit.jupiter.api.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.sql.SQLException;
import java.util.ArrayList;

@SpringBootTest
@ActiveProfiles("test")
public class AlunoServiceMockTest {
    @Mock
    AlunoDao aDao;
    @InjectMocks
    AlunoService aServ;

    @Test
    @DisplayName("consulta numero de alunos aprovados")
    public void teste01(){
        Aluno a = new Aluno(1,"Zezin",
                "ze@ze",10,8, "APROVADO");
        Aluno a1 = new Aluno(2,"PEdrin",
                "ze@ze",10,8, "APROVADO");
        ArrayList<Aluno> alunos = new ArrayList<>();
        alunos.add(a);
        alunos.add(a1);
        Mockito.when(aDao.findByStatus("APROVADO")).thenReturn(alunos);

        System.out.println(aServ.alunosAprovados().size());

        int esperado = 2;
        int resultado = aServ.alunosAprovados().size();
        Assertions.assertEquals(esperado, resultado);
    }



//    @Test
//    @DisplayName("salvar aluno válido")
//    public void teste02() throws SQLException {
//        Aluno a = new Aluno(4,"Jefin",
//                "ze@ze",9,8, "APROVADO");
//
//        aServ.saveAluno(a);
//
//        Aluno a1 = aDao.findByNome("Jefin");
//        Assertions.assertEquals(a.getNome(), a1.getNome());
//    }
//    @Test
//    @DisplayName("salvar aluno sem nome")
//    public void teste03() {
//        Aluno a = new Aluno(4,"",
//                "ze@ze",9,8, "APROVADO");
//
//        try {
//            aServ.saveAluno(a);
//            Assertions.fail("Falhou !!!!!");
//        } catch (SQLException e) {
//            Assertions.assertEquals("Nome não pode ser vazio",
//                    e.getMessage());
//        }
//
//    }


}
