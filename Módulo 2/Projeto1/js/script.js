const elementoTipo = document.querySelector("#tipo");
const elementoContexto = document.querySelector("#contexto");
const elementoImagem = document.querySelector("#imagem");
let elementoButton = document.querySelector("#proximo");
elementoButton.addEventListener("click", () => {
  if (elementoButton.value == "Record1") {
    elementoImagem.src = "./assets/img/2jurgen.jpg";
    elementoTipo.innerText = "2. Jürgen Schult – Lançamento de Disco – 36 Anos";
    elementoContexto.innerText =
      "O alemão é detentor do recorde mundial no arremesso de disco desde 1986. Ele representou a o país nas Olimpíadas de 1988. Na época ganhou a medalha de ouro, com a marca de 74,08 m.";
    elementoButton.value = "Record2";
  } else if (elementoButton.value == "Record2") {
    elementoImagem.src = "./assets/img/3yuriy.jpg";
    elementoTipo.innerText = "3. Yuriy Sedykh – Martelo – 36 Anos";
    elementoContexto.innerText =
      "Sedykh estabeleceu o atual recorde mundial de arremessos de martelos de 86,74 metros no campeonato europeu de 1986 em Stuttgart. Somente Sedykh e Sergey Litvinov jogaram mais de 86 metros na história do esporte, mas o arremesso de 86,73 m de Ivan Tsikhan em 2005 foi anulado pela IAAF em abril de 2014 após sanção por doping). Seu recorde mundial é o mais antigo da história do atletismo masculino.";
    elementoButton.value = "Record3";
  } else if (elementoButton.value == "Record3") {
    elementoImagem.src = "./assets/img/4kostadinova.jpg";
    elementoTipo.innerText =
      "4. Stefka Kostadinova – Salto em Altura – 35 Anos";
    elementoContexto.innerText =
      "A atleta búlgara estabeleceu o recorde mundial da modalidade em 1987, no Mundial de Atletismo em Roma com a marca de 2,09 metros. O feito que ainda se mantém e é um dos mais antigos do atletismo.";
    elementoButton.value = "Record4";
  } else {
    elementoImagem.src = "./assets/img/5galina.jpg";
    elementoTipo.innerText =
      "5. Galina Chistyakova – Salto em Distância – 34 Anos";
    elementoContexto.innerText =
      "Atleta que representou a antiga União Soviética em competições internacionais é a atual recordista mundial de salto em distância, saltando 7,52 metros em 11 de junho de 1988, em São Petersburgo, na Rússia.";
    elementoButton.value = "";
  }
});
