
let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];



embaralhar(cartas);
cartas.forEach(carta => console.log(carta));

function embaralhar(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let ramdomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[ramdomIndex];
        array[ramdomIndex] = temp;
    }

    return array;
}