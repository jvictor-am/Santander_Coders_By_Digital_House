function contem(array, num) {
  var ctm = array.indexOf(num);

  if (ctm === -1) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
}

contem([1, 2, 3], 6);
