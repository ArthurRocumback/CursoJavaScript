function TipoDeDado(dado){

    if(typeof dado === 'string'){
    console.log("Este dado é uma String");
} else if(typeof dado === 'number'){
console.log("Este dado é um numeral");
} else if(typeof dado === 'boolean'){
    console.log("Este dado é um Booleano");
}
}

TipoDeDado(true);
TipoDeDado(9);
TipoDeDado("Sim")