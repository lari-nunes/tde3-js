let array = [2, 4, 10, 8, 20];

function novoArray(array) {
  let novoArray = [];
  for (let x = 0; x < array.length; x++) {
    novoArray.push(array[x] * 2);
  }
  console.log(novoArray);
}

novoArray(array);
