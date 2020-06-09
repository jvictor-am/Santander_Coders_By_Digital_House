// No parque de diversões da cidade, eles instalaram uma nova montanha-russa
// e nos pediram ajuda para que pudéssemos notificar as pessoas, se poderiam
// entrar ou não, antes de fazer a fila. Os requisitos para uma pessoa poder
// entrar no brinquedo são:

// Atingir a altura mínima de 1,5 m (ou 1,2 m, se acompanhada por um adulto)
// Não ter qualquer problema cardíaco.

//Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero),
// vemComCompania (booleano), temProblemaCardiaco (booleano), retorne true ou
// false conforme o caso. Levar em conta as condições necessárias mencionadas acima.

function podeSubir(alturaPessoa, vemComCompania, temProblemaCardiaco) {
  return (
    (alturaPessoa >= 1.5 || (alturaPessoa >= 1.2 && vemComCompania === true)) &&
    temProblemaCardiaco === false
  );
}

console.log('Posso Subir(?) : ' + podeSubir(1.2, false, false));
console.log('Posso Subir(?) : ' + podeSubir(1.2, true, false));
