// Sabendo isso, crie uma função chamada caloriasDeTrote(), que recebe por
// parâmetro o número de voltas representado por um valor numérico e retorne
// a quantidade de calorias que será consumida.

function caloriasDeTrote(num) {
  var somaCalorias = 0;

  for (let i = 1; i <= num; i++) {
    somaCalorias = somaCalorias + 5 * i;
  }

  console.log(somaCalorias);

  return somaCalorias;
}

caloriasDeTrote(3);
