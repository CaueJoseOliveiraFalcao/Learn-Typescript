var UsuarioDaConta = /** @class */ (function () {
    function UsuarioDaConta(nome, id) {
        this.nome = nome;
        this.id = id;
    }
    UsuarioDaConta.prototype.showName = function () {
        console.log(this.nome, this.id);
    };
    return UsuarioDaConta;
}());
var user_1 = new UsuarioDaConta('Caue', 1);
console.log(user_1.id);
