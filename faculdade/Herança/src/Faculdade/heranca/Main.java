/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Faculdade.heranca;

/**
 *
 * @author henryqrm
 */
class Main {

    public static void main(String args[]) {
        Vaca leiteira = new Vaca("Malhada");
        System.out.println("Eu sou " + leiteira.getName());
        System.out.println("Eu falo: ");
        leiteira.talk();
        Cachorro dalmata = new Cachorro("Pongo");
        System.out.println("Eu sou " + dalmata.getName());
        System.out.println("Eu falo: ");
        dalmata.talk();
        BemTeVi btv = new BemTeVi("Amarelinho");
        System.out.println("Eu sou " + btv.getName());
        System.out.println("Eu falo: ");
        btv.talk();
    }
}
