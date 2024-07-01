let nome = "Arthur";

for(let i = 0; i <10; i = i + 1){

    if (i ==3){
        nome = "Flavio";
    }
    if(i == 7 && nome == "Flavio"){
        console.log(i + ", pode parar");
        break;
    }
    console.log(i);
}