interface Usuario {
    nome : string;
    id : number;
}

class Usuario_Da_Conta {
    nome : string;
    id : number;

    constructor(nome : string , id : number){
        this.nome = nome
        this.id = id
    }
    showName(){
        console.log(this.nome,this.id)
    }
}


const user_1 : Usuario = new Usuario_Da_Conta('Caue' , 1);

console.log(user_1.id)