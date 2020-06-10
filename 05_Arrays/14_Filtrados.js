function saldoDeMesesComLucro(umPeriodo) {
  var mesesLucro = [];

  for (let mes = 0; mes < umPeriodo.length; mes++) {
    if (umPeriodo[mes] > 0) {
      mesesLucro.push(umPeriodo[mes]);
    }
  }
  console.log(mesesLucro);
  return mesesLucro;
}

saldoDeMesesComLucro([2, 10, -20, 0, 0, 10, 10]);
