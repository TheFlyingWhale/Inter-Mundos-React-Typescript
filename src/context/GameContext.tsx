import React, { ReactNode } from "react";
import { reducer, Action } from "./GameReducer";
import { World } from "../classes/World";

export interface GameStateInterface {
    name: string;
    round: number;
    playerIndex: number;
    world: World;
}

const initialGameState: GameStateInterface = {
    name: "My Game Name",
    round: 0,
    playerIndex: 0,
    world: new World("Placeholder World", 0),
};

interface GameCommands {
    // Game
    setGameName: (name: string) => void;
    advanceRound: () => void;
    startGame: () => void;

    // World
    initializeWorld: () => void;

    // Player
    goForward: () => void;
    goBackward: () => void;
}

export const GameContextProvider = (props: { children: ReactNode }) => {
    const [gameState, dispatch] = React.useReducer(reducer, initialGameState);

    // Game

    const setGameName = (name: string) => {
        dispatch({ type: Action.SET_GAME_NAME, name });
    };

    const advanceRound = () => {
        dispatch({ type: Action.ADVANCE_ROUND });
    };

    const startGame = () => {
        setPlayerIndex(5);
    };

    // World

    const setWorld = (world: World) => {
        dispatch({ type: Action.SET_WORLD, world });
    };

    const initializeWorld = () => {
        const newWorld = new World("World Name", 11);
        newWorld.initialize();
        setWorld(newWorld);
    };

    // Player

    const setPlayerIndex = (index: number) => {
        dispatch({ type: Action.SET_PLAYER_INDEX, index });
    };

    const goForward = () => {
        if (gameState.playerIndex !== gameState.world.size - 1) {
            dispatch({ type: Action.GO_FORWARD });
            advanceRound();
        } else {
            console.log("Can't go forward any further!");
        }
    };

    const goBackward = () => {
        if (gameState.playerIndex !== 0) {
            dispatch({ type: Action.GO_BACKWARD });
            advanceRound();
        } else {
            console.log("You can't go back any further!");
        }
    };

    const gameCommands = {
        // Game
        setGameName,
        advanceRound,
        startGame,

        // World
        initializeWorld,

        //Player
        goForward,
        goBackward,
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
        setGameName: () => {},
        advanceRound: () => {},
        startGame: () => {},

        // World
        initializeWorld: () => {},

        //Player
        goForward: () => {},
        goBackward: () => {},
    },
});

export const useGameContext = () => React.useContext(Context);
