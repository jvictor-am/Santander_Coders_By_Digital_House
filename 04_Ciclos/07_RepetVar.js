// Sabendo disso, escreva uma função somar5MoedasDe25Centavos, que adiciona o
// valor de 5 moedas de 0,25 centavos e retorna o resultado.

var resultado = 0;

function somar5MoedasDe25Centavos() {
  for (let i = 0; i < 5; i++) {
    resultado = resultado + 0.25;
  }
  return resultado;
}

somar5MoedasDe25Centavos();

console.log(resultado);
