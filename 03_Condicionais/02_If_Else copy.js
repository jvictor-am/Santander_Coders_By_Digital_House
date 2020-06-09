// Define a função hojeSeJoga, que receba por parâmetro uma string que informe o
// día da semana. Esta função deve retornar"Hoje é dia de futebol! ! !" se
// parâmetro for "domingo", caso contrário deve retornar "Hoje não é dia de
// futebol :(".
// Lembre-se que as variáveis e as strings devem ser escritas igual ao enunciado,
// respeitando os espaços e as exclamações.

function hojeSeJoga(param) {
  if (param === 'domingo') {
    return 'Hoje é dia de futebol! ! !';
  } else {
    return 'Hoje não é dia de futebol :(';
  }
}

console.log(hojeSeJoga('domingo'));

console.log(hojeSeJoga('segunda'));
