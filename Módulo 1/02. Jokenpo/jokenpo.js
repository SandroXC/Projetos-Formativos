const prompt = require('prompt-sync')();
console.log("Jokenpô - Pedra, papel ou tesoura\n");
while ((q = "S") || (q = "s")) {
  let rodada = +prompt("Quantas rodadas você deseja jogar? (dê uma resposta numérica):", "");

  while (isNaN(rodada)) {
    rodada = +prompt("Você deve responder com um numeral:", "");
  }
  console.log("Vamos jogar:");

  //VARIÁVEIS CONTADORAS
  let x02 = 0;
  let x10 = 0;
  let x21 = 0;
  let x20 = 0;
  let x01 = 0;
  let x12 = 0;

  //INÍCIO DA ITERAÇÃO
  for (let i = 1; i < rodada + 1; i++) {
    //ESCOLHA DO JOGADOR
    let choice = prompt(
      `Rodada ${i}: Faça a sua escolha digitando "0" para PEDRA, "1" para PAPEL ou "2" para TESOURA:`,
      ""
    );
    while (choice != "0" && choice != "1" && choice != "2") {
      choice = prompt('Você deve escolher "0" para PEDRA, "1" para PAPEL ou "2" para TESOURA:', "");
    }
    let theChoice = "";
    if (choice == "0") {
      theChoice = "PEDRA";
    }
    if (choice == "1") {
      theChoice = "PAPEL";
    }
    if (choice == "2") {
      theChoice = "TESOURA";
    }

    console.log(`Você escolheu ${theChoice}.`);

    //ESCOLHA DO COMPUTADOR
    var draw = Math.floor(Math.random() * 3);
    switch (draw) {
      case 0:
        console.log("O computador escolheu PEDRA.");
        break;
      case 1:
        console.log("O computador escolheu PAPEL.");
        break;
      case 2:
        console.log("O computador escolheu TESOURA.");
        break;
    }

    //ARRAY RODADA + PAR DE RESULTADOS
    let array = [i, choice, draw];

    //BUSCAR VENCEDOR

    if (array[1] == array[2]) {
      console.log("Resultado: EMPATE!");
    }
    if (array[1] == 0 && array[2] == 2) {
      x02++;
      console.log("Resultado: VOCÊ VENCEU!");
    }
    if (array[1] == 1 && array[2] == 0) {
      x10++;
      console.log("Resultado: VOCÊ VENCEU!");
    }
    if (array[1] == 2 && array[2] == 1) {
      x21++;
      console.log("Resultado: VOCÊ VENCEU!");
    }
    if (array[1] == 2 && array[2] == 0) {
      x20++;
      console.log("Resultado: O COMPUTADOR VENCEU!");
    }
    if (array[1] == 0 && array[2] == 1) {
      x01++;
      console.log("Resultado: O COMPUTADOR VENCEU!");
    }
    if (array[1] == 1 && array[2] == 2) {
      x12++;
      console.log("Resultado: O COMPUTADOR VENCEU!");
    }
    console.log();
  }
  //FINAL DA ITERAÇÃO

  let vitoriasUser = x02 + x10 + x21;
  let vitoriasComp = x20 + x01 + x12;

  console.log(`Você obteve ${vitoriasUser} vitória(s).`);
  console.log(`O computador obteve ${vitoriasComp} vitória(s).`);

  if (vitoriasUser > vitoriasComp) {
    console.log("Resultado final: VOCÊ É O CAMPEÃO!!!\n");
  }
  if (vitoriasUser < vitoriasComp) {
    console.log("Resultado final: O COMPUTADOR É O CAMPEÃO!!!\n");
  }
  if (vitoriasUser == vitoriasComp) {
    console.log("Resultado final: VOCÊ EMPATOU COM O COMPUTADOR.\n");
  }

  let q = prompt('Você gostaria de jogar novamente? ("S" para SIM ou "N" para NÃO)', "");
  while (q != "S" && q != "s" && q != "N" && q != "n") {
    q = prompt("Você deve responder 'S' (para SIM) ou 'N' (para NÃO)", "");
  }
  if (q == "N" || q == "n") {
    console.log("Ok, até logo!!!");
    break;
  }
}
//RETORNA