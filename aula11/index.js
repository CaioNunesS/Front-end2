/* 1- Capturar as informações vindas do HTML e obter os valores com o JS */

let botao = document.getElementById("salvar");
botao.addEventListener("click", function (evento) {

    let inputNomeSobrenome = document.getElementById("nome").value;
    let inputIdade = document.getElementById("idade").value;
    let inputAltura = document.getElementById("altura").value;
    let inputBiografia = document.getElementById("biografia").value;


    //Validação
    if (inputNomeSobrenome) { //Se, existir dados no campo...
        evento.preventDefault();

        console.log(evento);
        console.log("\nInformações do usuário\n");
        console.log(inputNomeSobrenome);
        console.log(inputIdade);
        console.log(inputAltura);
        console.log(inputBiografia);

        let usuario = {
            nomeCompleto: inputNomeSobrenome,
            idade: inputIdade,
            altura: inputAltura,
            bio: inputBiografia
        }

        console.log(usuario);

        //Manipulando uma lista de elementos/options
        let listaItens = document.getElementById("listaItens");
        console.log(listaItens.value);

        //Manipulando o checkbox
        let checkbox = document.getElementById("checkbox");
        console.log(checkbox.checked);

        //Manipulando Radios Buttons
        let grupo = document.getElementsByName("radioGrupo");
        console.log(grupo);

        let radioSelecionado;
        for (let radio of grupo) {
            if(radio.checked) {
                radioSelecionado = radio;
            }
        }
        console.log(radioSelecionado);

        /* 2- Normalizar as informações obtidas */

        //Convertendo texto em minusculas para maiusculas
        let textoMaiusculo = inputNomeSobrenome.toUpperCase();
        console.log(textoMaiusculo);

        //Controlando espaços em branco na String
        let textoSemEspacos = textoMaiusculo.trim();
        console.log(`Texto com espaços: ${textoMaiusculo}`);
        console.log(`Texto sem espaços: ${textoSemEspacos}`);

        //Separando dados de uma string
        let nomeSeparado = textoSemEspacos.split(" ");
        console.log(nomeSeparado);
    }
});