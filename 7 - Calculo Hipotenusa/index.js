/*
let a = Number(window.prompt("Digite o valor de A:"));
let b = Number(window.prompt("Digite o valor de B:"));

a = Math.pow(a,2);
b = Math.pow(b,2);

let c = a + b;
c = Math.sqrt(c);

console.log(c);
*/

document.getElementById("enviar").onclick = function(){

    a = document.getElementById("ladoA").value;
    a = Number(a);

    b = document.getElementById("ladoB").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("ladoC").innerHTML = "Lado C: " + c;
    
}