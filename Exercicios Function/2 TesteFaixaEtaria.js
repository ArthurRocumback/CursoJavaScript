function faixaEtaria(idade){
    if(idade <12){
    console.log("Criança")
    }else if(idade >=12 && idade <=24){
        console.log("Jovem")
    }else if(idade >25){
        console.log("Adulto")
    }
}
const crianca = faixaEtaria(10);

const adulto = faixaEtaria(40);
