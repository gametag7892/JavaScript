class Carro{

    constructor(modelo, ano, cor){
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
}

const carro1 = new Carro("Mustang", 2023, "vermelho");
const carro2 = new Carro("Corvette", 2024, "azul");
const carro3 = new Carro("Lamborghini", 2022, "amarelo");

mudarCor(carro3, "ouro");
displayInfo(carro3);

function displayInfo(carro){
    console.log(carro.modelo);
    console.log(carro.ano);
    console.log(carro.cor);
}

function mudarCor(carro, cor){
    carro.cor = cor;
}