// this = referencia para um objeto particular
//        o objeto depende do contexto imediato

const carro = {
    modelo: "Mustang",
    cor: "vermelho",
    ano: 2022,

    dirigir : function(){
        console.log(`Você dirige o ${this.modelo}`);
    }
}
const carro2 = {
    modelo: "Corola",
    cor: "Branco",
    ano: 2022,

    dirigir : function(){
        console.log(`Você dirige o ${this.modelo}`);
    }
}
 carro.dirigir();
 carro2.dirigir();