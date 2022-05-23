
document.getElementById("Rolar").onclick = function(){
   
    let x = Math.floor((Math.random()*30) + 1);
    let y = Math.floor((Math.random()*20) + 1);
    let z = Math.floor((Math.random()*10) + 1);
   
    document.getElementById("RNG1").innerHTML = x;
    document.getElementById("RNG2").innerHTML = y;
    document.getElementById("RNG3").innerHTML = z;

console.log(x);
console.log(y);
console.log(z);

}




