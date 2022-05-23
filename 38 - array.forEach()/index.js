//array.forEach() = executa uma função callback 
//                  fornecida uma vez para cada elemento de array

let estudantes = ["bob esponja", "patrick", "lula molusco"];
estudantes.forEach(capitalizar);
estudantes.forEach(print);

function capitalizar(elemento, index, array){
    array[index] = elemento[0].toUpperCase() + elemento.substring(1);
}

function print(elemento){
    console.log(elemento);
}

