var Default = /** @class */ (function () {
    function Default() {
        this.metodo();
    }
    Default.prototype.metodo = function () {
        this.text = "Esye e um alert simpls em tyscript";
        return alert(this.text);
    };
    return Default;
}());
