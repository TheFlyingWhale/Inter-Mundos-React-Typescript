import { Tile } from "./Tile";

export class World {
    public name: string = "World name";
    public size: number;
    public map: Tile[] = [];

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    initialize(): World {
        for (let i = 0; i < this.size; i++) {
            const newTile = new Tile(i, "plains");
            if (i !== 5) {
                newTile.setRandomType();
            } else {
                newTile.setType("base");
            }
            this.map.push(newTile);
        }

        return this;
    }
}
