import { Tile } from "../classes/Tile";
import { createTile } from "./tileService";

const createRandomWorldMap = (mapSize: number): Tile[] => {
    const mapTiles: Tile[] = [];
    for (let i = 0; i < mapSize; i++) {
        if (i !== 5) {
            mapTiles.push(createTile(i, undefined));
        } else {
            mapTiles.push(createTile(i, "base"));
        }
    }
    return mapTiles;
};

export { createRandomWorldMap };
