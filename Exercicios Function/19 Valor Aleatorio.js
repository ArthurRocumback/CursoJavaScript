function aleatorio(num){
    num = Math.floor(Math.random() * num) + 1;
    return num;
}

console.log(aleatorio(20));
console.log(aleatorio(500));
console.log(aleatorio(9999));