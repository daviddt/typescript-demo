class Rewards extends Module {
    private _interactions: Array<IInteraction>;

    public constructor() {
        this._interactions = new Array<IInteraction>();

        super();
    }

    public addInteraction(interaction: IInteraction): void {
        this._interactions.push(interaction);
    }

    public render(): string {
        var output: string = "";

        this._interactions.forEach(i => {
            output += i.render();
        });

        return output;
    }
}