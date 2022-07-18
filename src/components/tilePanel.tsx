import { useGameContext } from "../context/GameContext";
import { Heading, Text } from "@chakra-ui/react";

export const TilePanel = () => {
    return (
        <>
            <Heading size="md">Tile Information</Heading>
            <TileIndexItem />
            <TileTypeItem />
        </>
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
