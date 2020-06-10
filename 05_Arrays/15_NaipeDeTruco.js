function naipeDeTruco(naipe) {
  var arrayNaipes = [];

  for (let numCarta = 1; numCarta <= 12; numCarta++) {
    if (numCarta === 8 || numCarta === 9) {
      // return;
    } else {
      arrayNaipes.push(numCarta + ' de ' + naipe);
    }
  }
  console.log(arrayNaipes);
  return arrayNaipes;
}

naipeDeTruco('espadas');
