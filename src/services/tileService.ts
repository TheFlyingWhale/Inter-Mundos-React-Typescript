import { Tile, TileType } from '../classes/Tile';
import { createEnemyWithRandomStats } from './enemyService';

const tileTypes: TileType[] = [
	'plains',
	'jungle',
	'forest',
	'mountain',
	'desert',
	'lake',
	'river',
];

const getRandomTileType = (): TileType => {
	return tileTypes[Math.floor(Math.random() * tileTypes.length)];
};

const createTile = (
	index: number,
	tileType: TileType | undefined,
	withEnemy: boolean = true
): Tile => {
	const chosenTileType = tileType || getRandomTileType();
	return new Tile({
		id: index.toString(),
		index,
		type: chosenTileType,
		enemy: withEnemy ? createEnemyWithRandomStats() : undefined,
	});
};

export { createTile };
