export type ItemTypes = Item | HealthPotion | Bread | WaterFlask | EnergyPotion;
export type ItemTypesWithStrength =
    | HealthPotion
    | Bread
    | WaterFlask
    | EnergyPotion;

export class Item {
    public id: string;
    public name: string;

    constructor({
        id,
        name = "default item name",
    }: {
        id: string;
        name?: string;
    }) {
        this.id = id;
        this.name = name;
    }
}

export class HealthPotion extends Item {
    public strength: number;

    constructor({
        id,
        name = "Health Potion",
        strength = 25,
    }: {
        id: string;
        name?: string;
        strength?: number;
    }) {
        super({
            id: id,
            name: name,
        });
        this.strength = strength;
    }
}

export class Bread extends Item {
    public strength: number;

    constructor({
        id,
        name = "Bread",
        strength = 25,
    }: {
        id: string;
        name?: string;
        strength?: number;
    }) {
        super({
            id: id,
            name: name,
        });
        this.strength = strength;
    }
}

export class WaterFlask extends Item {
    public strength: number;

    constructor({
        id,
        name = "Water Flask",
        strength = 25,
    }: {
        id: string;
        name?: string;
        strength?: number;
    }) {
        super({
            id: id,
            name: name,
        });
        this.strength = strength;
    }
}

export class EnergyPotion extends Item {
    public strength: number;

    constructor({
        id,
        name = "Energy Potion",
        strength = 25,
    }: {
        id: string;
        name?: string;
        strength?: number;
    }) {
        super({
            id: id,
            name: name,
        });
        this.strength = strength;
    }
}
