$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/FluxoCompraSite.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Realizar Compra no site da Magazine Luiza",
  "description": "\r\nComo um comprador\r\nQuero ver a lista de produtos disponíveis\r\nPara que eu possa escolher qual devo comprar",
  "id": "realizar-compra-no-site-da-magazine-luiza",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 3650822700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validar Busca por produto",
  "description": "",
  "id": "realizar-compra-no-site-da-magazine-luiza;validar-busca-por-produto",
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
  "duration": 10634558200,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.façaUmaBuscaPorUmProduto()"
});
formatter.result({
  "duration": 4567500800,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.confirmaOResultadoDaBusca()"
});
formatter.result({
  "duration": 2203029000,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.escolherUmProdutoDaBusca()"
});
formatter.result({
  "duration": 12966352300,
  "status": "passed"
});
formatter.match({
  "location": "comprasSteps.adicionarNoCarrinho()"
});
formatter.result({
  "duration": 19829266700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div/div/div[3]/div[1]/div[4]/a\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SINSAON1519\u0027, ip: \u0027192.168.100.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\BRUNO~1.CAN\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:63338}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fae193a8dc3e56bc3d603356923668bb\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[2]/div/div/div[3]/div[1]/div[4]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat webDriver.BasePage.clicarBotao(BasePage.java:108)\r\n\tat pageObjects.comprasPage.adicionarSacola(comprasPage.java:47)\r\n\tat stepsDefinitions.comprasSteps.adicionarNoCarrinho(comprasSteps.java:37)\r\n\tat ✽.E adicionar no carrinho(features/FluxoCompraSite.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "comprasSteps.oProdutoDeveEstarPresenteNoCarrinho()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("URL ScreenShot: http://validate.perfdrive.com/ca4df1c7abf7ea2cc50ab30bdf7ed2bb/?ssa\u003d2afe84cd-61ac-4415-bf07-44d1a89e3758\u0026ssb\u003d82173276799\u0026ssc\u003dhttps%3A%2F%2Fwww.magazineluiza.com.br%2Fproduto%2Fgarantia-plus%2F%3Fproduct%3D233853600%26marketplaceSellerId%3Dmagazineluiza%26productDiscountPrice%3D929.00%26productCashPrice%3D929.00%26productQuantity%3D7\u0026ssi\u003daf4a5f5a-bi37-4b4b-8818-90bf4c028155\u0026ssk\u003dsupport@shieldsquare.com\u0026ssm\u003d98187632336560565194436658313828\u0026ssn\u003d596afe7a60e5b85462f2a0d76a3999bf5368d9479957-c8fd-4b61-be26a1\u0026sso\u003de96418fe-75a6af80f0cfc3783439a2c13224a56b6d68e8333c0ce5d5\u0026ssp\u003d39181546931642596240164254743166887\u0026ssq\u003d29053563302885140545933011394478702786235\u0026ssr\u003dMjAxLjEzOS4xODcuMjA2\u0026sst\u003dMozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/97.0.4692.71%20Safari/537.36\u0026ssv\u003d\u0026ssw\u003d");
formatter.after({
  "duration": 1027229600,
  "status": "passed"
});
});