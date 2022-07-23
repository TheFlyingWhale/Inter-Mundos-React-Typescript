import {
    ItemTypes,
    Item,
    HealthPotion,
    Bread,
    WaterFlask,
    EnergyPotion,
} from "../classes/Item";

let globalItemId = 0;

export const createItem = (): ItemTypes => {
    const itemId = globalItemId++;
    return new Item({ id: `item${itemId}` });
};

export const createHealthPotion = () => {
    const itemId = globalItemId++;
    return new HealthPotion({ id: `healthPotion${itemId}` });
};

export const createBread = () => {
    const itemId = globalItemId++;
    return new Bread({ id: `bread${itemId}` });
};

export const createWaterFlask = () => {
    const itemId = globalItemId++;
    return new WaterFlask({ id: `waterFlask${itemId}` });
};

export const createEnergyPotion = () => {
    const itemId = globalItemId++;
    return new EnergyPotion({ id: `energyPotion${itemId}` });
};
