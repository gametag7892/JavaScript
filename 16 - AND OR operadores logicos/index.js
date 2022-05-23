// nos da a habilidade para checar mais de 1 condição
// && and (As duas condições deve ser verdadeiras)
// || or (Uma das condições pode ser verdadeiras)

let temp = Number(window.prompt("Digite sua temperatura: "));
let sol = true;

if(temp > 0 && temp < 30 && sol){
    alert("O tempo está bom");
}else{
alert("O tempo está ruim!");
}

