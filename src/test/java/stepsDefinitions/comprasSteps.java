package stepsDefinitions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.comprasPage;

public class comprasSteps {
    private comprasPage login = new comprasPage();

    @Dado("^que o usuario entra no site da loja$")
    public void queOUsuarioEntraNoSiteDaLoja() throws Throwable {
        login.siteMagazine();

    }

    @Dado("^faca uma busca por um produto$")
    public void facaUmaBuscaPorUmProduto() throws Throwable {
        login.buscaProduto();

    }

    @Dado("^confirma o resultado da busca$")
    public void confirmaOResultadoDaBusca() throws Throwable {
        login.confirmaBusca();

    }

    @Quando("^escolher um produto da busca$")
    public void escolherUmProdutoDaBusca() throws Throwable {
        login.escolherProduto();

    }

    @Quando("^adicionar no carrinho$")
    public void adicionarNoCarrinho() throws Throwable {
        login.adicionarSacola();


    }

    @Entao("^o produto deve estar presente no carrinho$")
    public void oProdutoDeveEstarPresenteNoCarrinho() throws Throwable {
        login.confirmaItemCarrinho();

    }

    //Segundo cenário
    @Dado("^faca uma busca por acessorios$")
    public void facaUmaBuscaPorAcessorios() throws Throwable {
        login.buscaAcessorios();

    }

    @Quando("^escolher os produtos$")
    public void escolherOsProdutos() throws Throwable {
        login.escolherAcessorio();


    }

    @E("^adicionar acessórios no carrinho$")
    public void adicionarAcessóriosNoCarrinho() throws Throwable {
        login.adicionarCarrinho();
    }

    @Entao("^os produtos deverao estar presente no carrinho$")
    public void osProdutosDeveraoEstarPresenteNoCarrinho() throws Throwable {
       login.confirmarCarrinho();

    }

    @Dado("^busque produtos para compra$")
    public void busqueProdutosParaCompra() throws Throwable {
        login.paraCompra();


    }

    @Quando("^escolher os produtos para compra$")
    public void escolherOsProdutosParaCompra() throws Throwable {
       facaUmaBuscaPorAcessorios();
       escolherOsProdutos();
       adicionarAcessóriosNoCarrinho();

    }

    @E("^verificar produtos no carrinho e valor$")
    public void verificarProdutosNoCarrinhoEValor() throws Throwable {
        oProdutoDeveEstarPresenteNoCarrinho();

    }

    @Entao("^deverá excluir um ou mais produtos do carrinho$")
    public void deveráExcluirUmOuMaisProdutosDoCarrinho() throws Throwable {
        login.excluirProdutos();

    }

}
