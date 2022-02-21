package seletores;

import org.openqa.selenium.By;

public class compras {

    //Caminho do id, xpath dos seletores

    public By btnPesquisa                  = By.id("twotabsearchtextbox");
    public By btnPreco                     = By.xpath("//*[@id=\"p_36/17270954011\"]/span/a/span");
    public By resultadoSPesquisa           = By.xpath("//*[@id=\"search\"]/div[1]/div[1]/div/span[3]/div[2]/div[1]/div/div/div/div/div/div[2]");
    public By resultadoSPesquisa2          = By.xpath("//*[@id=\"search\"]/div[1]/div[1]/div/span[3]/div[2]/div[1]/div/div/div/div/div/div[2]/div/div/div[1]/h2/a/span");
    public By btnProduto                   = By.xpath("//*[@id=\"search\"]/div[1]/div[1]/div/span[3]/div[2]/div[1]/div/div/div/div/div/div[1]/div/div[2]/div/span/a/div");//("//*[@id=\"search\"]/div[1]/div[1]/div/span[3]/div[2]/div[2]");
    public By addSacola                    = By.id("add-to-cart-button");
    public By btnLoja                      = By.xpath("//*[@id=\"p_6/A1ZZFT5FULY4LN\"]/span/a/span");
    public By confirmarSacola              = By.xpath("//*[@id=\"sw-atc-details-single-container\"]/div[2]/div/span");
    public By btnGarantia                  = By.xpath("//*[@id=\"attachSiNoCoverage\"]/span/input");
    public By btnQuantidade                = By.xpath("//*[@id=\"quantity\"]");
    public By btnMicrosoft                 = By.xpath("//*[@id=\"p_89/Microsoft\"]/span/a");
    public By btnMarcaMicrosoftA           = By.xpath("//*[@id=\"p_89/Microsoft\"]/span/a/span");
    public By btnCarrinho                  = By.xpath("//*[@id=\"nav-cart-count-container\"]");
    public By btnValor                     = By.xpath("//*[@id=\"sc-subtotal-amount-buybox\"]/span");
    public By confirmarBusca               = By.xpath("//*[@id=\"search\"]/span/div/h1/div/div[1]/div/div/span[1]");
    public By btnAcessorio                 = By.xpath("//*[@id=\"search\"]/div[1]/div[1]/div/span[3]/div[2]/div[1]/div/span/div/div/div[2]/div[1]/div/div");
    public By primeiroProduto              = By.xpath("//*[@id=\"search\"]/div[1]/div[1]/div/span[3]/div[2]/div[1]/div/span/div/div/span/a/div");
    public By qtdcompras                   = By.xpath("//*[@id=\"a-autoid-0-announce\"]");
    public By qtProduto                    = By.xpath("//*[@id=\"quantity_1\"]");
    public By corControle                  = By.xpath("//*[@id=\"tp-inline-twister-dim-values-container\"]/ul/li[3]");
}
