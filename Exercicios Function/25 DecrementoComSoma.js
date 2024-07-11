function valor(num){
    for (let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
valor(20);
console.log("-----");
valor(5);
console.log("-----");
valor(10);