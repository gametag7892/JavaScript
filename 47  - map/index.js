// Map = objeto que segura key-value pares de qualquer tipo de dados

const loja = new Map([
    ["camisetas", 20],
    ["calça", 30],
    ["meia", 10],
    ["blusa", 50],
]);
/*
let carrinho = 0;
 
carrinho += loja.get("camisetas");
carrinho += loja.get("blusa");
console.log(carrinho);
*/
//loja.set("chapeu", 40);
//loja.delete("chapeu");
//console.log(loja.has("chapeu"));
console.log(loja.size);

loja.forEach((value, key) => console.log(`${key} $${value}`));