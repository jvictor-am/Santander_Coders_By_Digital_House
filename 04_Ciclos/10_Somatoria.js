// Defina a função chamada somatoria, que receba como parâmetro um número e
// retorne a soma dos números antecessores a ele.

function somatoria(num) {
  var somaAnt = 0;

  for (let i = 0; i < num; i++) {
    somaAnt = somaAnt + i;
  }

  console.log(somaAnt);

  return somaAnt;
}

somatoria(4);
