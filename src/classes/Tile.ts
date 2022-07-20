export type TileType =
    | "plains"
    | "jungle"
    | "forest"
    | "mountain"
    | "desert"
    | "lake"
    | "river"
    | "swamp"
    | "cave"
    | "temple"
    | "village"
    | "base";

export class Tile {
    public id: string;
    public name: string;
    public index: number;
    public type: TileType;
    public containsEnemy: boolean;
    public difficultyLevel: number;
    public enemyName: string | undefined;

    constructor({
        id,
        name = "tile name",
        index,
        type = "plains",
        containsEnemy = false,
        difficultyLevel = 1,
        enemyName = undefined,
    }: {
        id: string;
        name?: string;
        index: number;
        type?: TileType;
        containsEnemy?: boolean;
        difficultyLevel?: number;
        enemyName?: string;
    }) {
        this.id = id;
        this.name = name;
        this.index = index;
        this.type = type;
        this.containsEnemy = containsEnemy;
        this.difficultyLevel = difficultyLevel;
        this.enemyName = enemyName;
    }
}
