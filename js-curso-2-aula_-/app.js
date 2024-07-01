let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAletorio();
let contarChutes = 0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

mensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    contarChutes++;
    console.log(numeroSecreto);

    if (chute < numeroSecreto){
        exibirTextoNaTela('h1', 'Errou!');
        exibirTextoNaTela('p','O número secreto é maior.');
    } else if (chute > numeroSecreto ){
        exibirTextoNaTela('h1', 'Errou!');
        exibirTextoNaTela('p','O número secreto é menor.');
    } else {
        let palavraChute = contarChutes == 1 ? 'chute' : 'chutes';
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p',`Parabéns, você acertou o número secreto. 
            Você realizou um total de ${contarChutes} ${palavraChute}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    limparCampo();
}

function gerarNumeroAletorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAletorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAletorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}