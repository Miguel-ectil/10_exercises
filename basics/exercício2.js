// ==== leer nome e mostrar mensagem de boas vindas ====

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual é o seu nome? ', (answer) => {
  console.log(`Olá ${answer}, é um prazer te conhecer!`);
  rl.close();
});



// Outra forma de fazer com input
console.log("Qual é o seu nome? ")
let nome = "Miguel Ectil"
console.log(`Olá ${nome}, é um prazer te conhecer`)