// return = retorna um valor de volta para o lugar
//          de quando você invocou uma function

let area;
let largura;
let altura;

largura = window.prompt("Escreva a largura:");
altura = window.prompt("Escreva a altura");

function getArea(largura, altura){
    return largura * altura;
}

area = getArea(largura, altura);

console.log(`a area é: ${area}`);

