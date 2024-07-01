for(let i = 10; i > 0; i = i - 1){

    if (i % 2 == 0){
        console.log("continue");
        continue; //se não tiver o continue ele imprime a mensagem e o numero
    }
    console.log(i);
}