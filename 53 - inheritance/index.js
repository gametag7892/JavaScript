// inheritance = uma classe criança que pode herdar todos os
//               metodos e propriedades de uma outra classe


class Animal{
    
    vivo = true;

    comer(){
        console.log(`esse ${this.nome} está comendo`);
    }
    dormir(){
        console.log(`esse ${this.nome} está dormindo`);
    }
}

class Coelho extends Animal{
    
    nome = "coelho";

    correr(){
        console.log(`esse ${this.nome} está correndo`);
    }
}

class Peixe extends Animal{

    nome = "peixe";

    nadar(){
        console.log(`esse ${this.nome} está nadando`);
    }
}

class Aguia extends Animal{

    nome = "aguia";

    voar(){
        console.log(`esse ${this.nome} está voando`);
    }
}

const coelho = new Coelho();
const peixe = new Peixe();
const aguia = new Aguia();

console.log(coelho.vivo);
coelho.comer();
coelho.dormir();
coelho.correr();

console.log(peixe.vivo);
peixe.comer();
Peixe.dormir();
peixe.nadar();

console.log(aguia.vivo);
aguia.comer();
aguia.dormir();
aguia.voar();