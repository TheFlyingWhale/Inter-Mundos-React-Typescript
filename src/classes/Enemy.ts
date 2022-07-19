export class Enemy {
    public name: string = "Enemy name";
    public health: number = 100;
    public attackPower: number = 10;
    public critChance: number = 1;

    constructor({
        name = "Enemy name",
        health = 100,
        attackPower = 10,
        critChance = 1,
    }: {
        name: string;
        health?: number;
        attackPower?: number;
        critChance?: number;
    }) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.critChance = critChance;
    }
}
