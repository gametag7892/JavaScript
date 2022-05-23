//array.map() = executa uma função de callback fornecida
//              uma vez para cada elemento de uma array
//              E cria um novo array

let numeros = [1, 2, 3, 4, 5];
let quarado = numeros.map(PotenciaQuadrada);
let cubos = numeros.map(cubo);

cubos.forEach(print);

function PotenciaQuadrada(elemento){
    return Math.pow(elemento, 2);
}
function cubo(elemento){
    return Math.pow(elemento, 3);
}
function print(elemento){
    console.log(elemento);
}