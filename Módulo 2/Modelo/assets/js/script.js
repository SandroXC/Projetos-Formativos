const elementoTipo = document.querySelector('#tipo')
const elementoContexto = document.querySelector('#contexto');
const elementoImagem = document.querySelector('#imagem');
let elementoButton = document.querySelector('#proximo');

elementoButton.addEventListener('click', () =>{
    if (elementoButton.value == 'descontraido'){
        elementoImagem.src = './assets/img/irritado.png';
        elementoTipo.innerText = 'Irritado';
        elementoContexto.innerText = 'Quando fica irritado o Killua gera momentos engraçados com suas expressões, que são bem marcadas.';
        elementoButton.value = 'irritado';
    } else if (elementoButton.value == 'irritado'){
        elementoImagem.src = './assets/img/serio.png';
        elementoTipo.innerText = 'Sério';
        elementoContexto.innerText = 'Quando percebe um perigo ou entra em batalha o Killua fica completamente concentrado. Fruto de anos de treinamento em sua família.';
        elementoButton.value = 'serio';
    } else if (elementoButton.value == 'serio'){
        elementoImagem.src = './assets/img/assassino.png';
        elementoTipo.innerText = 'Assassino';
        elementoContexto.innerText = 'Quando o Killua entra no modo assassino os seus olhos perdem completamente o brilho, nesse modo ele é capaz de matar o oponente em segundos.';
        elementoButton.value = 'assassino';
    } else {
        elementoImagem.src = './assets/img/descontraido.png';
        elementoTipo.innerText = 'Descontraído';
        elementoContexto.innerText = 'Quando está com seus amigos, o Killua age como uma criança normal, brincando e se divertindo.';
        elementoButton.value = 'descontraido';
    }
})