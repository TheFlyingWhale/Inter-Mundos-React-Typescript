import { GameStateInterface } from "./GameContext";
import { World } from "../classes/World";

export enum Action {
    // Game
    SET_GAME_NAME,
    ADVANCE_ROUND,
    // World
    SET_WORLD,
    //Player
    SET_PLAYER_INDEX,
    GO_FORWARD,
    GO_BACKWARD,
}

export type GameAction =
    // Game
    | { type: Action.SET_GAME_NAME; name: string }
    | { type: Action.ADVANCE_ROUND }
    // World
    | { type: Action.SET_WORLD; world: World }
    // Player
    | { type: Action.SET_PLAYER_INDEX; index: number }
    | { type: Action.GO_FORWARD }
    | { type: Action.GO_BACKWARD };

export const reducer = (state: GameStateInterface, action: GameAction) => {
    switch (action.type) {
        // Game
        case Action.SET_GAME_NAME: {
            return {
                ...state,
                name: action.name,
            };
        }
        case Action.ADVANCE_ROUND: {
            return {
                ...state,
                round: state.round + 1,
            };
        }
        // World
        case Action.SET_WORLD: {
            return {
                ...state,
                world: action.world,
            };
        }
        // Player
        case Action.SET_PLAYER_INDEX: {
            return {
                ...state,
                playerIndex: action.index,
            };
        }
        case Action.GO_FORWARD: {
            return {
                ...state,
                playerIndex: state.playerIndex + 1,
            };
        }
        case Action.GO_BACKWARD: {
            return {
                ...state,
                playerIndex: state.playerIndex - 1,
            };
        }
        default: {
            return state;
        }
    }
};
