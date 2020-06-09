// Defina a função somaDosPares(x) que retorna a soma total de todos os números
// que são pares, ou seja, divisíveis por 2 obtendo resto 0.
// Desta forma: 0 + 2 + 4 + 6 + 8 + 10 + ..... X

function somaDosPares(x) {
  var somaTotal = 0;

  for (let i = 0; i <= x; i += 2) {
    if (i % 2 === 0) {
      somaTotal = somaTotal + i;
    }
  }

  console.log(somaTotal);

  return somaTotal;
}

somaDosPares(10);
