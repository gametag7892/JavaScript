// function = define o codigo uma vez, e usa varias vezes.
//            para performar algum codigo, chame a função nome.

ComecarPrograma();

function ComecarPrograma(){
    Nome = window.prompt("Escreva seu nome: ");
    idade = Number(window.prompt("Escreva sua idade"));
    idade += 1
    FelizAniversario(Nome, idade);
}

function FelizAniversario(Nome, idade){
    console.log("Parabens pra você");
    console.log("Parabens pra você");
    console.log("Parabens pra você");
    console.log("Parabens pra você");
    console.log(`Parabens pra você, ${Nome}!!!!`);
    console.log("Parabens pra você");
    console.log(`Você tem ${idade} anos`)
}

