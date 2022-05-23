// array.reduce() = reduz um array para um unico valor

let preços = [5, 10, 15, 20, 25, 30];
let total = preços.reduce(Checar);

console.log(`O total é: $${total}`);

function Checar(total, elemento){
    return total + elemento;
}