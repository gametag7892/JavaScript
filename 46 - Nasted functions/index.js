// nasted functions = funções dentro de outras funções.
//                    Funções deFora tem acesso as funções deDentro
//                    Funções deDentro são "escondidas" para os de fora
//                    usada em clausuras (Vai ser aprendido futuramente)

let NomeUsuario = "Eduardo";
let UsuarioMensagens = 0;

login();

function login(){
    displayNomeUsuario();
    displayUsuarioMensagens();

    function displayNomeUsuario(){
    console.log(`Bem vindo ${NomeUsuario}`);
    }

    function displayUsuarioMensagens(){
    console.log(`Você tem ${UsuarioMensagens} novas mensagens`);
    }

}
