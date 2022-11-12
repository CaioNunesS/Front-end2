/* 1° Bloco da aula: Atributos dinâmicos */
let textNome = document.getElementById("textNome");
console.log(textNome);

textNome.setAttribute("class", "nova-classe");
textNome.classList.add("nova-classe") //Equivalente
console.log(textNome);

let img = document.createElement("img");
img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png");
document.body.appendChild(img);


/* 2° Bloco da aula: Eventos */
/*
Principais tipos de eventos que temos:
- Eventos de tela/pagina
- Eventos de formulários
- Eventos de mouse
- Eventos de teclado
*/

///@@@@ Eventos de janela/pagina

window.onload = function () {
    boasvindas()
}

function boasvindas() {
    alert("Bem-vindo usuário")
}


///@@@@ Eventos de formulários
function exibeIdadeUsuario() {
    let textIdade = document.getElementById("textIdade");
    console.log(textIdade.value);
}

///@@@@ Eventos do mouse (onClick)

let btn = document.getElementById("botaoEnviar");
btn.onclick = function () {
    boasvindas();
}

btn.addEventListener("click", function () {
    boasvindas();
});


///@@@@ Eventos do mouse, além do click (onClick)

btn.onmouseover = function () {
    console.log("O cursor do mouse está em cima do botão enviar");
    btn.style.width = "60%"
}

btn.onmouseout = function () {
    console.log("O cursor do mouse SAIU de cima do botão enviar");
    btn.style.width = "10%"
}

///@@@@ Eventos de teclado
onkeyup = function (evento) {
    console.log(evento);
    console.log("Uma tecla foi pressionada");
}