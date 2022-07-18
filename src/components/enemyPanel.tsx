import { VStack, Heading, Text } from "@chakra-ui/react";
import { useGameContext } from "../context/GameContext";

export const EnemyPanel = () => {
    return (
        <VStack bg="gray.700" p={6} borderRadius={6}>
            <Heading size="md">Enemy Information</Heading>
            <EnemyNameItem />
            <EnemyHealthItem />
            <EnemyAttackPowerItem />
            <EnemyCriticalChanceItem />
        </VStack>
    );
};

const EnemyNameItem = () => {
    const { gameState } = useGameContext();

    if (gameState.enemy) {
        return (
            <Text>
                <b>Name:</b> {gameState.enemy.name}{" "}
            </Text>
        );
    }

    return <></>;
};

const EnemyHealthItem = () => {
    const { gameState } = useGameContext();

    if (gameState.enemy) {
        return (
            <Text>
                <b>Health:</b> {gameState.enemy.health}{" "}
            </Text>
        );
    }

    return <></>;
};

const EnemyAttackPowerItem = () => {
    const { gameState } = useGameContext();

    if (gameState.enemy) {
        return (
            <Text>
                <b>Attack Power:</b> {gameState.enemy.attackPower}{" "}
            </Text>
        );
    }

    return <></>;
};

const EnemyCriticalChanceItem = () => {
    const { gameState } = useGameContext();

    if (gameState.enemy) {
        return (
            <Text>
                <b>Critical Chance:</b> {gameState.enemy.critChance}{" "}
            </Text>
        );
    }

    return <></>;
};
