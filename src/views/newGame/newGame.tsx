import React, { useState } from "react";
import { VStack, HStack, Heading, Text, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const PlayerName = () => {
    const [playerName, setPlayerName] = useState("");

    const navigate = useNavigate();

    return (
        <VStack gap={3} minW="250px">
            <VStack align="start" w="full">
                <Text>Player Name:</Text>
                <Input
                    bg="gray.800"
                    placeholder="What should your name be?"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPlayerName(e.target.value)
                    }
                />
            </VStack>
            <Button
                disabled={playerName.length > 0 ? false : true}
                colorScheme="purple"
                w="full"
                className="fadeInFirst"
                onClick={() => navigate("starterItem")}
            >
                Next
            </Button>
        </VStack>
    );
};

export const StarterItem = () => {
    return (
        <VStack>
            <Text>Pick your starter gear:</Text>
            <HStack>
                <VStack
                    bg="gray.700"
                    p={6}
                    borderRadius={6}
                    h="full"
                    justifyContent="space-between"
                >
                    <Heading size="md">Warrior</Heading>
                    <VStack align="start">
                        <Text>Wooden Sword</Text>
                        <Text>Wooden Shield</Text>
                    </VStack>
                    <Button colorScheme="purple">pick</Button>
                </VStack>
                <VStack
                    bg="gray.700"
                    p={6}
                    borderRadius={6}
                    h="full"
                    justifyContent="space-between"
                >
                    <Heading size="md">Priest</Heading>
                    <VStack align="start">
                        <Text>Holy Water</Text>
                        <Text>Bread</Text>
                    </VStack>
                    <Button colorScheme="purple">pick</Button>
                </VStack>
                <VStack
                    bg="gray.700"
                    p={6}
                    borderRadius={6}
                    h="full"
                    justifyContent="space-between"
                >
                    <Heading size="md">Priest</Heading>
                    <VStack align="start">
                        <Text>Holy Water</Text>
                        <Text>Bread</Text>
                    </VStack>
                    <Button colorScheme="purple">pick</Button>
                </VStack>
            </HStack>
        </VStack>
    );
};
