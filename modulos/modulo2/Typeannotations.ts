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