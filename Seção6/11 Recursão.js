function recursao(n){

    if(n - 1 < 2){
        console.log("recursão parou");
    } else if (n % 2 != 0){
        console.log("impar " + n);
        recursao(n - 1)
    } else{ console.log("numero par " + n);
        recursao(n - 2);
    } 
}

recursao(4);
recursao(7);
recursao(10);