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
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++
    mostraPergunta();
}

mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}