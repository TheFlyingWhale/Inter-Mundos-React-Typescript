import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import { useGameContext } from "../context/GameContext";
import { Fist } from "../classes/Equipment";
import { createFist } from "../services/equipmentService";

export const PlayerPanel = () => {
    const { gameState } = useGameContext();

    return (
        <VStack
            bg={gameState.player.health > 0 ? "gray.700" : "red.700"}
            p={6}
            borderRadius={6}
            alignItems="start"
        >
            <Heading size="md">Player Information</Heading>
            <PlayerNameItem />
            <PlayerIndexItem />
            <PlayerHealthItem />
            <PlayerEnergyItem />
            <PlayerThirstItem />
            <PlayerHungerItem />
            <PlayerAttackPowerItem />
            <PlayerCriticalChanceItem />
            <PlayerHitChanceItem />
            <PlayerEquipmentContainer />
        </VStack>
    );
};

const PlayerNameItem = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <Text>
                <b>Name:</b> {gameState.player.name}{" "}
            </Text>
        );
    }

    return <></>;
};

const PlayerIndexItem = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <Text>
                <b>Index:</b> {gameState.player.index}{" "}
            </Text>
        );
    }

    return <></>;
};

const PlayerHealthItem = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <Text>
                <b>Health:</b> {gameState.player.health}{" "}
            </Text>
        );
    }

    return <></>;
};

const PlayerThirstItem = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <Text>
                <b>Thirst:</b> {gameState.player.thirst}{" "}
            </Text>
        );
    }

    return <></>;
};

const PlayerHungerItem = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <Text>
                <b>Hunger:</b> {gameState.player.hunger}{" "}
            </Text>
        );
    }

    return <></>;
};

const PlayerAttackPowerItem = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <Text>
                <b>Attack Power:</b> {gameState.player.attackPower}{" "}
            </Text>
        );
    }

    return <></>;
};

const PlayerCriticalChanceItem = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <Text>
                <b>Critical Chance:</b> {gameState.player.critChance}{" "}
            </Text>
        );
    }

    return <></>;
};

const PlayerHitChanceItem = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <Text>
                <b>Hit Chance:</b> {gameState.player.hitChance}{" "}
            </Text>
        );
    }

    return <></>;
};

const PlayerEnergyItem = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <Text>
                <b>Energy:</b> {gameState.player.energy}{" "}
            </Text>
        );
    }

    return <></>;
};

const PlayerEquipmentContainer = () => {
    const { gameState } = useGameContext();

    if (gameState.player) {
        return (
            <VStack alignItems="start" bg="gray.600" p={3} borderRadius={3}>
                <Heading size="md">Equipment</Heading>
                <PlayerWeaponItem />
                <PlayerShieldItem />
            </VStack>
        );
    }

    return <></>;
};

const PlayerWeaponItem = () => {
    const { gameState, gameCommands } = useGameContext();
    const { player } = gameState;
    const { weapon } = player;
    const { addItemToInventory, setPlayerWeapon } = gameCommands;

    const handleUnequipWeapon = () => {
        const currentWeapon = player.weapon;
        addItemToInventory(currentWeapon);
        setPlayerWeapon(createFist());
    };

    if (weapon instanceof Fist) {
        return (
            <VStack align="start" bg="gray.700" p={3} borderRadius={3}>
                <Text>
                    <b>Weapon:</b> {weapon.name}{" "}
                </Text>
                <Text>
                    <b>Strength:</b> {weapon.strength}{" "}
                </Text>
            </VStack>
        );
    }

    return (
        <VStack align="start" bg="gray.700" p={3} borderRadius={3}>
            <Text>
                <b>Weapon:</b> {weapon.name}{" "}
            </Text>
            <Text>
                <b>Strength:</b> {weapon.strength}{" "}
            </Text>
            <Button colorScheme="orange" onClick={handleUnequipWeapon}>
                Unequip
            </Button>
        </VStack>
    );
};

const PlayerShieldItem = () => {
    const { gameState, gameCommands } = useGameContext();
    const { player } = gameState;
    const { shield } = player;
    const { addItemToInventory, setPlayerShield } = gameCommands;

    const handleUnequipShield = () => {
        const currentShield = player.shield;
        addItemToInventory(currentShield);
        setPlayerShield(createFist());
    };

    if (shield instanceof Fist) {
        return (
            <VStack align="start" bg="gray.700" p={3} borderRadius={3}>
                <Text>
                    <b>Shield:</b> {shield.name}{" "}
                </Text>
                <Text>
                    <b>Strength:</b> {shield.strength}{" "}
                </Text>
            </VStack>
        );
    }

    return (
        <VStack align="start" bg="gray.700" p={3} borderRadius={3}>
            <Text>
                <b>Shield:</b> {shield.name}{" "}
            </Text>
            <Text>
                <b>Strength:</b> {shield.strength}{" "}
            </Text>
            <Button colorScheme="orange" onClick={handleUnequipShield}>
                Unequip
            </Button>
        </VStack>
    );
};
