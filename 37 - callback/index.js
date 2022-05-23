// callback = uma função passada como um argumento 
//            para outra função.

// Garante que uma função não seja
// executada após uma tarefa ser completada.
// nos ajuda desenvolver codigos asincronomos.
// (quando uma função tem que esperar por outra função)
// isso nos ajuda evitar erros e problemas potenciais
// Ex: esperar um arquivo carregar





sum(2, 3, displayDOM);

function sum(x, y, callback){
    let resultado = x + y;
    callback(resultado);
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("meuLabel").innerHTML = output
}