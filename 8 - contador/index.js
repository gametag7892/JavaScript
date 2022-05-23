let contador = 0;
document.getElementById("contador").innerHTML = contador

document.getElementById("aumentar").onclick = function(){

    contador +=1;
    document.getElementById("contador").innerHTML = contador;
}
document.getElementById("resetar").onclick = function(){

    contador = 0;
    document.getElementById("contador").innerHTML = contador;
}
document.getElementById("diminuir").onclick = function(){

    contador -=1;
    document.getElementById("contador").innerHTML = contador;
}
