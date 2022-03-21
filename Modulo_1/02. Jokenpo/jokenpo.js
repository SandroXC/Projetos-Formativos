const prompt = require('prompt-sync')();

console.log(
    'Jornada do Herói:\n  Maria é uma mãe solteira de 21 anos. Ela mora em Cidade Tiradentes e acorda às 04h30 para ir trabalhar no centro de São Paulo. Antes, porém, ela presisa passar na casa de sua mãe para deixar seu filho Pedro, que será levado mais tarde à escolinha. Maria pega um ônibus até a estação Corinthians - Itaquera e, de lá, pega duas linhas do metrô até chegar ao trabalho. Ela tem que ser rápida na volta, pois precisa pegar seu filho na escola à tempo desta fechar, ir para casa dar banho nele, arrumar tudo e fazer a janta. Tudo isto antes - é claro - de ajudar Pedro com as tarefas escolares.\n  Maria deve responder às questões abaixo, dizendo se foi capaz de cumprir sua dura jornada.\n',
);

let q_ = prompt('Pressione "Enter" para iniciar', ' \n');

let q1 = prompt(
    "Maria, você conseguiu cumprir suas tarefas, a fim de não atrasar a sua saída do trabalho? ('S' para SIM ou 'N' para NÃO)",
    '',
);

while (q1 != 'S' && q1 != 's' && q1 != 'N' && q1 != 'n') {
    q1 = prompt("Você deve responder 'S' (para SIM) ou 'N' (para NÃO)", '');
}

let q2 = prompt(
    "Maria, foi possível pegar o metrô na praça da Sé, assim que chegaste lá? ('S' para SIM ou 'N' para NÃO)",
    '',
);

while (q2 != 'S' && q2 != 's' && q2 != 'N' && q2 != 'n') {
    q2 = prompt("Você deve responder 'S' (para SIM) ou 'N' (para NÃO)", '');
}

let q3 = prompt(
    "Maria, você conseguiu pegar o primeiro ônibus ao desembarcar em Corinthians-Itaquera? ('S' para SIM ou 'N' para NÃO)",
    '',
);

while (q3 != 'S' && q3 != 's' && q3 != 'N' && q3 != 'n') {
    q3 = prompt("Você deve responder 'S' (para SIM) ou 'N' (para NÃO)", '');
}

let q4 = prompt(
    "Você conseguiu pegar Pedro na escola à tempo? ('S' para SIM ou 'N' para NÃO)",
    '',
);

while (q4 != 'S' && q4 != 's' && q4 != 'N' && q4 != 'n') {
    q4 = prompt("Você deve responder 'S' (para SIM) ou 'N' (para NÃO)", '');
}

let q5 = prompt(
    "Maria, você conseguiu fazer a janta e ajudar Pedro com as tarefas, antes de ir dormir? ('S' para SIM ou 'N' para NÃO)",
    '',
);

while (q5 != 'S' && q5 != 's' && q5 != 'N' && q5 != 'n') {
    q5 = prompt("Você deve responder 'S' (para SIM) ou 'N' (para NÃO)", '');
}

var respostas = [q1, q2, q3, q4, q5];

let numDeSim = 0;
for (let i = 0; i < respostas.length; i++) {
    if (respostas[i] == 'S' || respostas[i] == 's') {
        numDeSim++;
    }
}

if (numDeSim == 0) {
    console.log(
        'Resultado:\n>> Maria, você está falhando em seu papel de mãe...',
    );
}
if (numDeSim == 1 || numDeSim == 2) {
    console.log(
        'Resultado:\n>> Você deve se esforçar mais. Pedro precisa de você!',
    );
}
if (numDeSim == 3) {
    console.log(
        'Resultado:\n>> Maria, as coisas são difíceis, mas não desista de fazer o seu melhor.',
    );
}
if (numDeSim == 4) {
    console.log(
        'Resultado:\n>> Maria, você é uma boa mãe! Mantenha a sua força!',
    );
}
if (numDeSim == 5) {
    console.log(
        'Resultado:\n>> Maria, você é a prova viva de que os milagres existem. Parabéns por ser uma vencedora!!!',
    );
}
