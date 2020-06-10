function mover(arr1, arr2) {
  var ultArray1 = arr1[arr1.length - 1];

  console.log(arr1);
  console.log(arr2);

  var newarr1 = arr1.pop();

  console.log(arr1);

  var newarr2 = arr2.push(ultArray1);

  console.log(arr2);
}

mover([1, 2, 3], [4, 5]);
