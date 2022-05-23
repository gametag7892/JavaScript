// operador spread = permite uma interavel tal como um 
// ...               array ou string ser expandido 
//                   em lugares onde zero ou mais 
//                   argumentos é esperado
//                   (desempacota os elementos)

/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximo = Math.max(...numeros);
console.log(maximo);
*/

let classe1 = ["Bob esponja", "patrick", "sandy"];
let classe2 = ["Lula molusco", "Seu sirigueijo", "plankton"];

classe1.push(...classe2);

console.log(...classe1);