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
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 2275648300,
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
  "name": "faça uma busca por um produto",
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
  "duration": 4978567300,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.façaUmaBuscaPorUmProduto()"
});
formatter.result({
  "duration": 13050785900,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.confirmaOResultadoDaBusca()"
});
formatter.result({
  "duration": 2044462200,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.escolherUmProdutoDaBusca()"
});
formatter.result({
  "duration": 5133839900,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.adicionarNoCarrinho()"
});
formatter.result({
  "duration": 3579641200,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.oProdutoDeveEstarPresenteNoCarrinho()"
});
formatter.result({
  "duration": 3285725900,
  "status": "passed"
});
formatter.after({
  "duration": 740642600,
  "status": "passed"
});
});