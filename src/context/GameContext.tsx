import React, { ReactNode } from 'react';
import { reducer, Action } from './GameReducer';
import { World } from '../classes/World';
import { Tile } from '../classes/Tile';
import { Player } from '../classes/Player';
import { Enemy } from '../classes/Enemy';

import { createRandomWorldMap } from '../services/worldService';

export interface GameStateInterface {
	name: string;
	round: number;
	gameOver: boolean;
	player: Player;
	world: World;
	enemy: Enemy;
}

const initialGameState: GameStateInterface = {
	name: 'My Game Name',
	round: 0,
	gameOver: false,
	player: new Player('Player 1'),
	world: new World('Placeholder World', 0),
	enemy: new Enemy({ name: 'placeholder' }),
};

interface GameCommands {
	// Game
	toggleGameOver: () => void;
	setGameOver: (gameOver: boolean) => void;
	setGameName: (name: string) => void;
	advanceRound: () => void;
	startGame: () => void;

	// World
	initializeWorld: () => void;
	setWorldMap: (map: Tile[]) => void;

	// Player
	setPlayer: (player: Player) => void;
	setPlayerIndex: (index: number) => void;
	setPlayerName: (name: string) => void;
	setPlayerHealth: (health: number) => void;
	increasePlayerHealth: (amount: number) => void;
	decreasePlayerHealth: (amount: number) => void;
	increasePlayerThirst: (amount: number) => void;
	decreasePlayerThirst: (amount: number) => void;
	increasePlayerHunger: (amount: number) => void;
	decreasePlayerHunger: (amount: number) => void;
	goForward: () => void;
	goBackward: () => void;

	// Enemy
	setEnemy: (enemy: Enemy) => void;
	setEnemyPlaceHolder: () => void;
	setEnemyHealth: (health: number) => void;
	increaseEnemyHealth: (amount: number) => void;
	decreaseEnemyHealth: (amount: number) => void;
}

export const GameContextProvider = (props: { children: ReactNode }) => {
	const [gameState, dispatch] = React.useReducer(reducer, initialGameState);

	// Game ---------------------------------------------------------------------------------------------------------

	const toggleGameOver = () => {
		dispatch({ type: Action.TOGGLE_GAME_OVER });
	};

	const setGameOver = (gameOver: boolean) => {
		dispatch({ type: Action.SET_GAME_OVER, gameOver });
	};

	const setGameName = (name: string) => {
		dispatch({ type: Action.SET_GAME_NAME, name });
	};

	const advanceRound = () => {
		decreasePlayerHunger(10);
		if (gameState.player.hunger === 0) {
			decreasePlayerHealth(5);
		}

		decreasePlayerThirst(10);
		if (gameState.player.thirst === 0) {
			decreasePlayerHealth(5);
		}

		dispatch({ type: Action.ADVANCE_ROUND });
	};

	const startGame = () => {
		setPlayerIndex(5);
	};

	// World ---------------------------------------------------------------------------------------------------------

	const setWorld = (world: World) => {
		dispatch({ type: Action.SET_WORLD, world });
	};

	const initializeWorld = () => {
		const mapSize = 11;
		const newWorld = new World('World Name', mapSize);
		setWorld(newWorld);
		setWorldMap(createRandomWorldMap(mapSize));
	};

	const setWorldMap = (map: Tile[]) => {
		dispatch({ type: Action.SET_WORLD_MAP, map });
	};

	// Player ---------------------------------------------------------------------------------------------------------

	const setPlayer = (player: Player) => {};

	const setPlayerIndex = (index: number) => {
		if (index >= 0 && index < gameState.world.size) {
			dispatch({ type: Action.SET_PLAYER_INDEX, index });
		} else {
			console.log('Given index is out of range');
		}
	};

	const setPlayerName = (name: string) => {
		dispatch({ type: Action.SET_PLAYER_NAME, name });
	};

	const setPlayerHealth = (health: number) => {
		dispatch({ type: Action.SET_PLAYER_HEALTH, health });
	};

	const increasePlayerHealth = (amount: number) => {
		if (gameState.player.health + amount > 100) {
			dispatch({ type: Action.SET_PLAYER_HEALTH, health: 100 });
		} else {
			dispatch({ type: Action.INCREASE_PLAYER_HEALTH, amount });
		}
	};

	const decreasePlayerHealth = (amount: number) => {
		if (gameState.player.health - amount <= 0) {
			setGameOver(true);
			dispatch({ type: Action.SET_PLAYER_HEALTH, health: 0 });
		} else {
			dispatch({ type: Action.DECREASE_PLAYER_HEALTH, amount });
		}
	};

	const increasePlayerThirst = (amount: number) => {
		if (gameState.player.thirst + amount > 100) {
			dispatch({ type: Action.SET_PLAYER_THIRST, thirst: 100 });
		} else {
			dispatch({ type: Action.INCREASE_PLAYER_THIRST, amount });
		}
	};

	const decreasePlayerThirst = (amount: number) => {
		if (gameState.player.thirst - amount < 0) {
			dispatch({ type: Action.SET_PLAYER_THIRST, thirst: 0 });
		} else {
			dispatch({ type: Action.DECREASE_PLAYER_THIRST, amount });
		}
	};

	const increasePlayerHunger = (amount: number) => {
		if (gameState.player.hunger + amount > 100) {
			dispatch({ type: Action.SET_PLAYER_HUNGER, hunger: 100 });
		} else {
			dispatch({ type: Action.INCREASE_PLAYER_HUNGER, amount });
		}
	};

	const decreasePlayerHunger = (amount: number) => {
		if (gameState.player.hunger - amount < 0) {
			dispatch({ type: Action.SET_PLAYER_HUNGER, hunger: 0 });
		} else {
			dispatch({ type: Action.DECREASE_PLAYER_HUNGER, amount });
		}
	};

	const goForward = () => {
		if (gameState.player.index !== gameState.world.size - 1) {
			dispatch({ type: Action.GO_FORWARD });
			advanceRound();
		} else {
			console.log("Can't go forward any further!");
		}
	};

	const goBackward = () => {
		if (gameState.player.index !== 0) {
			dispatch({ type: Action.GO_BACKWARD });
			advanceRound();
		} else {
			console.log("You can't go back any further!");
		}
	};

	// Enemy ---------------------------------------------------------------------------------------------------------

	const setEnemy = (enemy: Enemy) => {
		dispatch({ type: Action.SET_ENEMY, enemy });
	};

	const setEnemyPlaceHolder = () => {
		const enemy = new Enemy({ name: 'placeholder' });
		setEnemy(enemy);
	};

	const setEnemyHealth = (health: number) => {
		dispatch({ type: Action.SET_ENEMY_HEALTH, health });
	};

	const increaseEnemyHealth = (amount: number) => {
		if (gameState.enemy.health + amount > 100) {
			setEnemyHealth(100);
		} else {
			dispatch({ type: Action.INCREASE_ENEMY_HEALTH, amount });
		}
	};

	const decreaseEnemyHealth = (amount: number) => {
		if (gameState.enemy.health - amount <= 0) {
			setEnemyHealth(0);
		} else {
			dispatch({ type: Action.DECREASE_ENEMY_HEALTH, amount });
		}
	};

	const gameCommands = {
		// Game
		toggleGameOver,
		setGameOver,
		setGameName,
		advanceRound,
		startGame,

		// World
		initializeWorld,
		setWorldMap,

		//Player
		setPlayer,
		setPlayerIndex,
		setPlayerName,
		setPlayerHealth,
		increasePlayerHealth,
		decreasePlayerHealth,
		increasePlayerThirst,
		decreasePlayerThirst,
		increasePlayerHunger,
		decreasePlayerHunger,
		goForward,
		goBackward,

		// Enemy
		setEnemy,
		setEnemyPlaceHolder,
		setEnemyHealth,
		increaseEnemyHealth,
		decreaseEnemyHealth,
	};

	return (
		<Context.Provider
			value={{
				gameState,
				gameCommands,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

interface GameContextInterface {
	gameState: GameStateInterface;
	gameCommands: GameCommands;
}

const Context = React.createContext<GameContextInterface>({
	gameState: initialGameState,
	gameCommands: {
		//Game
		toggleGameOver: () => {},
		setGameOver: () => {},
		setGameName: () => {},
		advanceRound: () => {},
		startGame: () => {},

		// World
		initializeWorld: () => {},
		setWorldMap: () => {},

		//Player
		setPlayer: () => {},
		setPlayerIndex: () => {},
		setPlayerName: () => {},
		setPlayerHealth: () => {},
		increasePlayerHealth: () => {},
		decreasePlayerHealth: () => {},
		increasePlayerThirst: () => {},
		decreasePlayerThirst: () => {},
		increasePlayerHunger: () => {},
		decreasePlayerHunger: () => {},
		goForward: () => {},
		goBackward: () => {},

		// Enemy
		setEnemy: () => {},
		setEnemyPlaceHolder: () => {},
		setEnemyHealth: () => {},
		increaseEnemyHealth: () => {},
		decreaseEnemyHealth: () => {},
	},
});

export const useGameContext = () => React.useContext(Context);
