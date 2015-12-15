/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webservice;

import javax.annotation.Resource;
import javax.jws.Oneway;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;
import javax.servlet.ServletContext;
import javax.xml.ws.WebServiceContext;
import javax.xml.ws.handler.MessageContext;

/**
 *
 * @author henryqrm
 */
@WebService(serviceName = "MainService")
public class Main {

    private @Resource
    WebServiceContext webServiceContext;

    public String Faturamento(@WebParam(name = "Parte") String parte, @WebParam(name = "descricao") String descricao, @WebParam(name = "qte") int qte, @WebParam(name = "preco") double preco) {
        getServletContext().log("Parameters: Parte = " + parte + "; Descrição = " + descricao + "; Qte = " + qte + "; Preço = " + preco);
        Pagamento fatura = new Fatura(parte, descricao, qte, preco);
        return fatura.toString() + " pagamento feito " + fatura.getTotalPagamento();
    }
    public String Empregado(@WebParam(name = "Nome") String first,@WebParam(name = "Segundo nome") String last,@WebParam(name = "Mat") String mat,@WebParam(name = "Salario") double sal){
        getServletContext().log("Parameters: Nome = " + first + "; Segundo nome = " + last + "; mat = " + mat + "; Salario = " + sal);
        Pagamento empregado = new Empregado(first, last, mat, sal);
        return empregado.toString() + " pagamento feito " + empregado.getTotalPagamento();
    }

    @WebMethod(operationName = "log")
    @Oneway
    public void logServer(@WebParam(name = "message") String text) {
        // log message onto server
        getServletContext().log(text);
    }

    private ServletContext getServletContext() {
        return (ServletContext) webServiceContext.getMessageContext().get(
                MessageContext.SERVLET_CONTEXT);
    }

}
