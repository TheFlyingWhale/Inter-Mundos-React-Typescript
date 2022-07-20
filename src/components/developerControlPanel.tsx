import { Heading, VStack, HStack, Button, Grid } from '@chakra-ui/react';
import { useGameContext } from '../context/GameContext';
import {
	createEnemyWithRandomStats,
	createGoat,
} from '../services/enemyService';

export const DeveloperControlPanel = () => {
	return (
		<>
			<VStack bg="gray.300" p={6} borderRadius={12} alignItems="start">
				<Heading color="gray.600" size="lg">
					Developer Controls
				</Heading>
				<GameControls />
				<PlayerControls />
				<EnemyControls />
				<CombatControls />
			</VStack>
		</>
	);
};

const GameControls = () => {
	const { gameState, gameCommands } = useGameContext();

	return (
		<VStack p={6} borderRadius={6} bg="blue.100" alignItems="start">
			<Heading size="md" color="blue.700">
				Game Controls
			</Heading>
			<HStack>
				<Button colorScheme="blue" onClick={gameCommands.toggleGameOver}>
					toggleGameOver
				</Button>
				<Button colorScheme="blue" onClick={gameCommands.advanceRound}>
					advance round
				</Button>
				<Button colorScheme="blue" onClick={() => console.log(gameState)}>
					log state
				</Button>
				<Button colorScheme="blue" onClick={gameCommands.initializeWorld}>
					initializeWorld
				</Button>
				<Button colorScheme="blue" onClick={gameCommands.startGame}>
					Start Game
				</Button>
			</HStack>
		</VStack>
	);
};

const PlayerControls = () => {
	const { gameCommands } = useGameContext();

	const handleRest = () => {
		gameCommands.increasePlayerHealth(50);
		gameCommands.advanceRound();
	};

	const handleGoForward = () => {
		gameCommands.goForward();
	};

	const handleGoBackward = () => {
		gameCommands.goBackward();
	};

	return (
		<VStack p={6} borderRadius={6} bg="green.100" alignItems="start">
			<Heading size="md" color="green.700">
				Player Controls
			</Heading>
			<Grid templateColumns="repeat(4, 1fr)" gap={6}>
				<Button
					colorScheme="green"
					onClick={() => gameCommands.setPlayerIndex(5)}
				>
					teleport home
				</Button>
				<Button colorScheme="green" onClick={handleRest}>
					rest
				</Button>
				<Button
					colorScheme="green"
					onClick={() => gameCommands.increasePlayerHunger(25)}
				>
					eat
				</Button>
				<Button
					colorScheme="green"
					onClick={() => gameCommands.increasePlayerThirst(25)}
				>
					drink
				</Button>
				<Button colorScheme="green" onClick={handleGoBackward}>
					goBackwards
				</Button>
				<Button colorScheme="green" onClick={handleGoForward}>
					goForward
				</Button>
			</Grid>
		</VStack>
	);
};

const EnemyControls = () => {
	const { gameCommands } = useGameContext();

	const handleCreateRandomEnemy = () => {
		const newEnemy = createEnemyWithRandomStats();
		gameCommands.setEnemy(newEnemy);
	};

	const handleCreateGoat = () => {
		const newGoat = createGoat();
		gameCommands.setEnemy(newGoat);
	};

	return (
		<VStack p={6} borderRadius={6} bg="orange.100" alignItems="start">
			<Heading size="md" color="orange.700">
				Enemy Controls
			</Heading>
			<HStack>
				<Button colorScheme="orange" onClick={handleCreateRandomEnemy}>
					createRandomEnemy
				</Button>
				<Button colorScheme="orange" onClick={handleCreateGoat}>
					createGoat
				</Button>
				<Button
					colorScheme="orange"
					onClick={() => gameCommands.setEnemyPlaceHolder()}
				>
					removeEnemy
				</Button>
			</HStack>
		</VStack>
	);
};

const CombatControls = () => {
	const { gameState, gameCommands } = useGameContext();
	const { player, enemy } = gameState;

	const handleCombat = () => {
		const willEnemyCrit = Math.random() < enemy.critChance / 100;
		const willPlayerCrit = Math.random() < player.critChance / 100;

		const enemyDamage = enemy.attackPower;
		const playerDamage = player.attackPower;

		const calculatedEnemyCrit = Math.floor(
			(enemy.attackPower / enemy.critChance) * 100
		);

		const calculatedPlayerCrit = Math.floor(
			(player.attackPower / player.critChance) * 100
		);

		const totalEnemyDamage =
			enemyDamage + (willEnemyCrit ? calculatedEnemyCrit : 0);
		const totalPlayerDamage =
			playerDamage + (willPlayerCrit ? calculatedPlayerCrit : 0);

		console.clear();
		console.log('- Enemy:');
		console.log('enemyDamage', enemyDamage);
		console.log('willEnemyCrit', willEnemyCrit);
		console.log('calculatedEnemyCritDamage', calculatedEnemyCrit);
		console.log('totalEnemyDamage', totalEnemyDamage);

		console.log('\n- Player');
		console.log('playerDamage', playerDamage);
		console.log('willPlayerCrit', willPlayerCrit);
		console.log('calculatedPlayerDamage', calculatedPlayerCrit);
		console.log('totalPlayerDamage', totalPlayerDamage);

		gameCommands.decreaseEnemyHealth(totalPlayerDamage);
		gameCommands.decreasePlayerHealth(totalEnemyDamage);
	};

	return (
		<VStack p={6} borderRadius={6} bg="red.100" alignItems="start">
			<Heading size="md" color="red.700">
				Combat Controls
			</Heading>
			<HStack>
				<Button colorScheme="red" onClick={handleCombat}>
					fight
				</Button>
				<Button
					colorScheme="red"
					onClick={() => gameCommands.setPlayerHealth(100)}
				>
					gods breath
				</Button>
			</HStack>
		</VStack>
	);
};
