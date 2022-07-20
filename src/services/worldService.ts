import { Tile } from '../classes/Tile';
import { createTile } from './tileService';

const createRandomWorldMap = (mapSize: number): Tile[] => {
	const mapTiles: Tile[] = [];
	for (let i = 0; i < mapSize; i++) {
		switch (i) {
			case 0:
				mapTiles.push(createTile(i, 'temple'));
				break;
			case 5:
				mapTiles.push(createTile(i, 'base', false));
				break;
			case 10:
				mapTiles.push(createTile(i, 'temple'));
				break;
			default:
				mapTiles.push(createTile(i, undefined));
				break;
		}
	}
	return mapTiles;
};

export { createRandomWorldMap };
