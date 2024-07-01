function soma(a, b){

    if (a === undefined || b === undefined){
        console.log("Necessario os 2 campos");
}else{
    return a + b;
} 
}
console.log(soma(1,5));
console.log(soma(1,2));
function saudar(nome, idade){
    if (idade === undefined){
        console.log("\n olá " + nome);
    }else{
        console.log("Olá " + nome + " você têm " + idade + " anos " );
    }
}
saudar("Arthur")
saudar("Cecilia", 20)