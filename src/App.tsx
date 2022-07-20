import React from "react";
import { Heading, VStack, HStack, Text } from "@chakra-ui/react";
import { useGameContext } from "./context/GameContext";
import { WorldPanel } from "./components/worldPanel";
import { TilePanel } from "./components/tilePanel";
import { PlayerPanel } from "./components/playerPanel";
import { EnemyPanel } from "./components/enemyPanel";
import { DeveloperControlPanel } from "./components/developerControlPanel";
import { Enemy } from "./classes/Enemy";
import { createEnemyBasedOnLevel } from "./services/enemyService";

function App() {
    const { gameState, gameCommands } = useGameContext();
    const { player, enemy, world } = gameState;
    const { map } = world;

    React.useEffect(() => {
        const tile = map[player.index];
        if (tile) {
            if (tile.containsEnemy) {
                const tile = map[player.index];
                const tileType = tile.type;
                const enemyLevel = tile.difficultyLevel;
                const enemyName = tile.enemyName;

                const newEnemy = createEnemyBasedOnLevel({
                    tileType: tileType,
                    level: enemyLevel,
                    name: enemyName,
                });
                gameCommands.setEnemy(newEnemy);
            }
        }
    }, [player.index]);

    const currentTile = map[player.index];
    const doesCurrentTileContainEnemy = () => {
        return currentTile !== undefined && currentTile.containsEnemy;
    };

    return (
        <VStack
            maxW="full"
            bg="gray.100"
            justifyContent="center"
            p={25}
            overflow="scroll"
        >
            <Heading>Inter Mundos - React & Typescript</Heading>
            <HStack>
                <Text>
                    <b>Game Name:</b> {gameState.name}
                </Text>
                <Text>
                    <b>Game round:</b> {gameState.round}
                </Text>
                <Text>
                    <b>Game over:</b>{" "}
                    {!gameState.gameOver ? "Game" : "Game Over"}
                </Text>
            </HStack>

            <VStack
                bg={gameState.gameOver ? "red.500" : "gray.500"}
                p={12}
                borderRadius={12}
                color="white"
            >
                <HStack>
                    <WorldPanel />
                    <PlayerPanel />
                    {map.length && <TilePanel />}
                    {enemy.name !== "placeholder" &&
                        doesCurrentTileContainEnemy() && <EnemyPanel />}
                </HStack>
            </VStack>

            <DeveloperControlPanel />
        </VStack>
    );
}

export default App;
