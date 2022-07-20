export class Player {
	public name: string = 'Player name';
	public index: number;
	public health: number;
	public thirst: number;
	public hunger: number;
	public energy: number;
	public attackPower: number;
	public critChance: number;
	public hitChance: number;

	constructor({
		name = 'Player name',
		index = 5,
		health = 100,
		thirst = 100,
		hunger = 100,
		energy = 100,
		attackPower = 10,
		critChance = 75,
		hitChance = 90,
	}: {
		name: string;
		index?: number;
		health?: number;
		thirst?: number;
		hunger?: number;
		energy?: number;
		attackPower?: number;
		critChance?: number;
		hitChance?: number;
	}) {
		this.name = name;
		this.index = index;
		this.health = health;
		this.thirst = thirst;
		this.hunger = hunger;
		this.energy = energy;
		this.attackPower = attackPower;
		this.critChance = critChance;
		this.hitChance = hitChance;
	}
}
