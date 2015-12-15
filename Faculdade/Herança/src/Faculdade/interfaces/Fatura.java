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
public class Fatura implements Pagamento {

    private String numeroParte;
    private String descricaoParte;
    private int quantidade;
    private Double precoItem;

    // construtor
    public Fatura(String parte, String descricao, int qte, double preco) {
        this.numeroParte = parte;
        this.descricaoParte = descricao;
        this.quantidade = qte;
        this.precoItem = preco;
    }

    public void setNumeroParte(String parte) {
        numeroParte = parte;
    }

    public String getNumeroParte() {
        return numeroParte;
    }

    public void setDescricaoParte(String descricao) {
        descricaoParte = descricao;
    }

    public String getdecricaoParte() {
        return descricaoParte;
    }

    public void setQuantidade(int qte) {
        quantidade = (qte < 0) ? 0 : qte; // nao pode ser negativa
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setPrecoItem(double preco) {
        precoItem = (preco < 0.0) ? 0.0 : preco; // valida preco
    }

    public Double getPrecoItem() {
        return precoItem;
    }

    // retorno string do objeto fatura
    public String toString() {
        return ("Fatura: \n" + "\nNumero Parte: " + this.getNumeroParte() + "\nDescrição: " + this.getdecricaoParte() + "\nQuantidade: " + this.getQuantidade() + "\nPreço por Item: " + this.getPrecoItem());
    }

    /**
     * metodo requerido para executar o metodo da interface Pagamento
     */
    public double getTotalPagamento() {
        return (this.getQuantidade() * this.getPrecoItem()); //calcula preco total
    }
}
