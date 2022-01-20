package pageObjects;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import seletores.compras;
import webDriver.BasePage;
import webDriver.DriverFactory;

public class comprasPage extends BasePage {
    compras loja = new compras();
    String url = "https://www.amazon.com.br/";

    public void siteMagazine() throws InterruptedException {
        DriverFactory.getDriver().get(url);
        Thread.sleep(2000);

    }

    public void buscaProduto() throws InterruptedException {
        clicarBotao(loja.btnPesquisa);
        escrever(loja.btnPesquisa, "Console Xbox Series S");
        Thread.sleep(2000);
        DriverFactory.getDriver().findElement(loja.btnPesquisa).sendKeys(Keys.ENTER);
        Thread.sleep(2000);
        clicarBotao(loja.btnMicrosoft);
        Thread.sleep(1000);
        clicarBotao(loja.btnPreco);
        Thread.sleep(2000);
        clicarBotao(loja.btnLoja);
        Thread.sleep(2000);


    }

    public void confirmaBusca() throws InterruptedException {
        Thread.sleep(2000);
        String busca = DriverFactory.getDriver().findElement(loja.confirmarBusca).getText();
        System.out.println("Existe : " + busca + " sua busca!");


    }

    public void escolherProduto() throws InterruptedException {
        clicarBotao(loja.btnProduto);
        Thread.sleep(2000);

    }

    public void adicionarSacola() throws InterruptedException {
        clicarBotao(loja.addSacola);
        Thread.sleep(2000);

    }

    public void confirmaItemCarrinho() throws InterruptedException {
        //Verificar quantidade de produtos e valor da compra
        Thread.sleep(2000);
        clicarBotao(loja.btnCarrinho);
        String quantidade = DriverFactory.getDriver().findElement(loja.btnCarrinho).getText();
        String valor = DriverFactory.getDriver().findElement(loja.btnValor).getText();
        System.out.println("Quantidade de produtos no carrinho: " + quantidade + ", totalizando " + valor);


    }

    public void buscaAcessorios() throws InterruptedException {
        clicarBotao(loja.btnPesquisa);
        escrever(loja.btnPesquisa, "Controle sem Fio Xbox - Carbon Black");
        Thread.sleep(2000);
        DriverFactory.getDriver().findElement(loja.btnPesquisa).sendKeys(Keys.ENTER);
        clicarBotao(loja.btnMicrosoftA);
        Thread.sleep(2000);

    }

    public void escolherAcessorio() throws InterruptedException {
        clicarBotao(loja.btnAcessorio);
        Thread.sleep(3000);
        WebElement element = DriverFactory.getDriver().findElement(loja.btnQuantidade);
        Select select= new Select(element);
        select.selectByValue("2");
        Thread.sleep(1000);


    }

    public void adicionarCarrinho() throws InterruptedException {
        clicarBotao(loja.addSacola);
        Thread.sleep(2000);
        clicarBotao(loja.btnGarantia);
        Thread.sleep(1000);
    }

    public void confirmarCarrinho() {
        clicarBotao(loja.btnCarrinho);
        String quantidade = DriverFactory.getDriver().findElement(loja.btnCarrinho).getText();
        String valor = DriverFactory.getDriver().findElement(loja.btnValor).getText();
        System.out.println("Quantidade de produtos no carrinho: " + quantidade + ", totalizando " + valor);
    }

    public void paraCompra() throws InterruptedException {
        clicarBotao(loja.btnPesquisa);
        escrever(loja.btnPesquisa, "Carregador de Pilhas Recarregáveis AA e AAA DURACELL Com 4 Pilhas AA");
        Thread.sleep(2000);
        DriverFactory.getDriver().findElement(loja.btnPesquisa).sendKeys(Keys.ENTER);
        Thread.sleep(2000);
        String busca = DriverFactory.getDriver().findElement(loja.confirmarBusca).getText();
        System.out.println("Existe : " + busca + " sua busca!");
        clicarBotao(loja.primeiroProduto);
        Thread.sleep(2000);
        WebElement element = DriverFactory.getDriver().findElement(loja.btnQuantidade);
        Select select= new Select(element);
        select.selectByValue("4");
        Thread.sleep(1000);
        clicarBotao(loja.addSacola);


    }

    public void excluirProdutos() throws InterruptedException {
        clicarBotao(loja.btnCarrinho);
        Thread.sleep(2000);
        clicarBotao(loja.qtdcompras);
        Thread.sleep(2000);
        clicarBotao(loja.qtProduto);
        Thread.sleep(3000);
        String quantidade = DriverFactory.getDriver().findElement(loja.btnCarrinho).getText();
        String valor2 = DriverFactory.getDriver().findElement(loja.btnValor).getText();
        System.out.println("Quantidade de produtos no carrinho depois da exclusão: " + quantidade + ", totalizando " + valor2);


    }
}
