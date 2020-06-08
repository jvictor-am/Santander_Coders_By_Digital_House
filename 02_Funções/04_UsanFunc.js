// Agora pedimos que você declare uma função chamada triploDaSoma() que recebe
// dois parâmetros. Então você tem que adicionar ambos e retornar três vezes o
// valor do resultado da soma dos dois parâmetros . Para fazer isso, você já
// conta (mesmo que não veja declarado) com a função triplo, que recebe um
// parâmetro e retorna o valor dele multiplicado por três.

function triploDaSoma(param1, param2) {
  triplo = (number) => {
    return number * 3;
  };

  var soma = param1 + param2;
  return triplo(soma);
}

console.log('triploDaSoma(10, 5): ' + triploDaSoma(10, 5));
