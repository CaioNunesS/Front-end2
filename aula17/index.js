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
function renderizarDadosUsuario(dada) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    let imagem = `${dada.results[0].picture.large}`
    let img = document.createElement("img");
    img.classList.add('imagem')
    img.src = imagem
    card.appendChild(img)

    let nome = `${dada.results[0].name.first} ${dada.results[0].name.last}`
    let name = document.createElement("h2");
    name.innerText = nome
    card.appendChild(name)

    let email = `${dada.results[0].email}`
    let e_mail = document.createElement("p");
    e_mail.innerText = email
    card.appendChild(e_mail)
  

    card.appendChild(btn)

    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.

let btn = document.querySelector("button")

btn.addEventListener("click", function(event){
    event.preventDefault
    
    window.location.reload(btn);
})
