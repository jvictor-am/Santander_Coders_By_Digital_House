// Vamos testar: Iremos criar uma função chamada tamanhoNomeCompleto, que recebe
// um nome e um sobrenome como parâmetros, e que irá devolver o tamanho total,
// contando um espaço extra para separar ambos:

function tamanhoNomeCompleto(nome, sobrenome) {
  return (nome + ' ' + sobrenome).length;
}

console.log(
  'tamanhoNomeCompleto(César Mennoti): ' +
    tamanhoNomeCompleto('César', 'Mennoti')
);
