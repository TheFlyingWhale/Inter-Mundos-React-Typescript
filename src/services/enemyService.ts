import { Enemy, Goat } from "../classes/Enemy";

const randomEnemyNames = [
    "Goat",
    "Demon",
    "Angel",
    "Dragon",
    "Dwarf",
    "Human",
    "Troll",
];

const getRelevantEnemyName = (tileType: string): string => {
    switch (tileType) {
        case "plains": {
            return "Stubborn Goat";
        }
        case "swamp": {
            return "Giant Mosquito";
        }
        case "desert": {
            return "Cursed Scorpion";
        }
        case "lake": {
            return "Holy Spirit";
        }
        case "mountain": {
            return "Angry Troll";
        }
        default: {
            return "Human";
        }
    }
};

const createEnemy = (): Enemy => {
    return new Enemy({ name: "Enemy name" });
};

const createEnemyWithRandomStats = (): Enemy => {
    const attackPower = Math.floor(Math.random() * (10 - 1) + 1);
    const critChange = Math.floor(Math.random() * (25 - 10) + 10);

    const newEnemy = new Enemy({
        name: randomEnemyNames[
            Math.floor(Math.random() * randomEnemyNames.length)
        ],
        attackPower: attackPower,
        critChance: critChange,
    });

    return newEnemy;
};

const createEnemyBasedOnLevel = ({
    level = 5,
    tileType = "village",
    name = getRelevantEnemyName(tileType),
}: {
    level: number;
    tileType: string;
    name?: string | undefined;
}): Enemy => {
    const attackPower = Math.floor(level * 5);
    const critChance = level * 2;

    return new Enemy({
        level: level,
        name: name,
        attackPower: attackPower,
        critChance: critChance,
    });
};

const createGoat = (): Goat => {
    return new Goat();
};

export {
    createEnemy,
    createEnemyWithRandomStats,
    createGoat,
    createEnemyBasedOnLevel,
};
