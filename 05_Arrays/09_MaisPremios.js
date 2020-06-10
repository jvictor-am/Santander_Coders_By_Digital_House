function medalhaDeAcordoComPosto(numero) {
  var medalhas = ['ouro', 'prata', 'bronze'];

  if (numero <= 3) {
    console.log(medalhas[numero - 1]);
    return medalhas[numero - 1];
  } else {
    console.log('nada');
    return 'nada';
  }
}

medalhaDeAcordoComPosto(0);
medalhaDeAcordoComPosto(1);
medalhaDeAcordoComPosto(2);
medalhaDeAcordoComPosto(3);
medalhaDeAcordoComPosto(4);
medalhaDeAcordoComPosto(45);
