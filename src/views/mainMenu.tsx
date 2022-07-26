import { VStack, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
    const navigate = useNavigate();

    return (
        <VStack
            maxW="full"
            height="full"
            bg="gray.900"
            justifyContent="center"
            color="purple.50"
            gap={12}
        >
            <VStack>
                <Heading size="4xl">Inter Mundos</Heading>
                <Text>Developed by Ole Walberg</Text>
            </VStack>
            <VStack gap={3}>
                <Button
                    colorScheme="purple"
                    onClick={() => navigate("/newGame")}
                    size="lg"
                    w="full"
                >
                    Start New Game
                </Button>
                <Button
                    colorScheme="purple"
                    onClick={() => navigate("devSpace")}
                    size="lg"
                    w="full"
                >
                    Dev Space
                </Button>
            </VStack>
        </VStack>
    );
};

export default MainMenu;
