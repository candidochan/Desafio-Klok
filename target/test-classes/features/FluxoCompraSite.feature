#language: pt

@funcionais
Funcionalidade: Realizar Compra no site da Amazon Brasil

  Contexto: Entrar em um grande portal de comércio online e adicionar produto com sucesso!


  @ComprarProduto
  Cenário: Validar Busca por produto
    Dado que o usuario entra no site da loja
    E faça uma busca por um produto
    E confirma o resultado da busca
    Quando escolher um produto da busca
    E adicionar no carrinho
    Entao o produto deve estar presente no carrinho

  @AdicionarAcessorios
  Cenário: Adicionar acessórios para a compra
    Dado que o usuario entra no site da loja
    E faça uma busca por acessorios
    E confirma o resultado da busca
    Quando escolher os produtos
    E adicionar acessórios no carrinho
    Entao os produtos deverao estar presente no carrinho


