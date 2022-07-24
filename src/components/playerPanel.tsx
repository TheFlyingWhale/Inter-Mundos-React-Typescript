import { VStack, Heading, Text } from "@chakra-ui/react";
import { useGameContext } from "../context/GameContext";

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
            <VStack alignItems="start">
                <Heading size="md">Equipment</Heading>
                <PlayerWeaponItem />
                <PlayerShieldItem />
            </VStack>
        );
    }

    return <></>;
};

const PlayerWeaponItem = () => {
    const { gameState } = useGameContext();
    const { player } = gameState;
    const { weapon } = player;

    if (gameState.player) {
        return (
            <>
                <Text>
                    <b>Weapon:</b> {weapon.name}{" "}
                </Text>
                <Text>
                    <b>Strength:</b> {weapon.strength}{" "}
                </Text>
            </>
        );
    }

    return <></>;
};

const PlayerShieldItem = () => {
    const { gameState } = useGameContext();
    const { player } = gameState;
    const { shield } = player;

    if (gameState.player) {
        return (
            <>
                <Text>
                    <b>Shield:</b> {shield.name}{" "}
                </Text>
                <Text>
                    <b>Strength:</b> {shield.strength}{" "}
                </Text>
            </>
        );
    }

    return <></>;
};
