let titulo = document.querySelector('Hora do Desafio!');
    titulo.innerHTML = 'Hora do desafio!';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado');
    
}

function exibirAlerta(){
    alert('Eu amo Js');
}

function exibirPrompt(){
      let nome = prompt(' Digite um nome de uma cidade do Brasil:');
      alert(`Estive em ${nome} e lembrei de você`);


}
function somaDeDoisNumeros(){
    let primeiroNumero = parseInt(prompt('Digite um número:'));
     let segundoNumero =  parseInt(prompt('Digite um segundo número:'));
     let resultado = primeiroNumero + segundoNumero ;
     alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);


    }