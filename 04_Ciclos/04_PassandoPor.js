// Execute uma função chamada passandoPor que imprime no console "aqui eu tenho o
// valor de x" onde x será o valor de i em cada iteração, para cada valor de 0 a 3.

function passandoPor() {
  for (let i = 0; i < 4; i++) {
    console.log('aqui eu tenho o valor de ' + i);
    // console.log(`aqui eu tenho o valor de ${i}`);
  }
}

passandoPor();
