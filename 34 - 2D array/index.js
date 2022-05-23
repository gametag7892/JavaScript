// 2D array = Um array de arrays

let frutas = ["maçã", "laranja", "bananas"];
let vegetais = ["cenouras", "cebolas", "batatas"];
let carnes = ["ovos", "frango", "peixe"];

let listaGrosseira = [frutas, vegetais, carnes];

for(let lista of listaGrosseira){

    listaGrosseira[0][0]= "mangas";

    for(let food of lista){
        console.log(food);
    }
}