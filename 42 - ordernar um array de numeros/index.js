let notas = [100, 50, 90, 60, 80, 70];
notas = notas.sort(OrdemDecrescente);

notas.forEach(print);

function OrdemDecrescente(x, y){
    return y - x;
}
function OrdemCrescente(x, y){
    return x - y;
}
function print(elemento){
    console.log(elemento);
}