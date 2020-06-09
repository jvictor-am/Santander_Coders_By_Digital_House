// Portanto, vamos definir a função sinal que recebe um número para alcançar o
// objetivo desejado. DICA: Lembre-se que você pode precisar usar mais de um if.

function sinal(num) {
  if (num > 0) {
    return 1;
  } else if (num === 0) {
    return 0;
  } else {
    return -1;
  }
}

console.log(sinal(10));
console.log(sinal(0));
console.log(sinal(-10));
