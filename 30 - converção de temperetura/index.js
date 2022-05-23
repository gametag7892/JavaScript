document.getElementById("MeuBotao").onclick = function(){

    let temp;
    if(document.getElementById("Celsius").checked){
        temp = document.getElementById("temperatura").value;
        temp = Number(temp);
        temp = paraCelsius(temp);
        document.getElementById("conversao").innerHTML = `${temp}°C`;
    }
    else if(document.getElementById("Fahrenheit").checked){
        temp = document.getElementById("temperatura").value;
        temp = Number(temp);
        temp = paraFahrenheit(temp);
        document.getElementById("conversao").innerHTML = `${temp}°F`;
    }
    else{
        document.getElementById("conversao").innerHTML = "Selecione uma unidade"
    }

}

function paraCelsius(temp){
    return(temp - 32) * (5/9);
}
function paraFahrenheit(temp){
    return temp * 9/5 + 32
}

