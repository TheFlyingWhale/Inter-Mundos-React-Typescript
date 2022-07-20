import { Tile } from "../classes/Tile";
import { createTile } from "./tileService";

const createRandomWorldMap = (mapSize: number): Tile[] => {
    const generateRandomDifficultyLevel = (): number => {
        return Math.floor(Math.random() * (7 - 1) + 1);
    };

    const mapTiles: Tile[] = [];
    for (let i = 0; i < mapSize; i++) {
        switch (i) {
            case 0:
                mapTiles.push(createTile(i, "temple", true, 10));
                break;
            case 5:
                mapTiles.push(createTile(i, "base", false));
                break;
            case 10:
                mapTiles.push(createTile(i, "temple", true, 10));
                break;
            default:
                mapTiles.push(
                    createTile(
                        i,
                        undefined,
                        true,
                        generateRandomDifficultyLevel()
                    )
                );
                break;
        }
    }
    return mapTiles;
};

const createCampaignMap = (): Tile[] => {
    const mapTiles: Tile[] = [];

    const angelBoss = new Tile({
        id: "0",
        name: "Gods Temple",
        index: 0,
        type: "temple",
        containsEnemy: true,
        difficultyLevel: 10,
        enemyName: "Furious Angel",
    });
    mapTiles.push(angelBoss);

    const westMountain = new Tile({
        id: "1",
        name: "Sunny Mountain",
        index: 1,
        type: "mountain",
        containsEnemy: true,
        difficultyLevel: 7,
    });
    mapTiles.push(westMountain);

    const westLake = new Tile({
        id: "2",
        name: "Calm Lake",
        index: 2,
        type: "lake",
        containsEnemy: false,
    });
    mapTiles.push(westLake);

    const westPlains = new Tile({
        id: "3",
        name: "Open Plains",
        index: 3,
        type: "plains",
        containsEnemy: true,
        difficultyLevel: 4,
    });
    mapTiles.push(westPlains);

    const westVillage = new Tile({
        id: "4",
        name: "West Village",
        index: 4,
        type: "village",
        containsEnemy: true,
        difficultyLevel: 2,
    });
    mapTiles.push(westVillage);

    const base = new Tile({
        id: "5",
        name: "Home Base",
        index: 5,
        type: "base",
        containsEnemy: false,
    });
    mapTiles.push(base);

    const eastVillage = new Tile({
        id: "6",
        name: "East Village",
        index: 6,
        type: "village",
        containsEnemy: true,
        difficultyLevel: 2,
    });
    mapTiles.push(eastVillage);

    const eastPlains = new Tile({
        id: "7",
        name: "Open Plains",
        index: 7,
        type: "plains",
        containsEnemy: true,
        difficultyLevel: 4,
    });
    mapTiles.push(eastPlains);

    const eastSwamp = new Tile({
        id: "8",
        name: "Foggy Swamp",
        index: 8,
        type: "swamp",
        containsEnemy: true,
        difficultyLevel: 7,
    });
    mapTiles.push(eastSwamp);

    const eastDesert = new Tile({
        id: "9",
        name: "Desert",
        index: 9,
        type: "desert",
        containsEnemy: true,
        difficultyLevel: 8,
    });
    mapTiles.push(eastDesert);

    const devilBoss = new Tile({
        id: "10",
        name: "Devils Temple",
        index: 10,
        type: "temple",
        containsEnemy: true,
        difficultyLevel: 10,
        enemyName: "Black Devil",
    });
    mapTiles.push(devilBoss);

    return mapTiles;
};

export { createRandomWorldMap, createCampaignMap };
