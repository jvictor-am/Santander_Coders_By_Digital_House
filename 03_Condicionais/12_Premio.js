// primeiro lugar: corresponde "ouro"
// segundo lugar: corresponde "prata"
// terceiro lugar: corresponde "bronze"
// outros lugares: corresponde "Continue participando"

// Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e
// retorna um texto de acordo com o parâmetro. Dica: nessa função você pode
// usar vários if.

function medalhaSegundoOPosto(posto) {
  if (posto === 1) {
    return 'ouro';
  } else if (posto === 2) {
    return 'prata';
  } else if (posto === 3) {
    return 'bronze';
  } else {
    return 'Continue participando';
  }
}

console.log('Primeiro lugar: corresponde -> ' + medalhaSegundoOPosto(1));
console.log('Segundo lugar: corresponde -> ' + medalhaSegundoOPosto(2));
console.log('Terceiro lugar: corresponde -> ' + medalhaSegundoOPosto(3));
console.log('Quarto lugar: corresponde -> ' + medalhaSegundoOPosto(5));
