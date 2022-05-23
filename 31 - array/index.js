// array = pense como uma variavel 
//         que pode armazenar multiplos valores


let frutas = ["maçã", "laranja", "banana"];

//frutas[0] = "coco";

frutas.push("limão");     // adiciona um elemento
frutas.pop();             // remove ultimo elemento
frutas.unshift("manga");  // adiciona um elemento no inicio
frutas.shift();           // remove elementos do inicio

let largura = frutas.length;
let index = frutas.indexOf("maçã");

console.log(index);