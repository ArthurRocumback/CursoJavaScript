function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = lembrarSoma(2);
console.log(soma1(5));

let soma2 = lembrarSoma(20);
console.log(soma2(10));

function contador (i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();

let meuContador2 = contador (90);

meuContador2();
meuContador2();
meuContador2();