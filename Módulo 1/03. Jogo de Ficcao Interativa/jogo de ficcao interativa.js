const prompt = require('prompt-sync')();
console.log('Jogo de Ficção Interativa');
console.log(
    "\nEste jogo é inspirado nas técnicas de ANÁLISE DE DECISÃO E JOGOS. O personagem é um candidato à analista de marketing num processo seletivo. O jogo o conduz a um processo decisório em que ele precisa determinar o melhor investimento em marketing de uma empresa A, quando confrontado com o desempenho de vendas de uma outra empresa B. As empresas vendem medicamentos para gripe e anunciam em rádio, televisão e internet. Dependendo da efetividade de cada mídia a empresa A poderá capturar parte do mercado da empresa B ou perder parte do mercado para B. Os percentuais de ganho de A serão indicados por valores positivos, indicando captura do mercado DE B; já, os percentuais de perda de A serão indicados por valores negativos, indicando perda de mercado PARA B.\n\nOs dados serão apresentados numa tabela denominada MATRIZ DE PAYOFF. Para escolher a melhor estratégia de marketing (rádio, televisão ou internet), o personagem deverá se orientar pelo cálculo de probabilidades, estimando os VALORES ESPERADOS dos ganhos e perdas percentuais de mercado de A para cada estratégia de marketing escolhida. Neste cálculo, deve-se considerar que a probabilidade de B escolher a mídia 'televisão' é duas vezes maior do que escolher 'rádio' ou 'internet'. O jogo transcorrerá em quatro turnos (de 15 minutos cada), sendo que o personagem deverá tomar uma decisão em cada um deles. Caso uma das decisões solicitadas ao personagem não corresponda a melhor estratégia, segundo o cálculo computacional, será cedido a ele mais um quarto de hora para a tomada de decisão, frente a uma nova situação (nova matriz de payoff).\n\nAo final, será gerada uma estatística de desempenho sobre a qual será determinada uma pontuação geral, de acordo com a seguinte regra: para cada decisão correta serão computados +25 pontos e, para cada decisão incorreta, serão computados -10 pontos. Por estes critérios, a duração do jogo deverá variar de 1 a 2 horas (quanto menor, melhor para o candidato); a pontuação geral ficará entre -80 e +100 pontos. O candidato será classificado se obtiver pontuação igual ou superior a 50 pontos e desclassificado se obtiver pontuação inferior a 50 pontos.\n",
);

console.log('Pronto para começar??');

//VARIÁVEIS CONTADORAS
var acertos = '';
var erros = '';

for (let i = 1; i < 5; i++) {
    require('ordinal-pt-br');
    let posicaoTurno = i;
    console.log(
        prompt(
            `Tecle "Enter" para iniciar o ${posicaoTurno.toOrdinal({
                genero: 'o',
            })} turno`,
            '',
        ),
    );

    for (let j = 1; j < 3; j++) {
        require('ordinal-pt-br');
        let posicaoQuartoDeHora = j;
        console.log(
            `(${posicaoQuartoDeHora.toOrdinal({
                genero: 'o',
            })} quarto de hora do ${posicaoTurno.toOrdinal({
                genero: 'o',
            })} turno)`,
        );

        //VARIÁVEIS ALEATÓRIAS
        let X11 = Math.floor(Math.random() * 20) - 10;
        let X12 = Math.floor(Math.random() * 20) - 10;
        let X13 = Math.floor(Math.random() * 20) - 10;
        let X21 = Math.floor(Math.random() * 20) - 10;
        let X22 = Math.floor(Math.random() * 20) - 10;
        let X23 = Math.floor(Math.random() * 20) - 10;
        let X31 = Math.floor(Math.random() * 20) - 10;
        let X32 = Math.floor(Math.random() * 20) - 10;
        let X33 = Math.floor(Math.random() * 20) - 10;

        //CÁLCULO COMPUTACIONAL
        let e1 = (1 / 4) * X11 + (1 / 2) * X12 + (1 / 4) * X13;
        let e2 = (1 / 4) * X21 + (1 / 2) * X22 + (1 / 4) * X23;
        let e3 = (1 / 4) * X31 + (1 / 2) * X32 + (1 / 4) * X33;

        //MAIOR VALOR ESPERADO
        function eMaior() {
            return Math.max(e1, e2, e3);
        }

        //MATRIZ DE PAYOFF
        function Values(B1_Radio, B2_Telev, B3_InNet) {
            this.B1_Radio = B1_Radio;
            this.B2_Telev = B2_Telev;
            this.B3_InNet = B3_InNet;
        }

        var estrategia = {};
        estrategia.A1_Radio = new Values(X11, X12, X13);
        estrategia.A2_Telev = new Values(X21, X22, X23);
        estrategia.A3_InNet = new Values(X31, X32, X33);
        console.table(estrategia);
        console.log();
        console.log(
            'Recomende a melhor estratégia de investimento para a empresa A digitando:\n"A1" se você acha que ela deve investir em RÁDIO\n"A2" se você acha que a empresa A deve investir em TELEVISÃO\n"A3" se você acha que A deve investir em INTERNET\n',
        );

        //OCULTO (P/ TESTE)
        //console.log(e1);
        //console.log(e2);
        //console.log(e3);

        let choice = prompt('');
        while (choice != 'A1' && choice != 'A2' && choice != 'A3') {
            choice = prompt(
                'Você deve escolher "A1" para RÁDIO, "A2" para TELEVISÃO ou "A3" para INTERNET:',
                '',
            );
        }
        let theChoice = '';

        if (choice == 'A1') {
            theChoice = 'INVESTIMENTO EM RÁDIO';
        }
        if (choice == 'A2') {
            theChoice = 'INVESTIMENTO EM TELEVISÃO';
        }
        if (choice == 'A3') {
            theChoice = 'INVESTIMENTO EM INTERNET';
        }

        console.log();
        console.log(
            prompt(
                `Você recomendou à empresa 'A' o ${theChoice}.\nTecle "Enter" para confrontar a sua escolha com o cálculo computacional.`,
                '',
            ),
        );

        //CONFRONTO USUARIO X COMPUTADOR
        let arr = [eMaior(), choice];
        if (
            (arr[0] == e1 && arr[1] == 'A1') ||
            (arr[0] == e2 && arr[1] == 'A2') ||
            (arr[0] == e3 && arr[1] == 'A3')
        ) {
            console.log(
                `Resultado: Parabéns, o ${theChoice} foi a melhor decisão.\n`,
            );
            acertos++;
            break;
        } else {
            console.log(
                `Resultado: o ${theChoice} não foi a melhor decisão.\n`,
            );
            erros++;
            if (j == 1) {
                console.log(
                    'Você terá a possibilidade de tomar nova decisão para uma nova situação em um novo turno de trabalho.',
                );
                console.log(prompt('Tecle "Enter" para fazer nova tentativa'));
            }
        }
    }
    if (acertos < 1) {
        acertos = 0;
    }
    if (erros < 1) {
        erros = 0;
    }
    console.log('Status atual');
    console.log(`Decisões corretas: ${acertos}`);
    console.log(`Decisões incorretas: ${erros}`);
    console.log();
}
console.log(
    prompt(
        'Você cumpriu os 4 turnos! Tecle "Enter" para ver as suas estatísticas de desempenho.',
    ),
);

//ESTATÍSTICAS
var estatistica = {
    pontuacaoJogo: function () {
        let soma = '';
        soma = acertos * 25 - erros * 10;
        return soma;
    },
    duracaoJogo: function () {
        let tempo = '';
        tempo = (acertos + erros) * 0.25;
        return tempo;
    },
};
console.log(`Decisões corretas: ${acertos}`);
console.log(`Decisões erradas: ${erros}`);
console.log(`Você obteve ${estatistica.pontuacaoJogo()} pontos.`);
console.log(`A sua jogada durou ${estatistica.duracaoJogo()} hora(s).`);
console.log();

//ENCERRAMENTO
if (estatistica.pontuacaoJogo() < 50) {
    console.log(
        'Lamentamos, mas a sua pontuação geral não lhe permite avançar para a próxima fase. Obrigado por participar!',
    );
} else {
    console.log(
        'Parabéns!!! A sua pontuação geral lhe permite avançar para a etapa seguinte.\n\nPróxima fase: ENTREVISTA.',
    );
}
