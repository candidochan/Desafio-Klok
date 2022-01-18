$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/FluxoCompraSite.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Realizar Compra no E-commerce",
  "description": "\r\nComo um comprador\r\nQuero ver a lista de produtos disponíveis\r\nPara que eu possa escolher qual devo comprar",
  "id": "realizar-compra-no-e-commerce",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 2256692900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validar Busca por produto",
  "description": "",
  "id": "realizar-compra-no-e-commerce;validar-busca-por-produto",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@ValidarBuscaPorProduto"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "que o usuario entra no site da loja",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "faça uma busca por um produto",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "confirma o resultado da busca",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "escolher um produto da busca",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "adicionar no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o produto deve estar presente no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "comprasSteps.queOUsuarioEntraNoSiteDaLoja()"
});
formatter.result({
  "duration": 8522398900,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.façaUmaBuscaPorUmProduto()"
});
formatter.result({
  "duration": 4547567700,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.confirmaOResultadoDaBusca()"
});
formatter.result({
  "duration": 2068528600,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.escolherUmProdutoDaBusca()"
});
formatter.result({
  "duration": 4195953100,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.adicionarNoCarrinho()"
});
formatter.result({
  "duration": 6609187000,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.oProdutoDeveEstarPresenteNoCarrinho()"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.after({
  "duration": 750705400,
  "status": "passed"
});
});