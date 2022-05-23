class Carro{

    constructor(modelo, ano, cor){
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    dirigir(){
        console.log(`Você dirige o ${this.modelo}`)
    }
}

const carro1 = new Carro("Mustang", 2023, "vermelho");
const carro2 = new Carro("Corvette", 2023, "azul");
const carro3 = new Carro("Lamborghini", 2023, "amarelo");