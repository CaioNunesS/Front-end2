/* Tipos de funções em JS */
//---------- @@ Funções declaradas ou declarativas

//Invocando a função // Chamando
boasvindas("Cleber");

function boasvindas(nome){
      //Escopo
      return console.log(`Seja bem-vindo usuário ${nome}`)
}

//---------- @@ Funções expressadas ou funções de expressão

let inicio = function(nome) {
    boasvindas(nome); 
}  

 function boasvindas(nomeRecebido) {
    console.log(`Seja bem-vindo usuário ${nomeRecebido}`);
}
inicio("Joaquim");

//---------- @@ Funções aninhadas ou Closures

function boasvindas4 (nomeRecebido) {

    function apresentaMensagem(nomeRecebido){
        console.log(`Seja bem-vindo usuário ${nomeRecebido}`);
    }
    apresentaMensagem(nomeRecebido);
}

boasvindas("Marcos");

/* login usuário 
    1: dados informações (email - senha)
    2: validações e normalizações
    3: comunico com a API 
    4: construção do objeto da requisição
    5: requisição com a API
    6: tratar o retorno da API
    7: Feedback pro usuário
    8: Realiza o login e direciona
*/

function soma(numero1, numero2){
    return console.log(numero1+numero2)
}

function subtrair(numero1, numero2){
    return console.log(numero1-numero2)
}

//---------- @@ Funções de CallBacks (Função que recebe uma função como parametro e a executa)
let executaCalculo = function(funcaoRecebida){

    let numero1 = 10;
    let numero2 = 15

    //Executando a função recebida
    funcaoRecebida(numero1, numero2);
}

executaCalculo(soma);

//Exemplos de utilização de CallBacks
let btn = document.getElementById("botaoResetar");
btn.addEventListener("click", function(evento){
    console.log(evento);
});

let lista = ["marcos", "Pedro"];
lista.forEach(item => {});


//---------- @@ Funções de Seta (=>) ou ArrowFunctions

function soma2(numero1, numero2){
    return console.log(numero1+numero2)
}

let boasVindas = nomeUsuario => {return `Seja bem-vindo usuário ${nomeUsuario}`};

let mensagem = boasVindas("Pablo")
// console.log(mensagem);