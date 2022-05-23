// static = pertence as classe, não os objetos
//          propriedades: util para caches, configuração padrão
//          metodos: util para utilidade das funções

class carro{

    static numeroDeCarros = 0;

    constructor(model){
        this.model = model;
        carro.numeroDeCarros += 1;
    }

    static ComeçarCorrida(){
        console.log("3... 2... 1... GOO!!!")
    }
}

const carro1 = new carro("corolla");
const carro2 = new carro("civic");
const carro3 = new carro("serato");
const carro4 = new carro("palio");
const carro5 = new carro("fusca");

console.log(carro.numeroDeCarros);

carro.ComeçarCorrida();
