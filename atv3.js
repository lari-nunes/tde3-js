let array = [-1, 1, -2, 2, -3, 3];

function removerArray(array) {
  for (let x = 0; x < array.length; x++) {
    // aqui ele conta um determinado numero dentro de um array
    if (array[x] < 0) {
      array.splice(x, 1); // o splice remove um número de um array
    }
  }
  console.log(array);
}

removerArray(array);
