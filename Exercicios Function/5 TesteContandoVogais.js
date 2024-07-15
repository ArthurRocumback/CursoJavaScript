function countVowels (s) {
  const vogais = "aeiouAEIOU";
  let contador = 0;
  for (let i = 0; i < s.length; i++) {
      if (vogais.includes(s[i])) {
          contador++;
      }
  }
  return contador;
}
const texto = "Olá, como você está?";
const resultado = countVowels (texto);
console.log(`Total de vogais: ${resultado}`);