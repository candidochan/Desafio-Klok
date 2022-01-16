#language: pt

Funcionalidade: Realizar Compra no E-commerce

  Como um comprador
  Quero ver a lista de produtos disponíveis
  Para que eu possa escolher qual devo comprar

  @ValidarBuscaPorProduto
  Cenario: Validar Busca por produto
    Dado que o usuario entra no site da loja
    E faça uma busca por um produto
    E confirma o resultado da busca
    Quando escolher um produto da busca
    E adicionar no carrinho
    Entao o produto deve estar presente no carrinho

  #@Corretor
  #Cenario: Aumentar a quantidade de produto atraves do detalhe do produto
    #Dado que um usuario acessa o site "http://automationpractice.com"
    #E pesquisa pelo produto "Dress"
    #E acessa o produto "Printed Chiffon Dress"
	#E aumenta a quantidade para 2
	#Quando adiciona o produto "Blouse" ao carrinho
    #Entao o produto "Printed Chiffon Dress" deve possuir a quantidade de 2