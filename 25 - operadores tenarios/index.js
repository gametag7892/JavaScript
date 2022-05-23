// operador tenario = shortcut para uma "declaração if/else"
//                    tem 3 operandos

//                    1- uma condição com ?
//                    2- expressão se Verdadeiro :
//                    3- expressão se Falso

// condição ? exprSeVerdadeiro : exprSeFalso

VerificarGanhador(true);

function VerificarGanhador(ganhou){
    ganhou ? console.log("Você ganhou") : console.log("Você perdeu");
}