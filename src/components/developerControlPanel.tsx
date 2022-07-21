import { Heading, VStack, HStack, Button, Grid } from "@chakra-ui/react";
import { useGameContext } from "../context/GameContext";

import {
    createEnemyWithRandomStats,
    createGoat,
    createEnemyBasedOnLevel,
} from "../services/enemyService";
import { createCampaignMap } from "../services/worldService";
import { World } from "../classes/World";

import {
    createItem,
    createHealthPotion,
    createBread,
} from "../services/itemService";

import {
    createEquipment,
    createSword,
    createShield,
} from "../services/equipmentService";

export const DeveloperControlPanel = () => {
    return (
        <>
            <VStack bg="gray.300" p={6} borderRadius={12} alignItems="start">
                <Heading color="gray.600" size="lg">
                    Developer Controls
                </Heading>
                <GameControls />
                <PlayerControls />
                <EnemyControls />
                <CombatControls />
                <ItemControls />
                <EquipmentControls />
            </VStack>
        </>
    );
};

const GameControls = () => {
    const { gameState, gameCommands } = useGameContext();

    return (
        <VStack p={6} borderRadius={6} bg="blue.100" alignItems="start">
            <Heading size="md" color="blue.700">
                Game Controls
            </Heading>
            <HStack>
                <Button
                    colorScheme="blue"
                    onClick={gameCommands.toggleGameOver}
                >
                    toggleGameOver
                </Button>
                <Button colorScheme="blue" onClick={gameCommands.advanceRound}>
                    advance round
                </Button>
                <Button
                    colorScheme="blue"
                    onClick={() => console.log(gameState)}
                >
                    log state
                </Button>
                <Button
                    colorScheme="blue"
                    onClick={gameCommands.initializeWorld}
                >
                    initializeDevWorld
                </Button>
                <Button
                    colorScheme="blue"
                    onClick={() => {
                        gameCommands.setWorld(
                            new World("The world between", 11)
                        );
                        gameCommands.setWorldMap(createCampaignMap());
                    }}
                >
                    initializeCampaignWorld
                </Button>
                <Button colorScheme="blue" onClick={gameCommands.startGame}>
                    Start Game
                </Button>
            </HStack>
        </VStack>
    );
};

const PlayerControls = () => {
    const { gameState, gameCommands } = useGameContext();
    const { world } = gameState;

    const handleRest = () => {
        gameCommands.increasePlayerHealth(50);
        gameCommands.advanceRound();
    };

    const handleGoForward = () => {
        gameCommands.goForward();
    };

    const handleGoBackward = () => {
        gameCommands.goBackward();
    };

    return (
        <VStack p={6} borderRadius={6} bg="green.100" alignItems="start">
            <Heading size="md" color="green.700">
                Player Controls
            </Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <Button
                    colorScheme="green"
                    onClick={() => gameCommands.setPlayerIndex(5)}
                >
                    teleport home
                </Button>
                <Button colorScheme="green" onClick={handleRest}>
                    rest
                </Button>
                <Button
                    colorScheme="green"
                    onClick={() => gameCommands.increasePlayerHunger(25)}
                >
                    eat
                </Button>
                <Button
                    colorScheme="green"
                    onClick={() => gameCommands.increasePlayerThirst(25)}
                >
                    drink
                </Button>
                <Button colorScheme="green" onClick={handleGoBackward}>
                    goEast
                </Button>
                <Button colorScheme="green" onClick={handleGoForward}>
                    goWest
                </Button>
            </Grid>
        </VStack>
    );
};

const EnemyControls = () => {
    const { gameCommands } = useGameContext();

    const handleCreateRandomEnemy = () => {
        const testEnemy = createEnemyWithRandomStats();

        gameCommands.setEnemy(testEnemy);
    };

    const handleCreateGoat = () => {
        const testEnemy = createGoat();
        gameCommands.setEnemy(testEnemy);
    };

    return (
        <VStack p={6} borderRadius={6} bg="orange.100" alignItems="start">
            <Heading size="md" color="orange.700">
                Enemy Controls
            </Heading>
            <HStack>
                <Button colorScheme="orange" onClick={handleCreateRandomEnemy}>
                    createRandomEnemy
                </Button>
                <Button colorScheme="orange" onClick={handleCreateGoat}>
                    createGoat
                </Button>
                <Button
                    colorScheme="orange"
                    onClick={() => gameCommands.setEnemyPlaceHolder()}
                >
                    removeEnemy
                </Button>
            </HStack>
        </VStack>
    );
};

const CombatControls = () => {
    const { gameState, gameCommands } = useGameContext();
    const { player, enemy } = gameState;

    const handleCombat = () => {
        const willEnemyCrit = Math.random() < enemy.critChance / 100;
        const willPlayerCrit = Math.random() < player.critChance / 100;

        const enemyDamage = enemy.attackPower;
        const playerDamage = player.attackPower;

        const calculatedEnemyCrit = Math.floor(
            (enemy.attackPower / enemy.critChance) * 100
        );

        const calculatedPlayerCrit = Math.floor(
            (player.attackPower / player.critChance) * 100
        );

        const totalEnemyDamage =
            enemyDamage + (willEnemyCrit ? calculatedEnemyCrit : 0);
        const totalPlayerDamage =
            playerDamage + (willPlayerCrit ? calculatedPlayerCrit : 0);

        console.clear();
        console.log("- Enemy:");
        console.log("enemyDamage", enemyDamage);
        console.log("willEnemyCrit", willEnemyCrit);
        console.log("calculatedEnemyCritDamage", calculatedEnemyCrit);
        console.log("totalEnemyDamage", totalEnemyDamage);

        console.log("\n- Player");
        console.log("playerDamage", playerDamage);
        console.log("willPlayerCrit", willPlayerCrit);
        console.log("calculatedPlayerDamage", calculatedPlayerCrit);
        console.log("totalPlayerDamage", totalPlayerDamage);

        gameCommands.decreaseEnemyHealth(totalPlayerDamage);
        gameCommands.decreasePlayerHealth(totalEnemyDamage);
    };

    return (
        <VStack p={6} borderRadius={6} bg="red.100" alignItems="start">
            <Heading size="md" color="red.700">
                Combat Controls
            </Heading>
            <HStack>
                <Button colorScheme="red" onClick={handleCombat}>
                    fight
                </Button>
                <Button
                    colorScheme="red"
                    onClick={() => gameCommands.setPlayerHealth(100)}
                >
                    gods breath
                </Button>
            </HStack>
        </VStack>
    );
};

const ItemControls = () => {
    const handleCreateItem = () => {
        const newItem = createItem();
        console.log(newItem);
    };

    const handleCreateHealthPotion = () => {
        const newItem = createHealthPotion();
        console.log(newItem);
    };

    const handleCreateBread = () => {
        const newItem = createBread();
        console.log(newItem);
    };

    return (
        <VStack p={6} borderRadius={6} bg="pink.100" alignItems="start">
            <Heading size="md" color="pink.700">
                Item Controls
            </Heading>
            <HStack>
                <Button colorScheme="pink" onClick={handleCreateItem}>
                    createItem
                </Button>
                <Button colorScheme="pink" onClick={handleCreateHealthPotion}>
                    createHealthPotion
                </Button>
                <Button colorScheme="pink" onClick={handleCreateBread}>
                    createBread
                </Button>
            </HStack>
        </VStack>
    );
};
const EquipmentControls = () => {
    const handleCreateEquipment = () => {
        const newEquipment = createEquipment();
        console.log(newEquipment);
    };

    const handleCreateSword = () => {
        const newEquipment = createSword();
        console.log(newEquipment);
    };

    const handleCreateShield = () => {
        const newEquipment = createShield();
        console.log(newEquipment);
    };

    return (
        <VStack p={6} borderRadius={6} bg="yellow.100" alignItems="start">
            <Heading size="md" color="yellow.700">
                Equipment Controls
            </Heading>
            <HStack>
                <Button colorScheme="yellow" onClick={handleCreateEquipment}>
                    createEquipment
                </Button>
                <Button colorScheme="yellow" onClick={handleCreateSword}>
                    createSword
                </Button>
                <Button colorScheme="yellow" onClick={handleCreateShield}>
                    createShield
                </Button>
            </HStack>
        </VStack>
    );
};
