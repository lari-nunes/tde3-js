let num1 = 5;
let num2 = 5;

function somar(num1, num2) {
  return new Promise((resolve, reject) => {
    const soma = num1 + num2;
    if (soma % 2 === 0) {
      resolve(soma);
    } else {
      reject(new Error(" soma é ímpar"));
    }
  });
}

somar(num1, num2)
  .then((resultado) => {
    console.log("A soma é par:", resultado);
  })
  .catch((error) => {
    console.error("Erro:", error.message);
  });
