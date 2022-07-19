import { Enemy } from "../classes/Enemy";

const createEnemy = (): Enemy => {
    return new Enemy({ name: "Enemy name" });
};

export { createEnemy };
