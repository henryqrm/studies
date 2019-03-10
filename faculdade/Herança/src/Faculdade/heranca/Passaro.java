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
public abstract class Passaro extends Animal
{
  public Passaro(String n) {
    super(n);
  }

  public void talk() {
    System.out.println("Piu piu");
  }
}
