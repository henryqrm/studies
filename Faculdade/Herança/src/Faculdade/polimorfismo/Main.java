/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Faculdade.polimorfismo;

/**
 *
 * @author henryqrm
 */
public class Main {
    
    /** Creates a new instance of Main */
    public Main() {
    }
    
    public static void main(String[] args) {
        Transporte tran[] = new Transporte[3];
        tran[0] = new Navio();   // Objetos das subclasses   
        tran[1] = new Aviao();   // podem pertencer   
        tran[2] = new Onibus();  // ao tipo da Superclasse.   
  		System.out.println(" exemplo aplicação polimorfismo .");
System.out.println("nomes dos alunos:  xxxxx.");


        for (int i = 0; i < tran.length; i++)   
            tran[i].exibeDados();       //Chamada polimórfica do método.   
}
    
}
