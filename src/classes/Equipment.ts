export type EquipmentTypes = Equipment | Sword | Shield;
export type EquipmentTypesWithStrength = Sword | Shield;

export class Equipment {
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

export class Sword extends Equipment {
    public strength: number;

    constructor({
        id,
        name = "Sword",
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

export class Shield extends Equipment {
    public strength: number;

    constructor({
        id,
        name,
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
