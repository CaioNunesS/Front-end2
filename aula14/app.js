/* %%%% Praticando os conceitos de Storage */

//@@@ sessionStorage VS localStorage

//window.sessionStorage.setItem();
sessionStorage.setItem("id01", "Aula 14");

localStorage.setItem("id01", "Aula 14");
localStorage.setItem(1, false); //salva como strings
localStorage.setItem(2, true);
localStorage.setItem(3, false);

localStorage.setItem("id01", "Aula 14 - JSON e Storage");
sessionStorage.setItem("id01", "Aula 14 - JSON e Storage");


//Capturando informações salvas
let informacao = localStorage.getItem("id01");
console.log(informacao);

// removendo uma informação do Storage
localStorage.removeItem("id01");

//remover todos os registros

localStorage.clear();



/* %%%% Práticando a utilização de JSON no JS */

//objeto literal JS
let usuario = {
    nome: "Gustavo",
    cidade: "São Paulo",
    uf: "SP"
}

//Transformando o objeto JS em objeto JSON Textual
let usuarioJSON = JSON.stringify(usuario);

//Setando no Storage
localStorage.setItem(1, usuarioJSON);

//Buscando do Storage
let usuarioRetornoStorage = localStorage.getItem(1);

//Transformando o objeto JSON em objeto JS Literal
let usuarioRetorno = JSON.parse(usuarioRetornoStorage)
console.log(usuarioRetorno.uf);