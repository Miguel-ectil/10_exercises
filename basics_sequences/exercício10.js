// ==== Calcular area quadrada ====
let larguraNum = 40
let alturaNum = 20
let area = larguraNum * alturaNum;

let litrosDeTinta = area / 2;

console.log(`A área da parede é: ${area} m².`);
console.log(`Você precisará de ${litrosDeTinta} litros de tinta para pintar a parede.`);


// Outra forma mais complexa de fazer
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite a largura da parede em metros: ', (largura) => {
//   rl.question('Digite a altura da parede em metros: ', (altura) => {
//     let larguraNum = parseFloat(largura);
//     let alturaNum = parseFloat(altura);

//     let area = larguraNum * alturaNum;

//     let litrosDeTinta = area / 2;

//     console.log(`A área da parede é: ${area} m².`);
//     console.log(`Você precisará de ${litrosDeTinta} litros de tinta para pintar a parede.`);

//     rl.close();
//   });
// });
