const resposta = Math.floor(Math.random()*10 + 1);
let adivinhacoes = 0;

document.getElementById("Botao").onclick = function(){

    let adivinhacao = document.getElementById("Adivinhador").value; 
    adivinhacoes += 1;

    if(adivinhacao == resposta){
    alert(`${resposta} é o numero. Levou ${adivinhacoes} adivinhações para adivinhar o numero`)
    }
    else if(adivinhacao < resposta){
    alert("Muito pequeno!");
    }
    else{
    alert("Muito grande!");
    }

}