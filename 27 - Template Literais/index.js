// template literais = delimitado com (`)
//                     em vez de aspas duplas ou aspa
//                     permite variaveis e expressões embutidas

let Nome = "Eduardo";
let items = 3;
let total = 75;

//console.log("Olá", Nome);
//console.log("Você tem", items, "items no seu carrinho");
//console.log("Seu total é $", total);

//console.log(`Olá, ${Nome}`);
//console.log(`Você tem ${items} items no seu carrinho`);
//console.log(`Seu total é ${total}$`);

let texto = `Olá, ${Nome}<br> Você tem ${items} items no seu carrinho<br> Seu total é ${total}$<br>`;

console.log(texto);

document.getElementById("meuLabel").innerHTML = texto;