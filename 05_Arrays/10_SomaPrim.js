function somaLucroSemestre(umSemestre) {
  return (
    umSemestre[0] +
    umSemestre[1] +
    umSemestre[2] +
    umSemestre[3] +
    umSemestre[4] +
    umSemestre[5]
  );
}

console.log(somaLucroSemestre([50, -12, 1000, 300, 200, 0]));
console.log(somaLucroSemestre([50, -12, 1000, 300]));
console.log(somaLucroSemestre([50, -12, 1000]));
