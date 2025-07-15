let numeros = ['A',1,2,3,4,5,6,7,8,9];


//Pega do 1º indice até o ultimo informado -1
console.log(numeros.slice(0,3)) //somente o 3º
console.log(numeros.slice(0,4)) //3º e 4º
console.log(numeros.slice(2,6)) //3º até o 5º
console.log(numeros.slice(5,10)) //5º até o 9º

// Pega do 3ª até o ultimo, se não definir o ultimo ele vai até o final
console.log(numeros.slice(8))

// Faz de tras pra frente
console.log(numeros.slice(-2))

// resolve os 2 ultimos indices no -2
console.log(numeros.slice(3, -2))
