
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var machine = 0;

var player = 0;


do {

    var random = getRandomIntInclusive(1, 3); 

    var machineChoice = 0;

    switch (random) {            

        case 1:
            machineChoice = "pedra";
            break;
        case 2:
            machineChoice = "papel";
            break;
        case 3:
            machineChoice = "tesoura";
            break;
        default:
            machineChoice = "incorreto";
            break;
    }

 let playerChoice = prompt("Escolha pedra, papel ou tesoura"); 
 alert(machineChoice);                                         


    if (machineChoice == "pedra" && playerChoice == "pedra") {
        alert('empate');
    } else if (machineChoice == "pedra" && playerChoice == "papel") {
        player += 1;
    } else if (machineChoice == "pedra" && playerChoice == "tesoura") {
        machine += 1;
    } else if (machineChoice == "papel" && playerChoice == "papel") {
        alert('empate');
    } else if (machineChoice == "papel" && playerChoice == "tesoura") {
        player += 1;
    } else if (machineChoice == "papel" && playerChoice == "pedra") {
        machine += 1;
    } else if (machineChoice == "tesoura" && playerChoice == "tesoura") {
        alert('empate');
    } else if (machineChoice == "tesoura" && playerChoice == "pedra") {
        player += 1;
    } else if (machineChoice == "tesoura" && playerChoice == "papel") {
        machine += 1;
    } else {
        exit()
    }

alert("Pontos Maquina: " + machine);            
alert("Seus pontos: " + player);             

} while (player < 2 && machine < 2);



if(player == 2){ 
    alert(" Voce Ganhou!")
}else{
    alert("A maquina ganhou!")
};