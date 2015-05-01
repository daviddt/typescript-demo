var Code = (function () {
    function Code(numberOfCodesRequired) {
        this.numberOfCodesRequired = numberOfCodesRequired;
    }
    Code.prototype.render = function () {
        return "code interaction";
    };
    return Code;
})();
