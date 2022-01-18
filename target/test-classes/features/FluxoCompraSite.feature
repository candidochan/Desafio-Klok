#language: pt


Funcionalidade: Realizar Compra no site da Magazine Luiza

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

