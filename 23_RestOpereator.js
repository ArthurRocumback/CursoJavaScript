let num1 = 1;
let num2 = 5;
let num3 = 20;
let num4 = 7;
let num5 = 10;

function ImprimirNumeros(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

ImprimirNumeros(num1,num2,num3,num4,num5);
console.log(" ")
ImprimirNumeros(num1,num2,num3);
console.log(" ")
ImprimirNumeros(7,3,2,6,9,1,2,5,4)