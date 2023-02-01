class Default {
    text : string;
    numero : number;
    qualquer : any;
    boleano : boolean;
    array : any[];

    constructor(){
        this.metodo();

    }
    metodo(){
        this.text = `Esye e um alert simpls em tyscript`;
        this.numero = 10;
        return alert(this.text)
    }
}