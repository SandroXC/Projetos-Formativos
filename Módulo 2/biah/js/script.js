const elementoTipo = document.querySelector("#tipo");
const elementoContexto = document.querySelector("#contexto");
const elementoImagem = document.querySelector("#imagem");
let elementoButton = document.querySelector("#proximo");

elementoButton.addEventListener("click", () => {
  if (elementoButton.value == "Record 2") {
    elementoImagem.src = "./assets/img/2jurgen.jpg";
    elementoTipo.innerText = "Jurgen";
    elementoContexto.innerText =
      "Quando fica irritado o Killua gera momentos engraçados com suas expressões, que são bem marcadas.";
    elementoButton.value = "Record 3";
  } else if (elementoButton.value == "Record 3") {
    elementoImagem.src = "./assets/img/3yuriy.jpg";
    elementoTipo.innerText = "Yuriy";
    elementoContexto.innerText =
      "Quando percebe um perigo ou entra em batalha o Killua fica completamente concentrado. Fruto de anos de treinamento em sua família.";
    elementoButton.value = "Record 3";
  } else if (elementoButton.value == "Record 3") {
    elementoImagem.src = "./assets/img/4kostadinova.jpg";
    elementoTipo.innerText = "Kostadinova";
    elementoContexto.innerText = "";
    elementoButton.value = "Record 4";
  } else {
    elementoImagem.src = "./assets/img/1jarmila.jpg";
    elementoTipo.innerText = "Jarmila";
    elementoContexto.innerText =
      "Quando está com seus amigos, o Killua age como uma criança normal, brincando e se divertindo.";
    elementoButton.value = "Record 1";
  }
});
