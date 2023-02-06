var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nome = 'oia';
console.log(nome);
var animais = ['Leao', 'Gato', 'Panda'];
console.log(animais);
var carro;
carro = { nome: 'tesla', ano: 2002, preco: 100 };
console.log(carro);
function multiplicarNumero(num1, num2) {
    console.log(num1 * num2);
}
multiplicarNumero(3, 4);
var tarefaConcluida = true;
var tarefaPendente = false;
console.log(tarefaConcluida, tarefaPendente);
var concluido = false;
if (concluido) {
    console.log('Tarefa conclida');
}
else {
    console.log('tarefa nao concluida');
}
// array 
var frutas = ['maca', 'laranja'];
var frutas1 = ['maca', 'laranja'];
frutas.push('mamaco');
console.log(frutas);
var listaDeNumeros = [1, 2, 3, 4];
listaDeNumeros = __spreadArray(__spreadArray([], listaDeNumeros, true), [5, 6, 7, 8, 9, 10], false);
console.log(listaDeNumeros);
var linguagens = ['jsava', 'pythin', 'php'];
function Funcaolinga(linguagens) {
    linguagens.forEach(function (element) {
        console.log(element);
    });
}
Funcaolinga(linguagens);
//tuple
var pessoa;
pessoa = ['Caue', 'bankai', 12];
console.log(pessoa);
var frufru = ['mama', 'ajaz'];
var listadefrutsa = __spreadArray([5, true], frufru, true);
function listarPessoas(nomes, idades) {
    return [nomes, idades];
}
var pessaaa = listarPessoas(['Caue', 'joao'], [11, 22]);
console.log(pessaaa);
function CriarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArray([], nome, true);
}
;
console.log(CriarPessoa('Caue', 'Falcao'));
console.log(CriarPessoa('Caue', 'jose', 'Falcao'));
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Ingles"] = 1] = "Ingles";
    Idioma[Idioma["Espanhol"] = 2] = "Espanhol";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
