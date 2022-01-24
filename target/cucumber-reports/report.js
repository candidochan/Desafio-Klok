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
  "duration": 2513515800,
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
  "line": 19,
  "name": "Adicionar acessórios para a compra",
  "description": "",
  "id": "realizar-compra-no-site-da-amazon-brasil;adicionar-acessórios-para-a-compra",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 18,
      "name": "@AdicionarAcessorios"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "que o usuario entra no site da loja",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "faça uma busca por acessorios",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "confirma o resultado da busca",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "escolher os produtos",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "adicionar acessórios no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "os produtos deverao estar presente no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "comprasSteps.queOUsuarioEntraNoSiteDaLoja()"
});
formatter.result({
  "duration": 4580554300,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.façaUmaBuscaPorAcessorios()"
});
formatter.result({
  "duration": 7180458900,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.confirmaOResultadoDaBusca()"
});
formatter.result({
  "duration": 2061580700,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.escolherOsProdutos()"
});
formatter.result({
  "duration": 10694951900,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.adicionarAcessóriosNoCarrinho()"
});
formatter.result({
  "duration": 3268337800,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.osProdutosDeveraoEstarPresenteNoCarrinho()"
});
formatter.result({
  "duration": 2456548300,
  "status": "passed"
});
formatter.after({
  "duration": 228282500,
  "status": "passed"
});
formatter.after({
  "duration": 747525200,
  "status": "passed"
});
});