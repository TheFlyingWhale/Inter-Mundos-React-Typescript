import { Heading, VStack, HStack, Text } from "@chakra-ui/react";
import { useGameContext } from "./context/GameContext";
import { TilePanel } from "./components/tilePanel";
import { PlayerPanel } from "./components/playerPanel";
import { DeveloperControlPanel } from "./components/developerControlPanel";

function App() {
    const { gameState } = useGameContext();

    return (
        <VStack
            maxW="full"
            h="full"
            bg="gray.100"
            justifyContent="center"
            p={25}
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

            <VStack bg="gray.500" p={12} borderRadius={12} color="white">
                <HStack>
                    <VStack bg="gray.700" p={6} borderRadius={6}>
                        <Heading size="md">World Information</Heading>
                        <Text>
                            <b>World Size:</b> {gameState.world.size}{" "}
                        </Text>
                    </VStack>
                    <VStack bg="gray.700" p={6} borderRadius={6}>
                        <PlayerPanel />
                    </VStack>
                    <VStack bg="gray.700" p={6} borderRadius={6}>
                        <TilePanel />
                    </VStack>
                </HStack>
            </VStack>

            <DeveloperControlPanel />
        </VStack>
    );
}

export default App;
