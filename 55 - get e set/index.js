// get = liga a propriedade de um objeto a uma função
//       quando aquela propriedade é acessada
// set =  liga a propriedade de um objeto a uma função
//        quando aquela propriedade é atribuida a um valor

class Carro{
    constructor(ligar){
        this._gas = 25;
        this._ligar = ligar
    }
    get ligar(){
        return `${this._ligar}HP`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100})%`;
    }
    set gas(value){

        if(value > 50){
            value = 50
        }
        else if(value < 0){
            value = 0
        }
        this._gas = value;
    }
}

let carro = new Carro(400);

carro.gas = 100000000000000000000;

console.log(carro.ligar);
console.log(carro.gas);