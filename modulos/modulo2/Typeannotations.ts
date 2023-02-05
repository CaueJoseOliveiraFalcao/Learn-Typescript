let nome : string = 'oia';
console.log(nome);

let animais : string[] = ['Leao','Gato','Panda'];
console.log(animais);

let carro : {
    nome : string;
    ano : number;
    preco : number;
}

carro = {nome : 'tesla' , ano :2002 , preco:100};
console.log(carro)


function multiplicarNumero(num1:number,num2:number){
    console.log(num1*num2)
}
multiplicarNumero(3,4)

let tarefaConcluida : boolean = true;
let tarefaPendente : boolean = false;

console.log(tarefaConcluida,tarefaPendente);

let concluido : boolean = false;

if (concluido){
    console.log('Tarefa conclida')
}
else{
    console.log('tarefa nao concluida')
}

// array 

let frutas : string[] = ['maca','laranja'];

let frutas1 : Array<string>= ['maca','laranja'];

frutas.push('mamaco')
console.log(frutas)

let listaDeNumeros : Array<number> = [1,2,3,4];

listaDeNumeros = [...listaDeNumeros , 5, 6, 7, 8, 9 , 10];

console.log(listaDeNumeros)

let linguagens : Array<string> = ['jsava','pythin','php'];

function Funcaolinga(linguagens:string[]){
    linguagens.forEach(element => {
        console.log(element)
    });
}

Funcaolinga(linguagens)

//tuple

let pessoa: [string , string , number];

pessoa = ['Caue' , 'bankai' , 12];

console.log(pessoa)

let frufru: [string, ...string[]] = ['mama','ajaz']

let listadefrutsa : [number,boolean , ...Array<string>] = [5,true,...frufru]


function listarPessoas(nomes:Array<string>,idades:Array<number>){
    return [nomes,idades]
}

let pessaaa = listarPessoas(['Caue','joao'],[11,22])
console.log(pessaaa) 

type Nome = 
    | [priemiroNome:string,sobrenome : string] | [priemiroNome:string,nomedomeio:string,sobrenome : string];


    function CriarPessoa(...nome:Nome){
        return [...nome]
    };

console.log(CriarPessoa('Caue','Falcao'))
console.log(CriarPessoa('Caue','jose','Falcao'))