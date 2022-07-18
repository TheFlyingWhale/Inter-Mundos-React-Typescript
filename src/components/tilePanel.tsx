import { useGameContext } from "../context/GameContext";
import { VStack, Heading, Text } from "@chakra-ui/react";

export const TilePanel = () => {
    return (
        <VStack bg="gray.700" p={6} borderRadius={6}>
            <Heading size="md">Tile Information</Heading>
            <TileIndexItem />
            <TileTypeItem />
        </VStack>
    );
};

const TileIndexItem = () => {
    const { gameState } = useGameContext();

    if (gameState.world.map.length) {
        return (
            <Text>
                <b>Index:</b>{" "}
                {gameState.world.map[gameState.player.index].index}{" "}
            </Text>
        );
    }

    return <></>;
};

const TileTypeItem = () => {
    const { gameState } = useGameContext();

    if (gameState.world.map.length) {
        return (
            <Text>
                <b>Type:</b> {gameState.world.map[gameState.player.index].type}{" "}
            </Text>
        );
    }

    return <></>;
};
