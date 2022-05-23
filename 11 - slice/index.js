// slice() extrai uma seção de uma string
//         e retorna como uma nova string,
//         sem modificar a string original

let NomeCompleto = "Eduardo Soares Mota"
let PrimeiroNome;
let UltimoNome;

UltimoNome = NomeCompleto.slice(8);
//PrimeiroNome = NomeCompleto.slice(0, 6);

UltimoNome = NomeCompleto.slice( NomeCompleto.indexOf("S"));
PrimeiroNome = NomeCompleto.slice( NomeCompleto.indexOf("E"), NomeCompleto.lastIndexOf("S"));


console.log(PrimeiroNome);
console.log(UltimoNome);
