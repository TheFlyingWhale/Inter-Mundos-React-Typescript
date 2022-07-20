import { EquipmentTypes, Equipment, Sword, Shield } from '../classes/Equipment';

let globalEquipmentId = 0;

export const createEquipment = (): EquipmentTypes => {
	const equipmentId = globalEquipmentId++;
	return new Equipment({ id: `equipment${equipmentId}` });
};

export const createSword = (): EquipmentTypes => {
	const equipmentId = globalEquipmentId++;
	return new Sword({ id: `sword${equipmentId}` });
};

export const createShield = (): EquipmentTypes => {
	const equipmentId = globalEquipmentId++;
	return new Shield({ id: `shield${equipmentId}` });
};
