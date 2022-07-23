import { GameStateInterface } from "./GameContext";
import { World } from "../classes/World";
import { Player } from "../classes/Player";
import { Enemy } from "../classes/Enemy";
import { Tile } from "../classes/Tile";
import { ItemTypes } from "../classes/Item";

export enum Action {
    // Game
    TOGGLE_GAME_OVER,
    SET_GAME_OVER,
    SET_GAME_NAME,
    ADVANCE_ROUND,

    // World
    SET_WORLD,
    SET_WORLD_NAME,
    SET_WORLD_MAP,

    // Player
    SET_PLAYER,
    SET_PLAYER_INDEX,
    SET_PLAYER_NAME,
    // Player - Health
    SET_PLAYER_HEALTH,
    INCREASE_PLAYER_HEALTH,
    DECREASE_PLAYER_HEALTH,
    // Player - Thirst
    SET_PLAYER_THIRST,
    INCREASE_PLAYER_THIRST,
    DECREASE_PLAYER_THIRST,
    // Player - Hunger
    SET_PLAYER_HUNGER,
    INCREASE_PLAYER_HUNGER,
    DECREASE_PLAYER_HUNGER,
    // Player - Energy
    SET_PLAYER_ENERGY,
    INCREASE_PLAYER_ENERGY,
    DECREASE_PLAYER_ENERGY,
    // Player - Inventory
    ADD_ITEM_TO_INVENTORY,
    REMOVE_ITEM_FROM_INVENTORY,
    // Player - Movement
    GO_FORWARD,
    GO_BACKWARD,

    // Enemy
    SET_ENEMY,
    SET_ENEMY_HEALTH,
    INCREASE_ENEMY_HEALTH,
    DECREASE_ENEMY_HEALTH,
}

export type GameAction =
    // Game
    | { type: Action.TOGGLE_GAME_OVER }
    | { type: Action.SET_GAME_OVER; gameOver: boolean }
    | { type: Action.SET_GAME_NAME; name: string }
    | { type: Action.ADVANCE_ROUND }

    // World
    | { type: Action.SET_WORLD; world: World }
    | { type: Action.SET_WORLD_NAME; name: string }
    | { type: Action.SET_WORLD_MAP; map: Tile[] }

    // Player
    | { type: Action.SET_PLAYER; player: Player }
    | { type: Action.SET_PLAYER_INDEX; index: number }
    | { type: Action.SET_PLAYER_NAME; name: string }
    // Player - Health
    | { type: Action.SET_PLAYER_HEALTH; health: number }
    | { type: Action.INCREASE_PLAYER_HEALTH; amount: number }
    | { type: Action.DECREASE_PLAYER_HEALTH; amount: number }
    // Player - Thirst
    | { type: Action.SET_PLAYER_THIRST; thirst: number }
    | { type: Action.INCREASE_PLAYER_THIRST; amount: number }
    | { type: Action.DECREASE_PLAYER_THIRST; amount: number }
    // Player - Hunger
    | { type: Action.SET_PLAYER_HUNGER; hunger: number }
    | { type: Action.INCREASE_PLAYER_HUNGER; amount: number }
    | { type: Action.DECREASE_PLAYER_HUNGER; amount: number }
    // Player - Energy
    | { type: Action.SET_PLAYER_ENERGY; energy: number }
    | { type: Action.INCREASE_PLAYER_ENERGY; amount: number }
    | { type: Action.DECREASE_PLAYER_ENERGY; amount: number }
    // Player - Inventory
    | { type: Action.ADD_ITEM_TO_INVENTORY; item: ItemTypes }
    | { type: Action.REMOVE_ITEM_FROM_INVENTORY; id: string }
    // Player - Movement
    | { type: Action.GO_FORWARD }
    | { type: Action.GO_BACKWARD }

    // ENEMY
    | { type: Action.SET_ENEMY; enemy: Enemy }
    | { type: Action.SET_ENEMY_HEALTH; health: number }
    | { type: Action.INCREASE_ENEMY_HEALTH; amount: number }
    | { type: Action.DECREASE_ENEMY_HEALTH; amount: number };

export const reducer = (state: GameStateInterface, action: GameAction) => {
    switch (action.type) {
        // Game ---------------------------------------------------------------------------------------------------------

        case Action.TOGGLE_GAME_OVER: {
            return { ...state, gameOver: !state.gameOver };
        }

        case Action.SET_GAME_OVER: {
            return { ...state, gameOver: action.gameOver };
        }

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

        // World ---------------------------------------------------------------------------------------------------------

        case Action.SET_WORLD: {
            return {
                ...state,
                world: action.world,
            };
        }

        case Action.SET_WORLD_NAME: {
            return {
                ...state,
                world: {
                    ...state.world,
                    name: action.name,
                },
            };
        }

        case Action.SET_WORLD_MAP: {
            return {
                ...state,
                world: {
                    ...state.world,
                    map: action.map,
                },
            };
        }

        // Player ---------------------------------------------------------------------------------------------------------

        case Action.SET_PLAYER: {
            return {
                ...state,
                player: action.player,
            };
        }

        case Action.SET_PLAYER_INDEX: {
            return {
                ...state,
                player: {
                    ...state.player,
                    index: action.index,
                },
            };
        }

        case Action.SET_PLAYER_NAME: {
            return {
                ...state,
                player: {
                    ...state.player,
                    name: action.name,
                },
            };
        }

        // Player - Health ---------------------------------------------------------------------------------------------------------

        case Action.SET_PLAYER_HEALTH: {
            return {
                ...state,
                player: {
                    ...state.player,
                    health: action.health,
                },
            };
        }

        case Action.INCREASE_PLAYER_HEALTH: {
            return {
                ...state,
                player: {
                    ...state.player,
                    health: state.player.health + action.amount,
                },
            };
        }

        case Action.DECREASE_PLAYER_HEALTH: {
            return {
                ...state,
                player: {
                    ...state.player,
                    health: state.player.health - action.amount,
                },
            };
        }

        // Player - Thirst ---------------------------------------------------------------------------------------------------------

        case Action.SET_PLAYER_THIRST: {
            return {
                ...state,
                player: {
                    ...state.player,
                    thirst: action.thirst,
                },
            };
        }

        case Action.INCREASE_PLAYER_THIRST: {
            return {
                ...state,
                player: {
                    ...state.player,
                    thirst: state.player.thirst + action.amount,
                },
            };
        }

        case Action.DECREASE_PLAYER_THIRST: {
            return {
                ...state,
                player: {
                    ...state.player,
                    thirst: state.player.thirst - action.amount,
                },
            };
        }

        // Player - Hunger ---------------------------------------------------------------------------------------------------------

        case Action.SET_PLAYER_HUNGER: {
            return {
                ...state,
                player: {
                    ...state.player,
                    hunger: action.hunger,
                },
            };
        }

        case Action.INCREASE_PLAYER_HUNGER: {
            return {
                ...state,
                player: {
                    ...state.player,
                    hunger: state.player.hunger + action.amount,
                },
            };
        }

        case Action.DECREASE_PLAYER_HUNGER: {
            return {
                ...state,
                player: {
                    ...state.player,
                    hunger: state.player.hunger - action.amount,
                },
            };
        }

        // Player - Energy ---------------------------------------------------------------------------------------------------------

        case Action.SET_PLAYER_ENERGY: {
            return {
                ...state,
                player: {
                    ...state.player,
                    energy: action.energy,
                },
            };
        }

        case Action.INCREASE_PLAYER_ENERGY: {
            return {
                ...state,
                player: {
                    ...state.player,
                    energy: state.player.energy + action.amount,
                },
            };
        }

        case Action.DECREASE_PLAYER_ENERGY: {
            return {
                ...state,
                player: {
                    ...state.player,
                    energy: state.player.energy - action.amount,
                },
            };
        }

        // Player - Inventory ---------------------------------------------------------------------------------------------------------

        case Action.ADD_ITEM_TO_INVENTORY: {
            return {
                ...state,
                player: {
                    ...state.player,
                    inventory: [...state.player.inventory, action.item],
                },
            };
        }

        case Action.REMOVE_ITEM_FROM_INVENTORY: {
            return {
                ...state,
                player: {
                    ...state.player,
                    inventory: state.player.inventory.filter(
                        (item) => item.id !== action.id
                    ),
                },
            };
        }

        // Player - Movement ---------------------------------------------------------------------------------------------------------

        case Action.GO_FORWARD: {
            return {
                ...state,
                player: {
                    ...state.player,
                    index: state.player.index + 1,
                },
            };
        }

        case Action.GO_BACKWARD: {
            return {
                ...state,
                player: {
                    ...state.player,
                    index: state.player.index - 1,
                },
            };
        }

        // Enemy ---------------------------------------------------------------------------------------------------------

        case Action.SET_ENEMY: {
            return {
                ...state,
                enemy: action.enemy,
            };
        }

        case Action.SET_ENEMY_HEALTH: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    health: action.health,
                },
            };
        }

        case Action.INCREASE_ENEMY_HEALTH: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    health: state.enemy.health + action.amount,
                },
            };
        }

        case Action.DECREASE_ENEMY_HEALTH: {
            return {
                ...state,
                enemy: {
                    ...state.enemy,
                    health: state.enemy.health - action.amount,
                },
            };
        }

        default: {
            return state;
        }
    }
};
