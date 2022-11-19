/* 1- Capturar as informações vindas do HTML e obter os valores com o JS */


let inputNomeSobrenome = document.getElementById("nome");

let btn = document.getElementById("salvar");
btn.addEventListener('click', function (evento) {

    let inputIdade = document.getElementById("idade");
    let inputAltura = document.getElementById("altura");
    //let inputBio = document.getElementById("biografia");

    if (inputNomeSobrenome) {
        console.log(evento.preventDefault());
        console.log("clicou no botão");

        console.log(`Nome e sobrenome: ${inputNomeSobrenome}`);
        console.log(`Idade ${inputIdade.value}`);
        console.log(`Altura ${inputAltura.value}`);
        //console.log(`Bio ${inputBio.value}`);

        //Capturando a lista de itens

        let listaItens = document.getElementById("listaItens");
        console.log(listaItens.value);

        //Manipulando o checkbox
        let checkbox = document.getElementById("checkbox");
        console.log(checkbox.checked);

        //Manipulando o RadioButton

        let radioGrupo = document.getElementsByName("radioGrupo");
        console.log(radioGrupo);

        let elementoSelecionado;

        for (let radio of radioGrupo) {
            if (radio.checked) {
                elementoSelecionado = radio;
            }

        }
        console.log(elementoSelecionado.value);

        //NORMALIZANDO as informações do formulário

        //Transformando para letras maiusculas
        let textoMaiusculo = inputNomeSobrenome.toUpperCase();
        console.log(textoMaiusculo);

        //Retirando espaços em branco do inicio e do final da string
        let textoSemEspacos = textoMaiusculo.trim();
        console.log("Texto com espaços:" + textoMaiusculo);
        console.log("Texto sem espaços:" + textoSemEspacos);
    }

});

/* AULA 13: TRABALHANDO COM VALIDAÇÕES EM TEMPO REAL */

/* Realizar algumas validações nos campos do formulário*/

btn.style.backgroundColor = "#787676"

/* Nome: Mínimo de 4 caracteres */

inputNomeSobrenome.addEventListener("focus", function () {
    console.log("Clicou no campo");
    inputNomeSobrenome.style.backgroundColor = "#CDC6C68D"
});

inputNomeSobrenome.addEventListener("keyup", function () {

    let nomeValidacao = document.getElementById("nomeValidacao");
    inputNomeSobrenome.style.backgroundColor = "#FFFFFF"

    if (inputNomeSobrenome.value.length >= 4) {
        //Sucesso na validação
        inputNomeSobrenome.style.border = ""
        nomeValidacao.innerText = ""
        inputNomeSobrenome.style.border = "solid 1.5px #13A02D";
        //Habilitando o botão de salvar
        btn.removeAttribute("disabled");
        btn.style.backgroundColor = "#0b5ed7"

    } else {
        //Falha na validação
        inputNomeSobrenome.style.border = "solid 1.5px #D8341B";
        nomeValidacao.innerText = "Informe no mínimo 4 caracteres";
        nomeValidacao.style.color = "#D8341B";
        nomeValidacao.style.fontWeight = "bold";
        btn.setAttribute("disabled", true);
        btn.style.backgroundColor = "#787676"
    }
});

/* Email: Deve possuir um formato válido (RegExp) */

email.addEventListener("focus", function () {
    console.log("Clicou no campo");
    email.style.backgroundColor = "#CDC6C68D"
});

email.addEventListener("keyup", function () {

    let emailValidacao = document.getElementById("emailValidacao");
    email.style.backgroundColor = "#FFFFFF"

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        //Sucesso na validação
        email.style.border = ""
        emailValidacao.innerText = ""
        email.style.border = "solid 1.5px #13A02D";
        //Habilitando o botão de salvar
        btn.removeAttribute("disabled");
        btn.style.backgroundColor = "#0b5ed7"

    } else {
        //Falha na validação
        email.style.border = "solid 1.5px #D8341B";
        nomeValidacao.innerText = "Informe no mínimo 4 caracteres";
        emailValidacao.style.color = "#D8341B";
        emailValidacao.style.fontWeight = "bold";
        btn.setAttribute("disabled", true);
        btn.style.backgroundColor = "#787676"
    }
});