// constructor = Um metodo especial de uma classe,
//               aceita argumentos e atribui propriedades

class estudante{

    constructor(nome, idade, nota){
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;

    }
    estudo(){
        console.log(`${this.nome} está estudando`);
    }
}

const estudante1 = new estudante("Eduardo", 16, 22);
const estudante2 = new estudante("Emily", 15, 25);
const estudante3 = new estudante("Maria Clara", 16, 20);

console.log(estudante1.nome);
console.log(estudante1.idade);
console.log(estudante1.nota);
estudante1.estudo();

console.log(estudante2.nome);
console.log(estudante2.idade);
console.log(estudante2.nota);
estudante2.estudo();

console.log(estudante3.nome);
console.log(estudante3.idade);
console.log(estudante3.nota);
estudante3.estudo();

