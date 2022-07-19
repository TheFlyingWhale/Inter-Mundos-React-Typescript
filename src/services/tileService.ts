import { Tile, TileType } from "../classes/Tile";

const tileTypes: TileType[] = [
    "plains",
    "jungle",
    "forest",
    "mountain",
    "desert",
    "lake",
    "river",
];

const getRandomTileType = (): TileType => {
    return tileTypes[Math.floor(Math.random() * tileTypes.length)];
};

const createTile = (index: number, tileType: TileType | undefined): Tile => {
    const chosenTileType = tileType || getRandomTileType();
    return new Tile(index, chosenTileType);
};

export { createTile };
