// parametros rest = representa um numero indefinido 
// ...               de parametros
//                   (pacotes de argumentos em um array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numeros){
    let total = 0;
    for(let numero of numeros){
        total += numero
    }
    return total
}

