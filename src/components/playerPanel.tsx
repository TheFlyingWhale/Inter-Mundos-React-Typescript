import { Heading, Text } from "@chakra-ui/react";
import { useGameContext } from "../context/GameContext";

export const PlayerPanel = () => {
    return (
        <>
            <Heading size="md">Player Information</Heading>
            <PlayerNameItem />
            <PlayerIndexItem />
            <PlayerHealthItem />
            <PlayerThirstItem />
            <PlayerHungerItem />
        </>
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
