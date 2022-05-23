// objetos = um grupo de propriedades e metodos
//           propriedades = o que um objeto tem
//           metodos = o que um objeto pode fazer
//           use . para acessar propriedades/metodos

const carro = {
    modelo: "Mustang",
    cor: "vermelho",
    ano: 2022,

    dirigir : function(){
        console.log("Você dirige o carro");
    },
    freios : function(){
        console.log("Você pisa nos freios");
    }

}
const carro2 = {
    modelo: "Corola",
    cor: "Branco",
    ano: 2022,

    dirigir : function(){
        console.log("Você dirige o carro");
    },
    freios : function(){
        console.log("Você pisa nos freios");
    }

}


console.log(carro.modelo);
console.log(carro.cor);
console.log(carro.ano);
carro.dirigir();
carro.freios();

console.log(carro2.modelo);
console.log(carro2.cor);
console.log(carro2.ano);
carro2.dirigir();
carro2.freios();