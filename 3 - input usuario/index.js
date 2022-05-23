// como aceitar input usuario

// CAMINHO FACIL com um window prompt

let NomeUsuario = window.prompt("Qual seu nome?");
//console.log(NomeUsuario);

// CAMINHO DIFICIL HTML textbox

document.getElementById("meuBotao").onclick = function(){

    NomeUsuario = document.getElementById("meutexto").value;
    console.log(NomeUsuario);
    document.getElementById("meulabel").innerHTML = "Olá " + NomeUsuario;
}