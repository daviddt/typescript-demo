var Module = (function () {
    function Module() {
    }
    return Module;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Rewards = (function (_super) {
    __extends(Rewards, _super);
    function Rewards() {
        _super.apply(this, arguments);
    }
    return Rewards;
})(Module);
var codeRegexp = /^([0-9]|[a-z]){5}-([0-9]|[a-z]){5}-([0-9]|[a-z]){5}$/ig;
var CodeValidator = (function () {
    function CodeValidator() {
    }
    CodeValidator.prototype.isAcceptable = function (s) {
        return codeRegexp.test(s);
    };
    return CodeValidator;
})();
var lettersRegexp = /^[A-Za-z]+$/;
var LettersOnlyValidator = (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
})();
