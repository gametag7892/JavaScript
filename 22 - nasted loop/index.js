// nasted loop = um loop dentro de outro loop

let simbolos = window.prompt("Escreva um simbolo como imagem");
let quantidade = window.prompt("Escreva numeros de repetições");
let colunas = window.prompt("Escreva o numero de colunas");

for(let i = 1; i <= quantidade; i += 1){
    for(let j = 1; j <= colunas; j += 1){
        document.getElementById("meuRetangulo").innerHTML += simbolos;
    }
    document.getElementById("meuRetangulo").innerHTML += "<br>";
}