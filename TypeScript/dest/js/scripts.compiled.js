var Configuration = (function () {
    function Configuration() {
    }
    return Configuration;
})();
var Code = (function () {
    function Code(numberOfCodesRequired) {
        this.numberOfCodesRequired = numberOfCodesRequired;
    }
    Code.prototype.render = function () {
        return "code interaction";
    };
    return Code;
})();
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
        this._interactions = new Array();
        _super.call(this);
    }
    Rewards.prototype.addInteraction = function (interaction) {
        this._interactions.push(interaction);
    };
    Rewards.prototype.render = function () {
        var output = "";
        this._interactions.forEach(function (i) {
            output += i.render();
        });
        return output;
    };
    return Rewards;
})(Module);
