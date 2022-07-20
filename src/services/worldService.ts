import { Tile } from '../classes/Tile';
import { createTile } from './tileService';

const createRandomWorldMap = (mapSize: number): Tile[] => {
	const generateRandomDifficultyLevel = (): number => {
		return Math.floor(Math.random() * (7 - 1) + 1);
	};

	const mapTiles: Tile[] = [];
	for (let i = 0; i < mapSize; i++) {
		switch (i) {
			case 0:
				mapTiles.push(createTile(i, 'temple', true, 10));
				break;
			case 5:
				mapTiles.push(createTile(i, 'base', false));
				break;
			case 10:
				mapTiles.push(createTile(i, 'temple', true, 10));
				break;
			default:
				mapTiles.push(
					createTile(i, undefined, true, generateRandomDifficultyLevel())
				);
				break;
		}
	}
	return mapTiles;
};

export { createRandomWorldMap };
