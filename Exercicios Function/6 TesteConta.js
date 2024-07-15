function sumEvenNumbers(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          soma += arr[i];
      }
  }
  return soma;
}
const numeros = [1, 2, 3, 4, 5, 6, -2, -4];
const resultado = sumEvenNumbers(numeros);
console.log(`Soma dos números pares: ${resultado}`);