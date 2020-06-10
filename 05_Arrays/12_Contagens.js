function quantidadeDeMesesComLucro(umPeriodo) {
  var quantidade = 0;

  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0) {
      quantidade++;
    }
  }
  console.log(quantidade);
  return quantidade;
}

quantidadeDeMesesComLucro([2, 10, -20, 0, 0, 10, 10]);
