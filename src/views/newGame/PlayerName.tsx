import React, { useState } from "react";
import { VStack, Text, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/GameContext";

const PlayerName = () => {
    const { gameCommands } = useGameContext();
    const { setPlayerName } = gameCommands;

    const [playerNameInput, setPlayerNameInput] = useState("");

    const navigate = useNavigate();
    const handleNext = () => {
        setPlayerName(playerNameInput);
        navigate("starterItem");
    };

    return (
        <VStack gap={3} minW="250px">
            <VStack align="start" w="full">
                <Text>Player Name:</Text>
                <Input
                    bg="gray.800"
                    placeholder="What should your name be?"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPlayerNameInput(e.target.value)
                    }
                />
            </VStack>
            <Button
                disabled={playerNameInput.length > 0 ? false : true}
                colorScheme="purple"
                w="full"
                className="fadeInFirst"
                onClick={handleNext}
            >
                Next
            </Button>
        </VStack>
    );
};

export default PlayerName;
