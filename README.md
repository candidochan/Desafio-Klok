# Projeto Automação Desafio Klok 

- Projeto para automação de testes no site da Amazon. 
- Utilizada a linguagem de programação Java com escrita de cenários de teste utilizando a linguagem Gherkin e a abordagem BDD com framework Cucumber. 
- Utilizado o Selenium WebDriver.

### Pré-requisito para execução dos testes

1- Possuir o jdk instalado. Pode conferir a instalação acessando o prompt de comando e executando o comando "java -version".

2- Baixar o projeto e importar na ide de sua preferência. Deve configurar para utilizar a versão mais atual do jre instalado na sua máquina.

3- Verificar a versão do seu navegador Chrome. A versão utilizada no projeto foi a 97. Caso esteja usando outra versão do navegador deve substituir o driver no diretório do projeto resources/drivers.
Você pode estar baixando o driver referente a versão do navegador chrome utilizado em https://chromedriver.chromium.org/downloads.

### Executando os testes
Os testes devem ser executados a partir das classes que estão dentro do pacote runners que está no diretório do projeto src/teste/java/br.com.automacao.runners.

### Geração de relatório de execução de teste
Após a execução dos testes serão gerados dois tipos de relatório, um em html e o segundo em json. Eles ficam armazenados no diretório do projeto target > reports.

### Geração de screenshots
Após a execução de cada cenário de teste uma foto da tela é capturada e armazenada
no diretório do projeto target > screenshots.

##
https://github.com/candidochan/Desafio-Klok
