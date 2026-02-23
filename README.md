# 🧠 Quiz Game – Desafio de Raciocínio Lógico

Um jogo interativo de perguntas e respostas desenvolvido com HTML, CSS e JavaScript puro, com foco em raciocínio lógico no estilo concurso.

O projeto foi criado com objetivo educacional, praticando manipulação de DOM, controle de tempo, lógica de programação e organização de código no front-end.

## 🚀 Funcionalidades

✅ Perguntas em ordem aleatória

⏱ Cronômetro individual por pergunta

🕒 Contador de tempo total do desafio

📊 Barra de progresso dinâmica

🎯 Sistema de pontuação por acertos

❌ Contador de erros

🔄 Avanço automático após responder

🎨 Feedback visual (resposta correta/incorreta)

🔁 Reinício automático ao final do jogo

# 🖥️ Tecnologias Utilizadas

HTML5

CSS3

JavaScript (Vanilla JS)

Não utiliza frameworks ou bibliotecas externas.

📂 Estrutura do Projeto<br>
quiz-game/<br>
│<br>
├── index.html<br>
├── style.css<br>
├── script.js<br>
└── README.md<br>

## 🧩 Como Funciona
### 🔀 1. Embaralhamento das Perguntas

As perguntas são copiadas e embaralhadas usando:

perguntasEmbaralhadas = [...perguntas].sort(() => Math.random() - 0.5);

Isso garante ordem diferente a cada execução.

### ⏱ 2. Sistema de Cronômetro

Cada pergunta possui um tempo limite configurável:

const TEMPO_LIMITE = 60; // segundos por pergunta

O sistema:

Inicia automaticamente ao carregar a pergunta

Conta o tempo individual

Soma o tempo total do desafio

Marca automaticamente como erro se o tempo acabar

### 📊 3. Barra de Progresso

A barra é atualizada dinamicamente com base na pergunta atual:

(progresso = perguntaAtual / totalPerguntas) * 100
### 🎯 4. Sistema de Pontuação

A pontuação final é calculada em porcentagem:

(acertos / totalPerguntas) * 100

## Exibindo:

Total de acertos

Total de erros

Pontuação percentual

Tempo total gasto

## ⚙️ Como Executar

Clone o repositório:

git clone https://github.com/Rodrigodvb/jogo-pergunta-e-resposta

Abra o arquivo index.html no navegador.

Não é necessário servidor local ou instalação de dependências.

## 🎮 Possíveis Melhorias Futuras

🏆 Sistema de ranking com LocalStorage

🎵 Sons de acerto/erro

🌙 Modo escuro

📱 Melhorias de responsividade

🌐 Backend para armazenar pontuações

👥 Modo multiplayer

📦 Transformar em Progressive Web App (PWA)

## 🎯 Objetivo do Projeto

### Este projeto foi desenvolvido com fins de:

Praticar JavaScript puro

Aprender manipulação de DOM

Trabalhar com controle de tempo (setInterval)

Criar lógica de estado (controle de pergunta e resposta)

Simular ambiente estilo concurso

##📜 Licença

Este projeto é de uso livre para fins educacionais.

👨‍💻 Autor

Desenvolvido por Rodrigo Barbosa
