import {
    HStack,
    VStack,
    Text,
    Heading,
    Button,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { useGameContext } from "../../context/GameContext";

const StarterItems = () => {
    const { gameState } = useGameContext();
    const { player } = gameState;

    return (
        <VStack>
            <Text>Pick {player.name}s starter gear:</Text>
            <HStack>
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                    <GearCollectionItem
                        title="Warrior"
                        items={["Wooden Sword", "Wooden Shield"]}
                    />
                    <GearCollectionItem
                        title="Priest"
                        items={["5 Healing potions", "5 Energy potions"]}
                    />
                    <GearCollectionItem
                        title="Farmer"
                        items={["Water", "Bread"]}
                    />
                </Grid>
            </HStack>
        </VStack>
    );
};

interface GearCollectionProps {
    title: string;
    items: string[];
}

const GearCollectionItem: React.FC<GearCollectionProps> = ({
    title,
    items,
}) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <GridItem>
            <VStack
                bg="gray.700"
                p={6}
                borderRadius={6}
                h="full"
                justifyContent="space-between"
                gap={3}
                outline={isHovering ? "2px solid #553C9A" : "none"}
            >
                <Heading size="md">{title}</Heading>
                <VStack w="full">
                    {items.map((item) => (
                        <Text>{item}</Text>
                    ))}
                </VStack>
                <Button
                    colorScheme="purple"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    pick
                </Button>
            </VStack>
        </GridItem>
    );
};

export default StarterItems;
