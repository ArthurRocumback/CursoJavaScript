const calculadora = {
    soma: function(a,b){
        return a + b;
    },
    Sub: function(a,b){
        return a - b;
    },
    mult: function(a,b){
        return a * b;
    },
    div: function(a,b){
        return a / b;
    },
}

console.log(calculadora.soma(2,3));
console.log(calculadora.Sub(10,4));
console.log(calculadora.mult(9,5));
console.log(calculadora.div(20,4));
