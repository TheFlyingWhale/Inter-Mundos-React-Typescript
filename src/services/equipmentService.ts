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

export const createDivineProtectorShield = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Shield({
        id: `shield${equipmentId}`,
        name: "Divine Protector",
        strength: 100,
    });
};
