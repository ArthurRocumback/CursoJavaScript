let carro = {
    portas: 2,
    portamalas: '200L',
    motor:'1.0'
}
let adicionais =  {
    TetoSolosar: true,
    arcodincionado: true
}

console.log(carro);
Object.assign(carro, adicionais);

console.log(carro);