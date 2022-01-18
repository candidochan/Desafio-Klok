package stepsDefinitions;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageObjects.comprasPage;

public class comprasSteps {
    private comprasPage login = new comprasPage();

    @Dado("^que o usuario entra no site da loja$")
    public void queOUsuarioEntraNoSiteDaLoja() throws Throwable {
        login.siteMagazine();

    }

    @Dado("^faça uma busca por um produto$")
    public void façaUmaBuscaPorUmProduto() throws Throwable {
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

    }

}
