// variavel é um container para armazenamento de dados. 
// uma variavel comporta como se fosse o valor que ela contém.

// Dois passos:
// 1. Declaração (var, let, const)
// 2. Atribuição (= operador assignment)

let PrimeiroNome = "Eduardo"; //strings (Serie de caracteries)
let idade = 21; // number (Numeros)
let estudante = false; // boolean (True ou False)

idade = idade+1;

console.log("Olá", PrimeiroNome);
console.log("Você tem", idade);
console.log("Graduando:", estudante);

document.getElementById("p1").innerHTML = "Olá " + PrimeiroNome;
document.getElementById("p2").innerHTML = "Você tem " + idade + " anos";
document.getElementById("p3").innerHTML = "Graduando ... " + estudante;
