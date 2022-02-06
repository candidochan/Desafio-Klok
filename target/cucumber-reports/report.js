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
  "duration": 2103089299,
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
  "duration": 4346429900,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.facaUmaBuscaPorUmProduto()"
});
formatter.result({
  "duration": 11535853600,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.confirmaOResultadoDaBusca()"
});
formatter.result({
  "duration": 2039605300,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.escolherUmProdutoDaBusca()"
});
formatter.result({
  "duration": 2076941499,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.adicionarNoCarrinho()"
});
formatter.result({
  "duration": 42726501,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#add\\-to\\-cart\\-button\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SINSAON1519\u0027, ip: \u0027192.168.100.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\BRUNO~1.CAN\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:51390}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 51f92dd3f10e20a0ca9052a2e9b78f5b\n*** Element info: {Using\u003did, value\u003dadd-to-cart-button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat webDriver.BasePage.clicarBotao(BasePage.java:108)\r\n\tat pageObjects.comprasPage.adicionarSacola(comprasPage.java:51)\r\n\tat stepsDefinitions.comprasSteps.adicionarNoCarrinho(comprasSteps.java:38)\r\n\tat ✽.E adicionar no carrinho(features/FluxoCompraSite.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "comprasSteps.oProdutoDeveEstarPresenteNoCarrinho()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 181482600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("URL ScreenShot: https://www.amazon.com.br/s?k\u003dConsole+Xbox+Series+S\u0026i\u003dvideogames\u0026rh\u003dn%3A7791985011%2Cp_89%3AMicrosoft%2Cp_36%3A17270954011\u0026dc\u0026__mk_pt_BR\u003d%C3%85M%C3%85%C5%BD%C3%95%C3%91\u0026crid\u003d1HS8T52HU9CO3\u0026qid\u003d1644114057\u0026rnid\u003d17270949011\u0026sprefix\u003dconsole+xbox+series+s%2Caps%2C361\u0026ref\u003dsr_nr_p_36_4");
formatter.after({
  "duration": 846660000,
  "status": "passed"
});
});