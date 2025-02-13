package com.example.demo.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class PessoaTest {

    @Test
    @DisplayName("testando o imc de uma pessoa")
    public void teste_valores_OK() throws Exception {
        //1º passo - preparação
        Pessoa p = new Pessoa("",80, 1.8);
        double imcEsperado = 24.698;

        //2º passo - execução
        double imcObtido = p.imc();

        //3º passo - Validação do teste
        Assertions.assertEquals(imcEsperado,imcObtido,0.01);
    }

    @Test
    @DisplayName("testando o imc de uma pessoa magra, no limite")
    public void teste_limite_inferior_magro() throws Exception {
        //1º passo - preparação
        Pessoa p = new Pessoa("",41.6, 1.5);
        double imcEsperado = 18.49;

        //2º passo - execução
        double imcObtido = p.imc();

        //3º passo - Validação do teste
        Assertions.assertEquals(imcEsperado,imcObtido,0.01);
    }

    @Test
    @DisplayName("testando o imc com peso zerado")
    public void teste_peso_zero(){
        //1º passo - preparação
        Pessoa p = new Pessoa("",0, 1.5);
//        double imcEsperado = 18.49;

        //2º passo - execução
        try {
            double imcObtido = p.imc();
            Assertions.fail("não deveria executar o método "+imcObtido);
        }catch (Exception e){
           Assertions.assertTrue(e.getMessage().contains("peso não pode ser menor que zero"));
        }
        //3º passo - Validação do teste
//        Assertions.assertEquals(imcEsperado,imcObtido,0.01);
    }

    @Test
    @DisplayName("testando o imc com peso negativo")
    public void teste1(){
        //1º passo - preparação
        Pessoa p = new Pessoa("",-1, 1.5);
//        double imcEsperado = 18.49;

        //2º passo - execução
        try {
            double imcObtido = p.imc();
            Assertions.fail("não deveria executar o método "+imcObtido);
        }catch (Exception e){
            Assertions.assertTrue(e.getMessage().contains("peso não pode ser menor que zero"));
        }
        //3º passo - Validação do teste
//        Assertions.assertEquals(imcEsperado,imcObtido,0.01);
    }

    @Test
    @DisplayName("testando o imc com altura zerado")
    public void teste2(){
        //1º passo - preparação
        Pessoa p = new Pessoa("",80, 0);
//        double imcEsperado = 18.49;

        //2º passo - execução
        try {
            double imcObtido = p.imc();
            Assertions.fail("não deveria executar o método "+imcObtido);
        }catch (Exception e){
            Assertions.assertTrue(e.getMessage().contains("altura não pode ser menor que zero"));
        }
        //3º passo - Validação do teste
//        Assertions.assertEquals(imcEsperado,imcObtido,0.01);
    }

    @Test
    @DisplayName("testando o imc com altura negativo")
    public void teste3(){
        //1º passo - preparação
        Pessoa p = new Pessoa("",80, -1.5);
//        double imcEsperado = 18.49;

        //2º passo - execução
        try {
            double imcObtido = p.imc();
            Assertions.fail("não deveria executar o método "+imcObtido);
        }catch (Exception e){
            Assertions.assertTrue(e.getMessage().contains("altura não pode ser menor que zero"));
        }
        //3º passo - Validação do teste
//        Assertions.assertEquals(imcEsperado,imcObtido,0.01);
    }


    @Test
    @DisplayName("testa faixa de uma pessoa magra")
    public void teste4() throws Exception {
        //preparação
        Pessoa p = new Pessoa("",41.6, 1.5);
//        double imcEsperado = 18.49;
        String esperado = "magro";

        //executar
        String resultado = p.faixa();

        //conferencia
        Assertions.assertEquals(esperado, resultado);
    }

    @Test
    @DisplayName("testa faixa de uma pessoa magra, limite superior")
    public void teste5() throws Exception {
        //preparação
        Pessoa p = new Pessoa("",41.62, 1.5);
//        double imcEsperado = 18.50;
        String esperado = "magro";

        //executar
        String resultado = p.faixa();

        //conferencia
        Assertions.assertEquals(esperado, resultado);
    }


    @Test
    @DisplayName("testa faixa de uma pessoa normal, limite inferior")
    public void teste6() throws Exception {
        //preparação
        Pessoa p = new Pessoa("",41.64, 1.5);
//        double imcEsperado = 18.51;
        String esperado = "Normal";

        //executar
        String resultado = p.faixa();

        //conferencia
        Assertions.assertEquals(esperado, resultado);
    }

}
