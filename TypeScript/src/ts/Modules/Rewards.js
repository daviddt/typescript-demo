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
    Rewards.prototype.addInteraction = function (interaction) {
        console.log('add int: ', interaction.name);
    };
    return Rewards;
})(Module);
