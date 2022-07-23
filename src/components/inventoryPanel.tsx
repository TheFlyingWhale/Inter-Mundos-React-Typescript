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

    const handleEquipItem = () => {};

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
    return (
        <VStack align="start" bg="gray.600" p={3} borderRadius={3}>
            <Heading size="sm">{item.name}</Heading>
            <Text>
                <b>Strength: </b>
                {item.strength}
            </Text>
            <Button colorScheme="green" onClick={handleEquipItem}>
                Equip
            </Button>
            <Button colorScheme="orange" onClick={handleEquipItem}>
                Unequip
            </Button>
        </VStack>
    );
};
