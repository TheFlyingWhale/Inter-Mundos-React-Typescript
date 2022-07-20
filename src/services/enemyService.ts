import { Enemy } from '../classes/Enemy';

const createEnemy = (): Enemy => {
	return new Enemy({ name: 'Enemy name' });
};

const createEnemyWithRandomStats = (): Enemy => {
	const attackPower = Math.floor(Math.random() * (10 - 1) + 1);
	const critChange = Math.floor(Math.random() * (25 - 10) + 10);

	const newEnemy = new Enemy({
		name: 'Enemy name',
		attackPower: attackPower,
		critChance: critChange,
	});

	return newEnemy;
};

export { createEnemy, createEnemyWithRandomStats };
