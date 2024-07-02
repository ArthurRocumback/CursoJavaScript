// Criando um expoente para deixar como padrao
function potencia(base, exp=5){
    return Math.pow(base, exp);
}
//Se deixar só o numero, o expoente vem da função
console.log(potencia(2));

//Se colocar um valor com um expoente ele não pega o da funçãi
console.log(potencia(2,2));

console.log(potencia(2,3));