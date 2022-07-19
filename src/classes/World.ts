import { Tile } from "./Tile";

export class World {
    public name: string = "World name";
    public size: number;
    public map: Tile[] = [];

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}
