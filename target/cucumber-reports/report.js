$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/FluxoCompraSite.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Realizar Compra no site da Amazon Brasil",
  "description": "",
  "id": "realizar-compra-no-site-da-amazon-brasil",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.before({
  "duration": 2238235500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Entrar em um grande portal de comércio online e adicionar produto com sucesso!",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.scenario({
  "line": 10,
  "name": "Validar Busca por produto",
  "description": "",
  "id": "realizar-compra-no-site-da-amazon-brasil;validar-busca-por-produto",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 9,
      "name": "@ComprarProduto"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "que o usuario entra no site da loja",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "faca uma busca por um produto",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "confirma o resultado da busca",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "escolher um produto da busca",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "adicionar no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o produto deve estar presente no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "comprasSteps.queOUsuarioEntraNoSiteDaLoja()"
});
formatter.result({
  "duration": 4091996900,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.facaUmaBuscaPorUmProduto()"
});
formatter.result({
  "duration": 13533029000,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.confirmaOResultadoDaBusca()"
});
formatter.result({
  "duration": 2087380300,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.escolherUmProdutoDaBusca()"
});
formatter.result({
  "duration": 6778790200,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.adicionarNoCarrinho()"
});
formatter.result({
  "duration": 3262082000,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.oProdutoDeveEstarPresenteNoCarrinho()"
});
formatter.result({
  "duration": 4437465600,
  "status": "passed"
});
formatter.after({
  "duration": 149909200,
  "status": "passed"
});
formatter.after({
  "duration": 691298100,
  "status": "passed"
});
});