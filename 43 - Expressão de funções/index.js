// expressão de funções = função sem um nome (função anonima)
//                        evita puluir o escopo global com nomes
//                             Escreva, então esqueça

let count = 0;

document.getElementById("Aumentar").onclick = function(){
    count+=1
    document.getElementById("myLabel").innerHTML = count;
};
document.getElementById("Diminuir").onclick = function(){
    count-=1
    document.getElementById("myLabel").innerHTML = count;
};
/*
function Aumentarcontador(){
    count+=1
    document.getElementById("myLabel").innerHTML = count;
}
function Diminuircontador(){
    count-=1
    document.getElementById("myLabel").innerHTML = count;
}*/