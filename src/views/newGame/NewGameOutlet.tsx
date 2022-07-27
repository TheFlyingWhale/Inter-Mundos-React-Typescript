import { Heading, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const NewGameOutlet = () => {
    return (
        <VStack
            maxW="full"
            height="full"
            bg="gray.900"
            justifyContent="center"
            color="purple.50"
            gap={12}
        >
            <Heading size="4xl">New Game</Heading>
            <Outlet />
        </VStack>
    );
};

export default NewGameOutlet;
