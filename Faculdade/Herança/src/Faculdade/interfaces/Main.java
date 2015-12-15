/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Faculdade.interfaces;

/**
 *
 * @author henryqrm
 */
public class Main {

    public static void main(String args[]) {
        Pagamento pagObjetos[] = new Pagamento[4];

        pagObjetos[0] = new Fatura("123", "bicicleta", 2, 200.00);
        pagObjetos[1] = new Fatura("222", "bola", 5, 10.00);
        pagObjetos[2] = new Empregado("Pedro", "Sousa", "222",
                350.00);
        pagObjetos[3] = new Empregado("João", "Silva", "111", 100.00);

        System.out.println("Faturas e empregados processados polifomicamente pela interface: \n ");

        // processa os objetos
        for (int i = 0;
                i < pagObjetos.length;
                i++) {
            System.out.println(pagObjetos[i].toString() + " pagamento feito " + pagObjetos[i].getTotalPagamento());
        }
    }
}
