// ! NOT operador logico 
// tipicamente usado para reverter uma condição de valor boolean
// true -> false || false -> true

let temp = Number(window.prompt("Digite a sua temperatura: "));
let sol = true;

if(!(temp > 0)){
    alert("Está frio lá fora");
}
else{
    alert("Está ameno lá fora");
}

if(!sol){
    alert("Está sol lá fora")
}
else{
    alert("Está nublado lá fora");
}