// arrow function = alternativa compacta para uma função tradicional
//      =>


/*
const porcentagem = (x, y) => {
    return x/y * 100;
}

console.log(`${porcentagem(45, 50)}%`)*/

let notas = [100, 50, 90, 60, 80, 70];

notas.sort(
    (x, y) => {
    return y - x;
});
notas.forEach(
    (elemento) =>{
    console.log(elemento);
});

(x, y) => {
    return y - x;
}
(elemento) =>{
    console.log(elemento);
}