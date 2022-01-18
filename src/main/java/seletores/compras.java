package seletores;

import org.openqa.selenium.By;

public class compras {

    //Caminho do id, xpath dos seletores

    public By btnPesquisa                  = By.id("input-search");
    public By btnCookies                   = By.xpath("//*[@id=\"__next\"]/div/main/div[1]/div[2]/button");
    public By resultadoSPesquisa           = By.xpath("//*[@id=\"__next\"]/div/main/section[4]/div[3]/div/ul/li[1]/a/div[2]/h2");
    public By produto                      = By.xpath("//*[@id=\"__next\"]/div/main/section[4]/div[3]/div/ul/li[1]/a/div[1]");
    public By addSacola                    = By.xpath("/html/body/div[3]/div[5]/div[1]/div[3]/div[2]/button[2]");
    public By btnContinuar                 = By.xpath("/html/body/div[2]/div/div/div[3]/div[1]/div[4]/a");
}
