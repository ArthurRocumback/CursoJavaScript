let idade = 20;
let cnh = true;

if(idade >= 18 && cnh == true){
    console.log("Permitido dirigir")
}else if(idade >= 18 && cnh == false){
    console.log("Maior de idade mas sem CNH")
}else{
    console.log("Não pode dirigir")

}