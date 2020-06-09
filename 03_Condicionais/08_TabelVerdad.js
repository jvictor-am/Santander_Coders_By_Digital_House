// Use a função console.log para mostrar os resultados da execução da função
// filosofoHipster com parâmetros diferentes, pelo menos 3 vezes. A função
// filosofoHipster já está definida, mesmo que você não a veja, basta chamá-la
// como no exemplo acima.

function filosofoHipster(profissao, nacionalidade, numkm) {
  return profissao === 'Músico' && nacionalidade === 'Brasil' && numkm > 2;
}

console.log('Filosofo Hipster (?): ' + filosofoHipster('Músico', 'Brasil', 5));

console.log(
  'Filosofo Hipster (?): ' + filosofoHipster('Músico', 'Alemanha', 3)
);

console.log('Filosofo Hipster (?): ' + filosofoHipster('Docente', 'Brasil', 3));
