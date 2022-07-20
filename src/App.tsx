import React, { useEffect } from 'react';
import { Heading, VStack, HStack, Text } from '@chakra-ui/react';
import { useGameContext } from './context/GameContext';
import { WorldPanel } from './components/worldPanel';
import { TilePanel } from './components/tilePanel';
import { PlayerPanel } from './components/playerPanel';
import { EnemyPanel } from './components/enemyPanel';
import { DeveloperControlPanel } from './components/developerControlPanel';
import { Tile } from './classes/Tile';
import { Enemy } from './classes/Enemy';

function App() {
	const { gameState, gameCommands } = useGameContext();
	const { world, player } = gameState;
	const { map } = world;

	const doesTileContainEnemy = (tile: Tile) => {
		return tile !== undefined;
	};

	useEffect(() => {
		const tile = map[player.index];
		if (doesTileContainEnemy(tile)) {
			const enemy = tile.enemy;
			if (enemy) {
				gameCommands.setEnemy(enemy);
			} else {
				gameCommands.setEnemy(new Enemy({ name: 'placeholder' }));
			}
		}
	}, [gameState.player.index]);

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
					{gameState.world.map.length && <TilePanel />}
					{doesTileContainEnemy(map[gameState.player.index]) &&
						map[gameState.player.index].enemy && <EnemyPanel />}
				</HStack>
			</VStack>

			<DeveloperControlPanel />
		</VStack>
	);
}

export default App;
