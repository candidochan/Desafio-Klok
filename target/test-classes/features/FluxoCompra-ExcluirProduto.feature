#language: pt


Funcionalidade: Realizar Compra no site da Amazon Brasil


  @ExcluirProduto
  Cenário: Validar Busca por produto e exclusão do carrinho
    Dado que o usuario entra no site da loja
    E busque produtos para compra
    Quando escolher os produtos para compra
    E verificar produtos no carrinho e valor
    Entao deverá excluir um ou mais produtos do carrinho