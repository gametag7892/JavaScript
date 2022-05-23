// super = refere-se a classe parente
///        comunmente usada para invocar o constructor de uma classe parente

class Animal{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
}

}

class Coelho extends Animal{
    
    constructor(nome, idade, VelocidadeCorrer){
        super(nome, idade)
        this.VelocidadeCorrer = VelocidadeCorrer;
    }
}

class Peixe extends Animal{

    constructor(nome, idade, VelocidadeNadar){
        super(nome, idade)
        this.VelocidadeNadar = VelocidadeNadar;
    }
}

class Aguia extends Animal{
    
   constructor(nome, idade, VelocidadeVoar){
        super(nome, idade)
        this.VelocidadeVoar = VelocidadeVoar;
    }
}

const coelho = new Coelho("Coelho", 1, 40);
const peixe = new Peixe("Peixe", 2, 80);
const aguia = new Aguia("Aguia", 3, 200);

console.log(coelho.nome);
console.log(coelho.idade);
console.log(coelho.VelocidadeCorrer);

console.log(peixe.nome);
console.log(peixe.idade);
console.log(peixe.VelocidadeNadar);

console.log(aguia.nome);
console.log(aguia.idade);
console.log(aguia.VelocidadeVoar);