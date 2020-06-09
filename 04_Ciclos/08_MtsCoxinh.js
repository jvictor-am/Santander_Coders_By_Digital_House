// Sabendo disso, escreva uma função somarMoedasDe25(quantidadeDeMoedas), que
// toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos.

function somarMoedasDe25(quantidadeDeMoedas) {
  var resultado = 0;

  for (let i = 0; i < quantidadeDeMoedas; i++) {
    resultado = resultado + 0.25;
  }

  console.log(resultado);

  return resultado;
}

somarMoedasDe25(7);
