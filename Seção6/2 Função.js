function multTresNum(a, b, c){
    return a * b * c;
}
console.log(multTresNum(5, 10, 20)); //1000

const mult = multTresNum(2, 3, 4); //24

console.log("a multiplicação é: " + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true){
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(15, false));
console.log(podeDirigir(32, 0));
console.log(podeDirigir(54, 1));