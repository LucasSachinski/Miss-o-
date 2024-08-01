const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPrincipal = document.querySelector (".caixa-perguntas");
const caixaPrincipal = document.querySelector (".caixa-alternativas");
const caixaPrincipal = document.querySelector (".caixa-resultado");
const caixaPrincipal = document.querySelector (".texto-resultado");

const perguntas = [
    {
     enunciado:"Qual das seguintes linguagens de programação é mais comumente usada para desenvolvimento de aplicativos móveis nativos?"
     alternativas:[
    "Java"
    "Python"
    "Swift"

     ]
    }
    {
    enunciado:""
    alternativas:[

    ]
    }
    {
    enunciado:""
    alternativas:[

    ]
    }
];

let atual =0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const altwenativa of perguntaAtual.alternativas){
        const botaoAlternativas = documento.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);

    }

} 

mostraPergunta();