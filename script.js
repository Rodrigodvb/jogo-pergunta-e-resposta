const perguntas = [
    {
        pergunta: "Qual é o próximo número da sequência: 3, 6, 12, 24, ?",
        respostas: ["36", "48", "30", "60"],
        correta: 1
    },
    {
        pergunta: "Se todos os gatos são mamíferos e alguns mamíferos são pretos, podemos afirmar que:",
        respostas: [
            "Todos os gatos são pretos",
            "Alguns gatos podem ser pretos",
            "Nenhum gato é preto",
            "Todos os mamíferos são gatos"
        ],
        correta: 1
    },
    {
        pergunta: "Uma máquina produz 5 peças em 5 minutos. Quantas peças 3 máquinas produzem em 5 minutos?",
        respostas: ["5", "10", "15", "20"],
        correta: 2
    },
    {
        pergunta: "Qual número completa a sequência: 1, 4, 9, 16, ?",
        respostas: ["20", "24", "25", "36"],
        correta: 2
    },
    {
        pergunta: "Se ANA = 1+14+1 (posição das letras no alfabeto), qual é o valor de SOL?",
        respostas: ["46", "52", "47", "45"],
        correta: 2
    },
    {
        pergunta: "Em uma sala há 4 cantos. Em cada canto há um gato. Cada gato vê 3 gatos. Quantos gatos há na sala?",
        respostas: ["12", "16", "4", "8"],
        correta: 2
    },
    {
        pergunta: "Qual é o próximo número da sequência: 2, 3, 5, 8, 12, ?",
        respostas: ["15", "16", "17", "18"],
        correta: 2
    },
    {
        pergunta: "Se 5 operários fazem uma obra em 12 dias, em quantos dias 10 operários fariam a mesma obra (mesma produtividade)?",
        respostas: ["6", "5", "10", "8"],
        correta: 0
    },
    {
        pergunta: "Qual alternativa apresenta a negação correta da frase: 'Todos os alunos estudaram'?",
        respostas: [
            "Nenhum aluno estudou",
            "Alguns alunos não estudaram",
            "Alguns alunos estudaram",
            "Todos os alunos não estudaram"
        ],
        correta: 1
    },
    {
        pergunta: "Um relógio marca 3h15. Qual é o ângulo entre os ponteiros?",
        respostas: ["7,5°", "15°", "30°", "37,5°"],
        correta: 0
    },
];
let perguntaAtual = 0;
let acertos = 0;
let erros = 0;
let respondeu = false;

let perguntasEmbaralhadas = [];
let tempoPergunta = 0;
let tempoTotal = 0;
let intervalo;

const TEMPO_LIMITE = 30; // segundos por pergunta
function embaralharPerguntas() {
    perguntasEmbaralhadas = [...perguntas].sort(() => Math.random() - 0.5);
}
function iniciarTimer() {
    tempoPergunta = TEMPO_LIMITE;
    document.getElementById("tempoPergunta").innerText = tempoPergunta;
    intervalo = setInterval(() => {
        tempoPergunta--;
        tempoTotal++;
        document.getElementById("tempoPergunta").innerText = tempoPergunta;
        document.getElementById("tempoTotal").innerText = tempoTotal;
        if (tempoPergunta <= 0) {
            clearInterval(intervalo);
            verificarResposta(-1); // considera como erro
        }
    }, 1000);
}
function atualizarBarraProgresso() {
    const progresso = ((perguntaAtual) / perguntasEmbaralhadas.length) * 100;
    document.getElementById("barraProgresso").style.width = progresso + "%";
}
function carregarPergunta(){
    respondeu = false;
    clearInterval(intervalo);
    const perguntaElemento = document.getElementById("pergunta");
    const respostasElemento = document.getElementById("respostas");
    respostasElemento.innerHTML = "";
    const pergunta = perguntas[perguntaAtual];
    perguntaElemento.innerText = pergunta.pergunta;
    pergunta.respostas.forEach((resposta, index) => {
        const botao = document.createElement("button");
        botao.innerText = resposta;
        botao.onclick = () => verificarResposta(index);
        respostasElemento.appendChild(botao);
    });
    atualizarBarraProgresso();
    iniciarTimer();
}
function verificarResposta(index) {
    if (respondeu) return;
    respondeu = true;
    clearInterval(intervalo);

    const correta = perguntasEmbaralhadas[perguntaAtual].correta;
    const botoes = document.querySelectorAll("#respostas button");
    botoes.forEach(btn => btn.disabled = true);
    if (index === correta) {
        acertos++;
        document.getElementById("acertos").innerText = acertos;
        botoes[index].classList.add("correta");
    } else {
        erros++;
        document.getElementById("erros").innerText = erros;
        if (index >=0) {
            botoes[index].classList.add("errada");
        }
        botoes[correta].classList.add("correta");
    }
    setTimeout(() => {
        proximaPergunta();
    }, 1500);
}
function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual >= perguntasEmbaralhadas.length) {
       finalizarJogo();
       return;
    }
    carregarPergunta();
}
function finalizarJogo() {
    document.getElementById("barraProgresso").style.width = "100%";
    const pontuacao = Math.round((acertos / perguntasEmbaralhadas.length) * 100);
    alert(
            `🏁 Fim do desafio!\n\n` +
            `✅ Acertos: ${acertos}\n` +
            `❌ Erros: ${erros}\n` +
            `🎯 Pontuação: ${pontuacao}%\n` +
            `⏱ Tempo total: ${tempoTotal}s`
    );
    //Reset
    perguntaAtual = 0;
    acertos = 0;
    erros = 0;
    tempoTotal = 0;

    document.getElementById("acertos").innerText = 0;
    document.getElementById("erros").innerText = 0;
    document.getElementById("tempoTotal").innerText = 0;
    embaralharPerguntas();
    carregarPergunta();
}
embaralharPerguntas();
carregarPergunta();