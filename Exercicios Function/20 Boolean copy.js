function permissão(idade){
    if (idade >= 18){
        return ("Liberado");
    }else{
        return ("Barrado, muito novo");
    }
}

console.log(permissão(20));
console.log(permissão(10));
console.log(permissão(50));
