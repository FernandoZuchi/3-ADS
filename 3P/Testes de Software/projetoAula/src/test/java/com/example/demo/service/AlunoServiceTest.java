package com.example.demo.service;

import com.example.demo.Dao.AlunoDao;
import com.example.demo.model.Aluno;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.sql.SQLException;

@SpringBootTest
@ActiveProfiles("test")
//@DataJpaTest
public class AlunoServiceTest {

    @Autowired
    AlunoDao aDao;

    @Autowired
    AlunoService aServ;

    @BeforeEach
    public void initBAnco(){
        //System.out.println("ANTES");
        Aluno a = new Aluno(1,"Zezin",
                "ze@ze",10,8, "APROVADO");
		Aluno a1 = new Aluno(2,"PEdrin",
                "ze@ze",10,8, "APROVADO");
		Aluno a2 = new Aluno(3,"Gustin",
                "ze@ze",10,8, "REPROVADO");
        aDao.save(a);
        aDao.save(a1);
        aDao.save(a2);
    }
    @AfterEach
    public void closeBAnco(){
        //System.out.println("DEPOIS");
        aDao.deleteAll();
    }

    @BeforeAll
    public static void initBAnco1(){
        System.out.println("ANTES DE TUDO");
    }
    @AfterAll
    public static void closeBAnco1(){
        System.out.println("DEPOIS DE TUDO");
    }

    @Test
    @DisplayName("consulta numero de alunos aprovados")
    public void teste01(){
        int esperado = 2;

        int resultado = aServ.alunosAprovados().size();

        Assertions.assertEquals(esperado, resultado);
    }
    @Test
    @DisplayName("salvar aluno válido")
    public void teste02() throws SQLException {
        Aluno a = new Aluno(4,"Jefin",
                "ze@ze",9,8, "APROVADO");

        aServ.saveAluno(a);

        Aluno a1 = aDao.findByNome("Jefin");
        Assertions.assertEquals(a.getNome(), a1.getNome());
    }
    @Test
    @DisplayName("salvar aluno sem nome")
    public void teste03() {
        Aluno a = new Aluno(4,"",
                "ze@ze",9,8, "APROVADO");

        try {
            aServ.saveAluno(a);
            Assertions.fail("Falhou !!!!!");
        } catch (SQLException e) {
            Assertions.assertEquals("Nome não pode ser vazio",
                    e.getMessage());
        }

    }


}
