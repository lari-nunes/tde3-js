let array = [2, 5, 9, 10];

function somarArray(array) {
  soma = 0;
  for (let x = 0; x < array.length; x++) {
    soma += array[x];
  }
  console.log(soma);
}

somarArray(array);
