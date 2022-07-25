import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import { useGameContext } from "../context/GameContext";
import {
    ItemTypes,
    ItemTypesWithStrength,
    HealthPotion,
    Bread,
    WaterFlask,
    EnergyPotion,
} from "../classes/Item";
import {
    EquipmentTypes,
    EquipmentTypesWithStrength,
    Fist,
    Sword,
    Shield,
} from "../classes/Equipment";

export const InventoryPanel = () => {
    const { gameState } = useGameContext();
    const { player } = gameState;
    const { inventory } = player;

    return (
        <VStack bg="gray.700" p={6} borderRadius={6} alignItems="start">
            <Heading size="md">Player Inventory</Heading>
            {inventory.map((item, index) => {
                return <Item item={item} key={index} />;
            })}
        </VStack>
    );
};

const Item = ({ item }: { item: ItemTypes | EquipmentTypes }) => {
    const { gameState, gameCommands } = useGameContext();
    const { player } = gameState;
    const {
        removeItemFromInventory,
        setPlayerHealth,
        setPlayerHunger,
        setPlayerThirst,
        setPlayerEnergy,
    } = gameCommands;

    const handleUseItem = () => {
        if (item instanceof HealthPotion) {
            const playerHealth = player.health;
            const newPlayerHealth = playerHealth + item.strength;
            setPlayerHealth(newPlayerHealth);
            removeItemFromInventory(item.id);
        }
        if (item instanceof Bread) {
            const playerHunger = player.hunger;
            const newPlayerHunger = playerHunger + item.strength;
            setPlayerHunger(newPlayerHunger);
            removeItemFromInventory(item.id);
        }
        if (item instanceof WaterFlask) {
            const playerThirst = player.thirst;
            const newPlayerThirst = playerThirst + item.strength;
            setPlayerThirst(newPlayerThirst);
            removeItemFromInventory(item.id);
        }
        if (item instanceof EnergyPotion) {
            const playerEnergy = player.energy;
            const newPlayerEnergy = playerEnergy + item.strength;
            setPlayerEnergy(newPlayerEnergy);
            removeItemFromInventory(item.id);
        }
    };

    const addCurrentWeaponToInventory = () => {
        const currentWeapon = player.weapon;
        if (!(currentWeapon instanceof Fist)) {
            gameCommands.addItemToInventory(currentWeapon);
        }
    };

    const addCurrentShieldToInventory = () => {
        const currentShield = player.shield;
        if (!(currentShield instanceof Fist)) {
            gameCommands.addItemToInventory(currentShield);
        }
    };

    // This works great for weapon, but since fists are used as shields too we need to handle them separately
    const handleEquipItem = () => {
        if (item instanceof Fist) {
            addCurrentWeaponToInventory();
            const fist = item;
            gameCommands.removeItemFromInventory(fist.id);
            gameCommands.setPlayerWeapon(fist);
        }
        if (item instanceof Sword) {
            addCurrentWeaponToInventory();
            const sword = item;
            gameCommands.removeItemFromInventory(sword.id);
            gameCommands.setPlayerWeapon(sword);
        }
        if (item instanceof Shield) {
            addCurrentShieldToInventory();
            const shield = item;
            gameCommands.removeItemFromInventory(shield.id);
            gameCommands.setPlayerShield(shield);
        }
    };

    if (item instanceof HealthPotion) {
        return <ItemWithStrength handleUseItem={handleUseItem} item={item} />;
    }

    if (item instanceof Bread) {
        return <ItemWithStrength handleUseItem={handleUseItem} item={item} />;
    }

    if (item instanceof WaterFlask) {
        return <ItemWithStrength handleUseItem={handleUseItem} item={item} />;
    }

    if (item instanceof EnergyPotion) {
        return <ItemWithStrength handleUseItem={handleUseItem} item={item} />;
    }

    if (item instanceof Fist) {
        return <Equipment handleEquipItem={handleEquipItem} item={item} />;
    }

    if (item instanceof Sword) {
        return <Equipment handleEquipItem={handleEquipItem} item={item} />;
    }

    if (item instanceof Shield) {
        return <Equipment handleEquipItem={handleEquipItem} item={item} />;
    }

    return <></>;
};

const ItemWithStrength = ({
    handleUseItem,
    item,
}: {
    handleUseItem: () => void;
    item: ItemTypesWithStrength;
}) => {
    return (
        <VStack align="start" bg="gray.600" p={3} borderRadius={3}>
            <Heading size="sm">{item.name}</Heading>
            <Text>
                <b>Strength: </b>
                {item.strength}
            </Text>
            <Button colorScheme="red" onClick={handleUseItem}>
                Use
            </Button>
        </VStack>
    );
};

const Equipment = ({
    handleEquipItem,
    item,
}: {
    handleEquipItem: () => void;
    item: EquipmentTypesWithStrength;
}) => {
    const renderStrengthOrDefense = () => {
        if (item instanceof Sword) {
            console.log("item is sword");
            return <b>Strength: </b>;
        }
        if (item instanceof Shield) {
            return <b>Defense: </b>;
        }
    };

    return (
        <VStack align="start" bg="gray.600" p={3} borderRadius={3}>
            <Heading size="sm">{item.name}</Heading>
            <Text>
                {renderStrengthOrDefense()}
                {item.strength}
            </Text>
            <Button colorScheme="green" onClick={handleEquipItem}>
                Equip
            </Button>
        </VStack>
    );
};
