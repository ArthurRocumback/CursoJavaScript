let pessoa = {
    nome: "Arthur"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Cecilia"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "João"
console.log(pessoa.nome);

pessoa.nome = "Cecilia";

console.log(pessoa2.nome);