let card = document.querySelector(".card") 

// Aqui realizamos a consulta da promise, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
        
    })
    .then(data => {
        //manipulamos a respostaz
        renderizarDadosUsuario(data)
        console.log(data);
    });
function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    let imagem = dados.results[0].picture.large
    let img = document.createElement("img");
    img.src = imagem
    card.appendChild(img)

    let nome = dados.results[0].name.first +" "+dados.results[0].name.last
    let first_p = document.createElement("p");
    first_p.innerText = nome
    card.appendChild(first_p)

    let email = dados.results[0].email
    let second_p = document.createElement("p");
    second_p.innerText = email
    card.appendChild(second_p)

    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
let btn = document.querySelector("button")

btn.addEventListener("click", function(){
    window.location.reload(btn);
})