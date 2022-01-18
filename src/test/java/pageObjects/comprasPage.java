package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.Keys;
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
        DriverFactory.getDriver().findElement(loja.btnPesquisa).sendKeys(Keys.ENTER);
        Thread.sleep(2000);

    }

    public void confirmaBusca() throws InterruptedException {
        String resultado = DriverFactory.getDriver().findElement(loja.resultadoSPesquisa).getText();
        Assert.assertEquals("Smartphone Motorola Moto E20 32GB Cinza 4G",resultado);
        Thread.sleep(2000);
        System.out.println("O Produto pequisado foi: " + resultado);


    }

    public void escolherProduto() throws InterruptedException {
        clicarBotao(loja.produto);
        Thread.sleep(2000);

    }

    public void adicionarSacola() throws InterruptedException {
        clicarBotao(loja.addSacola);
        Thread.sleep(2000);
        clicarBotao(loja.btnContinuar);
        Thread.sleep(2000);

    }
}
