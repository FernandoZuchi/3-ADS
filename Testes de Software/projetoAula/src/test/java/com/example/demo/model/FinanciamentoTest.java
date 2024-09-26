package com.example.demo.model;


import com.example.demo.service.EmailService;
import com.example.demo.service.Mock.EmailServiceMock01;
import com.example.demo.service.Mock.EmailServiceMock02;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
public class FinanciamentoTest {

    @Test
    @DisplayName("testar financiamento de Zero reais")
    public void teste001(){
        //Montar Cenário
        Financiamento f = new Financiamento();
        f.setValorFinanciado(0);
        f.setTaxaJuros(5);
        f.setNumeroParcelas(12);
        f.setValorEntrada(1000);
//        double valorEsperado =  informar erro
        //executar
        try {
            double valorCalculado = f.valorParcela();
            Assertions.fail("Não retornou erro!!!");
        }catch (Exception e){
            Assertions.assertTrue(e.getMessage()
                    .contains("Valor Financiado não pode ser 0"));
        }
    }


    @Test
    @DisplayName("financiamento de 1000 a 1.0% ao mês em 12 parcelas, sem entrada")
    public void teste002() throws Exception {
        //Montar Cenário
        Financiamento f = new Financiamento();
        f.setValorFinanciado(1000);
        f.setTaxaJuros(1);
        f.setNumeroParcelas(12);
        f.setValorEntrada(0);
        double valorEsperado = 93.34;
        //executar
        double valorCalculado = f.valorParcela();
        Assertions.assertEquals(valorEsperado, valorCalculado);

    }

    @Test
    @DisplayName("Teste de integração com o Gmail, impedir que o email seja enviado")
    public void testeIntegração001() throws Exception {
        Financiamento f = new Financiamento();
        f.setValorFinanciado(1000);
        f.setTaxaJuros(1);
        f.setNumeroParcelas(12);
        f.setValorEntrada(0);
        f.setEm( new EmailServiceMock01() );

        f.fecharFinanciamento("daves@daves","Daves Martins");
        Assertions.assertTrue(true);
    }


    @Test
    @DisplayName("Teste de integração erro de destinatário errado")
    public void testeIntegração002() throws Exception {
        Financiamento f = new Financiamento();
        f.setValorFinanciado(1000);
        f.setTaxaJuros(1);
        f.setNumeroParcelas(12);
        f.setValorEntrada(0);
        f.setEm( new EmailServiceMock02() );

        try {
            f.fecharFinanciamento("ze@ze.com", "Zezin das Coves");
            Assertions.fail("falhou!!!");
        }catch (Exception e){
            Assertions.assertEquals("538 - Destinátario inválido!!!",e.getMessage());
        }
    }


//    @Test
//    @DisplayName("Teste de integração Com Mockito")
//    public void testeIntegração003() throws Exception {
//        Financiamento f = new Financiamento();
//        f.setValorFinanciado(1000);
//        f.setTaxaJuros(1);
//        f.setNumeroParcelas(12);
//        f.setValorEntrada(0);
//
//        EmailService em  = mock(EmailService.class);
//
//        when(em.sendEmail("ze@ze.com",
//                "confirmação dos dados do financiamento",
//                "Parabéns, Sr(a) Zezin das Coves, o seu financimento no valor de " +
//                        "R$ 1000 foi aprovado. \n" +
//                        "Serão 12 parcelas de R$ 93.34") ).
//
////                thenThrow(
////        new Exception("\"538 - Destinátario inválido!!!\"");
////        );
//
//        f.setEm( em );
//
//        try {
//            f.fecharFinanciamento("ze@ze.com", "Zezin das Coves");
//            Assertions.fail("falhou!!!");
//        }catch (Exception e){
//            Assertions.assertEquals("538 - Destinátario inválido!!!",e.getMessage());
//        }
//    }

}
