let darkMode = document.querySelector('body').classList.add('darkMode');
// console.log(darkMode);

// console.log(confirmacao);
let dark = document.querySelector('.darkMode');
// console.log(dark);

let confirmacao = confirm('Deseja alterar para o tema escuro?')
if(confirmacao === false){
    dark.classList.toggle('darkMode')
}






