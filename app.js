// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativasChute = 1

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function geraNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return geraNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function exibirMensagemTexto() {
  exibirTextoNaTela('h1', 'Jogo do número secreto')
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}

exibirMensagemTexto();




function verificarChute() {
  let chuteInput = document.querySelector('input').value;

  let tentativas = tentativasChute > 1 ? 'tentativas' : 'tentativa';


  if (chuteInput == numeroSecreto) {
    exibirTextoNaTela('h1', `acertou o numero secreto ${numeroSecreto}`);
    exibirTextoNaTela('p', `Voce acertou em ${tentativasChute} ${tentativas}`);
    document.getElementById('reiniciar').removeAttribute('disabled');


  } else {
    if (chuteInput > numeroSecreto) {
      exibirTextoNaTela('p', 'O numero secredo é menor!');
    } else {
      exibirTextoNaTela('p', 'O numero secreto é maior!');
    }
    tentativasChute++;
    limparCampo();
  }
}



function novoJogo() {
  numeroSecreto = geraNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemTexto();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
