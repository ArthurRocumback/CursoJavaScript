let onibus = {
    rodas : 20,
    passageiros: 40,
    portas: 2
}

const {rodas: vrodas, passageiros: vpassageiros, portas: vportas} = onibus;

delete onibus.rodas;

console.log(onibus.rodas);

onibus.janelas = 20;

console.log(onibus);
// OU SELECIONADNO POR OBJETO
console.log(onibus.janelas);
