// escopo de variavel = quando uma variavel é acessivel

// let = variavel é limitada para um bloco de escopo {}
// var = variavel é limitada para uma function(){}

// variaveis globais = é declarada fora de qualquer função
// (Se global, var irá MUDAR as propriedades window do Navegador)

 



function facaAlgo(){
    for(let i = 1;  i <= 3; i += 1){
    console.log(i);
}
}
facaAlgo();
