function Texto(tam){
    if(tam.length > 10){
        console.log("Maior que o limite");
    }else{
        console.log("Dentro do limite");
    }
}

Texto("bora");
Texto("AFKNFLKASNGKSNALGKNSALGAG")
Texto("não vai dar") //O espaço conta
Texto("EsseVaiDar")