import { Heading, VStack, HStack, Text } from '@chakra-ui/react';
import { useGameContext } from './context/GameContext';
import { WorldPanel } from './components/worldPanel';
import { TilePanel } from './components/tilePanel';
import { PlayerPanel } from './components/playerPanel';
import { EnemyPanel } from './components/enemyPanel';
import { DeveloperControlPanel } from './components/developerControlPanel';

function App() {
	const { gameState } = useGameContext();

	return (
		<VStack
			maxW="full"
			bg="gray.100"
			justifyContent="center"
			p={25}
			overflow="scroll"
		>
			<Heading>Inter Mundos - React & Typescript</Heading>
			<HStack>
				<Text>
					<b>Game Name:</b> {gameState.name}
				</Text>
				<Text>
					<b>Game round:</b> {gameState.round}
				</Text>
				<Text>
					<b>Game over:</b> {!gameState.gameOver ? 'Game' : 'Game Over'}
				</Text>
			</HStack>

			<VStack
				bg={gameState.gameOver ? 'red.500' : 'gray.500'}
				p={12}
				borderRadius={12}
				color="white"
			>
				<HStack>
					<WorldPanel />
					<PlayerPanel />
					<TilePanel />
					{gameState.enemy.name !== 'placeholder' && <EnemyPanel />}
				</HStack>
			</VStack>

			<DeveloperControlPanel />
		</VStack>
	);
}

export default App;
