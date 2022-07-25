import {
    EquipmentTypes,
    EquipmentTypesWithStrength,
    Equipment,
    Fist,
    Sword,
    Shield,
} from "../classes/Equipment";

let globalEquipmentId = 0;

export const createEquipment = (): EquipmentTypes => {
    const equipmentId = globalEquipmentId++;
    return new Equipment({ id: `equipment${equipmentId}` });
};

export const createFist = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Fist({ id: `equipment${equipmentId}` });
};

export const createSword = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Sword({ id: `sword${equipmentId}` });
};

export const createWoodenSword = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Sword({
        id: `equipment${equipmentId}`,
        name: "Wooden Sword",
        strength: 5,
    });
};

export const createCopperSword = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Sword({
        id: `equipment${equipmentId}`,
        name: "Copper Sword",
        strength: 15,
    });
};

export const createIronSword = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Sword({
        id: `equipment${equipmentId}`,
        name: "Iron Sword",
        strength: 20,
    });
};

export const createTungstenSword = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Sword({
        id: `equipment${equipmentId}`,
        name: "Tungsten Sword",
        strength: 30,
    });
};

export const createGodSlayerSword = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Sword({
        id: `sword${equipmentId}`,
        name: "God Slayer",
        strength: 100,
    });
};

export const createShield = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Shield({ id: `shield${equipmentId}` });
};

export const createWoodenShield = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Shield({
        id: `equipment${equipmentId}`,
        name: "Wooden Shield",
        strength: 5,
    });
};

export const createCopperShield = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Shield({
        id: `equipment${equipmentId}`,
        name: "Copper Shield",
        strength: 15,
    });
};

export const createIronShield = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Shield({
        id: `equipment${equipmentId}`,
        name: "Iron Shield",
        strength: 20,
    });
};

export const createTungstenShield = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Shield({
        id: `equipment${equipmentId}`,
        name: "Tungsten Shield",
        strength: 30,
    });
};

export const createDivineProtectorShield = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Shield({
        id: `shield${equipmentId}`,
        name: "Divine Protector",
        strength: 100,
    });
};
