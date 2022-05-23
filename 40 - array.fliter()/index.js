//array.filter() = cria um novo array com todos os elementos
//                 isso passa o teste fornecido por uma função

let idades = [18, 16, 21, 17, 19, 90];
let adultos = idades.filter(checkIdade);

adultos.forEach(print);

function checkIdade(elemento){
    return elemento >= 18;
}
function print(elemento){
    console.log(elemento);
}