import { Enemy, Goat } from '../classes/Enemy';

const randomEnemyNames = [
	'Goat',
	'Demon',
	'Angel',
	'Dragon',
	'Dwarf',
	'Human',
	'Troll',
];

const createEnemy = (): Enemy => {
	return new Enemy({ name: 'Enemy name' });
};

const createEnemyWithRandomStats = (): Enemy => {
	const attackPower = Math.floor(Math.random() * (10 - 1) + 1);
	const critChange = Math.floor(Math.random() * (25 - 10) + 10);

	const newEnemy = new Enemy({
		name: randomEnemyNames[Math.floor(Math.random() * randomEnemyNames.length)],
		attackPower: attackPower,
		critChance: critChange,
	});

	return newEnemy;
};

const createGoat = (): Goat => {
	return new Goat();
};

export { createEnemy, createEnemyWithRandomStats, createGoat };
