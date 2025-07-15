let pessoa = {
    "nome": "Arthur",
    "Idade": "23",
    "Profissão": "Dev",
    "Hobbies": ["Jogar", "Treinar", "Sair"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto); //Tudo na mesma linha

let pessoaJSON = JSON.parse(pessoaTexto); 

console.log(pessoaJSON); //Separa linha a linha

console.log(pessoaJSON.Hobbies[0]); // Pega somente o titulo e o indice indicado
