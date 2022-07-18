export class Enemy {
    public name: string = "Enemy name";
    public health: number = 100;
    public attackPower: number = 10;
    public critChance: number = 1;

    constructor(name: string) {
        this.name = name;
    }

    initRandom() {
        this.setAttackPower(Math.floor(Math.random() * 10));
        this.setCritChance(Math.floor(Math.random() * 10));
    }

    setAttackPower(attackPower: number) {
        this.attackPower = attackPower;
    }

    setCritChance(critChance: number) {
        this.critChance = critChance;
    }
}
