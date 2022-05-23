// do while loop = faz algo,
//                 então checa a condição,
//                 repete se condição for verdadeira

let Nome;

do{
    Nome = window.prompt("Escreva seu nome: ");  
}while(Nome == "")

alert(`Olá, ${Nome}`);