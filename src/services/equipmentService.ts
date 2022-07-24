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

export const createShield = (): EquipmentTypesWithStrength => {
    const equipmentId = globalEquipmentId++;
    return new Shield({ id: `shield${equipmentId}` });
};
