import { Heading, VStack, Button, HStack, Text } from "@chakra-ui/react";
import { useGameContext } from "./context/GameContext";
import { TilePanel } from "./components/tilePanel";

function App() {
    const { gameState, gameCommands } = useGameContext();

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
                        <Heading size="md">Player Information</Heading>
                        <Text>
                            <b>Player Index:</b> {gameState.playerIndex}{" "}
                        </Text>
                    </VStack>
                    <VStack bg="gray.700" p={6} borderRadius={6}>
                        <TilePanel />
                    </VStack>
                </HStack>
            </VStack>

            <HStack bg="gray.300" p={6} borderRadius={6}>
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
                    initializeWorld
                </Button>
                <Button colorScheme="blue" onClick={gameCommands.startGame}>
                    Start Game
                </Button>
            </HStack>
            <HStack bg="gray.300" p={6} borderRadius={6}>
                <Button colorScheme="green" onClick={gameCommands.goBackward}>
                    goBackwards
                </Button>
                <Button colorScheme="green" onClick={gameCommands.goForward}>
                    goForward
                </Button>
            </HStack>
        </VStack>
    );
}

export default App;
