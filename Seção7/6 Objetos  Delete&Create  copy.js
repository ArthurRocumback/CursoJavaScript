let pessoa = {
    nome: "Arthur",
    idade: 22,
Profissão: "Garoto de Programa"
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

pessoa.casado = false;
console.log(pessoa.casado);