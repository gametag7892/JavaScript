// class = uma cópia heliográfica para criação de objetos
//         define que propriedades e metodos eles tem
//         usa um construtor para propriedades unicas

class Player{


    score = 0;

    pause(){
        console.log("Você parou o jogo");
    }
    exit(){
        console.log("Você saiu do jogo");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();