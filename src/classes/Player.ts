export class Player {
    public name: string = "Player name";
    public index: number = 5;
    public health: number = 100;
    public thirst: number = 100;
    public hunger: number = 100;
    public attackPower: number = 10;
    public critChance: number = 5;

    constructor(name: string) {
        this.name = name;
    }
}
