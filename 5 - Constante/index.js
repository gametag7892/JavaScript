// const = uma variavel que não pode ser mudada

const PI = 3.14159;
let raio;
let circunferencia;

raio = window.prompt("Digite o raio de um circulo");
raio = Number(raio);

circunferencia = 2 * PI * raio;

console.log("A circunferencia é", circunferencia);