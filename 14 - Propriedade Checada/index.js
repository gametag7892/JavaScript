document.getElementById("MeuBotao").onclick = function(){

    const MinhaCheckBox = document.getElementById("MinhaCheckBox");
    const Visa = document.getElementById("option1");
    const MasterCard = document.getElementById("option2");
    const BB = document.getElementById("option3");

   /* if(MinhaCheckBox.checked == true){
        window.alert("Você está subscrito")
    }
    else{
    window.alert("Você não está subscrito")
    }*/

    if(Visa.checked){
        alert("Você está pagando com Visa!!");
    }
    else if(MasterCard.checked){
        alert("Você está pagando com MasterCard!!");
    }
    else if(BB.checked){
        alert("Você está pagando com Banco do Brasil!!")
    }
    else{
        alert("Selecione uma forma de pagamento");
    }
}