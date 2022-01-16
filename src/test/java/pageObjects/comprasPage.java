package pageObjects;

import seletores.compras;
import webDriver.BasePage;
import webDriver.DriverFactory;

public class comprasPage extends BasePage {
    compras loja = new compras();
    String url = "https://www.magazineluiza.com.br/";

    public void siteMagazine() throws InterruptedException {
        DriverFactory.getDriver().get(url);
        Thread.sleep(2000);
        clicarBotao(loja.btnCookies);
        Thread.sleep(3000);
    }

    public void buscaProduto() throws InterruptedException {
        clicarBotao(loja.btnPesquisa);
        escrever(loja.btnPesquisa, "Smartphone Motorola Moto E20 32GB Cinza 4G");
        Thread.sleep(2000);
    }
}
