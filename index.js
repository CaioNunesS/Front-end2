let num = [1, 2, 3, 4, 5 , 6, 7];
let auxA = 0;

for(let i = 0; i < num.length; i++){
    let auxB =  num[i];
    let soma = auxA + auxB;

    console.log('o resultado de ' + auxA + ' + ' + auxB + ' é igual: ' + soma)
    auxA = soma;
 
};