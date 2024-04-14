// Desenvolva um jogo que permita que o usuário tente adivinhar um número inteiro aleatório entre 1 e 100. Utilize um loop do/while, o programa deve fornecer dicas como "maior" ou "menor" após cada tentativa, ao acertar deve informar o número adivinhado e número de tentativas realizadas para descobrir.
// dica: pesquise como gerar um numero aleatório usando o MathDesenvolva um jogo que permita que o usuário tente adivinhar um número inteiro aleatório entre 1 e 100. Utilize um loop do/while, o programa deve fornecer dicas como "maior" ou "menor" após cada tentativa, ao acertar deve informar o número adivinhado e número de tentativas realizadas para descobrir.
// dica: pesquise como gerar um numero aleatório usando o Math

const prompt = require("prompt-sync")();
let pegarDados = "",
  pegarNumero = "";

let numeroSecreto = Math.floor(Math.random() * 100 - 1) + 1;
console.log(numeroSecreto);
contarJogada = 0;

do {
  pegarDados = prompt("Digite um numero: ");
  pegarNumero = parseInt(pegarDados);
  if (numeroSecreto !== pegarNumero) {
    console.log("Errado");
  }
  if (pegarNumero >= numeroSecreto || pegarNumero !== numeroSecreto)
    if (pegarNumero >= numeroSecreto && pegarNumero !== numeroSecreto) {
      console.log(
        "O numero digitado é maior que o numero secreto " + pegarNumero
      );
    } else {
      if (pegarNumero >= numeroSecreto || pegarNumero !== numeroSecreto)
        if (pegarNumero <= numeroSecreto && pegarNumero !== numeroSecreto) {
          console.log(
            "O numero digitado é menor que o numero secreto " + pegarNumero
          );
        }
    }
  contarJogada++;
} while (numeroSecreto !== pegarNumero);
console.log("Parabéns!! Você acertou o numéro secreto: " + numeroSecreto);
contarJogada;
let resultado = contarJogada === 1 ? "tentativa" : "tentativas";

switch (contarJogada) {
  case 1:
    console.log(`A certou com: ${contarJogada} ${resultado}`);
    break;
  case 2:
    console.log(`A certou com: ${contarJogada} ${resultado}`);
    break;
  case 3:
    console.log(`A certou com: ${contarJogada} ${resultado}`);
    break;
  case 4:
    console.log(`A certou com: ${contarJogada} ${resultado}`);
    break;
  case 5:
    console.log(`A certou com: ${contarJogada} ${resultado}`);
  default:
    console.log("Acertou com muitas " + resultado + contarJogada + " no total");
}
