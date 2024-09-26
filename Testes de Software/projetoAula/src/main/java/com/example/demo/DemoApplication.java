package com.example.demo;

import com.example.demo.Dao.AlunoDao;
import com.example.demo.model.Aluno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

//	@Autowired
//	AlunoDao ad;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("START SERVER");
//		Aluno a = new Aluno(1,"Zezin", "ze@ze",10,8, "APROVADO");
//		Aluno a1 = new Aluno(2,"PEdrin", "ze@ze",10,8, "APROVADO");
//		Aluno a2 = new Aluno(3,"Gustin", "ze@ze",10,8, "APROVADO");
//		ad.save(a);
//		ad.save(a1);
//		ad.save(a2);
//		System.out.println(ad.findAll().size());
	}
}
