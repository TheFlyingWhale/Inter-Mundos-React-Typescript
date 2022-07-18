import { useGameContext } from "../context/GameContext";
import { VStack, Heading, Text } from "@chakra-ui/react";

export const WorldPanel = () => {
    return (
        <VStack bg="gray.700" p={6} borderRadius={6}>
            <Heading size="md">World Information</Heading>
            <WorldNameItem />
            <WorldSizeItem />
        </VStack>
    );
};

const WorldNameItem = () => {
    const { gameState } = useGameContext();

    return (
        <Text>
            <b>World Name:</b> {gameState.world.name}{" "}
        </Text>
    );
};

const WorldSizeItem = () => {
    const { gameState } = useGameContext();

    return (
        <Text>
            <b>World Size:</b> {gameState.world.size}{" "}
        </Text>
    );
};
