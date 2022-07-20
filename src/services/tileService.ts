import { Tile, TileType } from '../classes/Tile';

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
	withEnemy: boolean = true,
	difficultyLevel: number = 1
): Tile => {
	const chosenTileType = tileType || getRandomTileType();
	return new Tile({
		id: index.toString(),
		index,
		type: chosenTileType,
		containsEnemy: withEnemy,
		difficultyLevel: difficultyLevel,
	});
};

export { createTile };
