type TileType =
    | "plains"
    | "jungle"
    | "forest"
    | "mountain"
    | "desert"
    | "lake"
    | "river"
    | "base";

export class Tile {
    public name: string = "tile name";
    public index: number = 0;
    public type: TileType = "plains";

    constructor(index: number, type: TileType) {
        this.index = index;
        this.type = type;
    }

    setName(name: string) {
        this.name = name;
    }

    setType(type: TileType) {
        this.type = type;
    }

    setRandomType() {
        const random = Math.floor(Math.random() * 7);
        switch (random) {
            case 0:
                this.type = "plains";
                break;
            case 1:
                this.type = "jungle";
                break;
            case 2:
                this.type = "forest";
                break;
            case 3:
                this.type = "mountain";
                break;
            case 4:
                this.type = "desert";
                break;
            case 5:
                this.type = "lake";
                break;
            case 6:
                this.type = "river";
                break;
            default:
                this.type = "plains";
                break;
        }
    }
}
