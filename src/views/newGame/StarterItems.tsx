import { HStack, VStack, Text, Heading, Button } from "@chakra-ui/react";
import { useGameContext } from "../../context/GameContext";

const StarterItems = () => {
    const { gameState } = useGameContext();
    const { player } = gameState;

    return (
        <VStack>
            <Text>Pick {player.name}'s starter gear:</Text>
            <HStack>
                <VStack
                    bg="gray.700"
                    p={6}
                    borderRadius={6}
                    h="full"
                    justifyContent="space-between"
                >
                    <Heading size="md">Warrior</Heading>
                    <VStack align="start" w="full">
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
                    <VStack align="start" w="full">
                        <Text>5 Healing potions</Text>
                        <Text>5 Energy potions</Text>
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
                    <Heading size="md">Farmer</Heading>
                    <VStack align="start" w="full">
                        <Text>Water</Text>
                        <Text>Bread</Text>
                    </VStack>
                    <Button colorScheme="purple">pick</Button>
                </VStack>
            </HStack>
        </VStack>
    );
};

export default StarterItems;
