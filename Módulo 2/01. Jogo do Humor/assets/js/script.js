window.onload = function () {
  alert("Olá mundo do JavaScript para Web");
};

/*const h3 = document.getElementById("position");
console.dir(h3);

const div_selector = document.querySelector("h3");
console.log(h3);

elementoButton.addEventListener("click", ( )=> {
  console.log(Clicaram...)
}
);
*/
const span = document.querySelector("span");
const img = document.querySelector("img");
console.dir(img.attributes);

span.addEventListener("click", () => {
  console.log("EU FUI CLICADO");
});

const imgList = ["./assets/images/1jarmila.jpg", "./assets/images/2jurgen.jpg"];

function handleImg() {
  if (img.attributes.src.nodeValue == imgList[0]) {
    img.setAttribute("src", "${imgList[1]}");
    span.innerHTML = "IMAGEM1";
  } else {
    img.setAttribute("src", "${imgList[0]}");
    span.innerHTML = "IMAGEM2";
  }
}

/*
const btnTexto = document.querySelector("#btn-texto");

btnTexto.addEventListener("click", function () {
  const tagH1 = document.createElement("h1");
  const h1Text = document.createTextNode("Texto criado no JS");

  tagH1.appendChild(h1Text);

  document.body.appendChild(tagH1);
});

const titulo = document.querySelector("#titulo");

titulo.addEventListener("mouseover", function () {
  titulo.style.color = "green";
});

titulo.addEventListener("mouseout", function () {
  titulo.style.color = "black";
});
*/
