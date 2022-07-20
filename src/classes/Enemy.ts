export type EnemyType = Enemy | Goat;

export class Enemy {
	public name: string;
	public health: number;
	public attackPower: number;
	public critChance: number;
	public hitChance: number;
	public energy: number;
	public level: number;

	constructor({
		name = 'Enemy name',
		health = 100,
		attackPower = 10,
		critChance = 1,
		hitChance = 90,
		energy = 100,
		level = 1,
	}: {
		name: string;
		health?: number;
		attackPower?: number;
		critChance?: number;
		hitChance?: number;
		energy?: number;
		level?: number;
	}) {
		this.name = name;
		this.health = health;
		this.attackPower = attackPower;
		this.critChance = critChance;
		this.hitChance = hitChance;
		this.energy = energy;
		this.level = level;
	}
}

export class Goat extends Enemy {
	constructor() {
		super({
			name: 'Goat',
			health: 100,
			attackPower: 2,
			critChance: 2,
			hitChance: 90,
		});
	}
}
