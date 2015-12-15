/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Faculdade.WebService;

import Faculdade.interfaces.*;

/**
 *
 * @author henryqrm
 */
public class Empregado implements Pagamento {

    private String firstName;
    private String lastName;
    private String matricula;
    private double salario;

    public Empregado(String first, String last, String mat, double sal) {
        firstName = first;
        lastName = last;
        matricula = mat;
        salario = sal;
    }

    public void setFirstName(String first) {
        firstName = first;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setLastName(String last) {
        this.lastName = last;
    }

    public String getLastName() {
        return lastName;
    }

    public void setMatricula(String mat) {
        matricula = mat;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setSalario(double sal) {
        this.salario = (sal < 0.0) ? 0.0 : sal; // valida sal
    }

    public double getSalario() {
        return (this.salario);
    }

    // retorno string do objeto fatura
    public String toString() {
        return ("Número Matricula: " + this.getFirstName() + this.getLastName() + this.getMatricula() + this.getSalario());
    }

    /**
     * metodo requerido para executar o metodo da interface Pagamento
     */
    public double getTotalPagamento() {
        return getSalario() * 10.0; //calcula preco total
    }
}
