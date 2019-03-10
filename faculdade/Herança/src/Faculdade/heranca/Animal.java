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
public abstract class Animal
{
  private String nome;

  public Animal(String n) {
    nome = n;
  }

  public String getName() { return(nome); }

  public abstract void talk();
}
