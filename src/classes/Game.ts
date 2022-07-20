export class Game {
	public name: string;
	public round: number;
	public gameOver: boolean;

	constructor({
		name = 'Game name',
		round = 0,
		gameOver = false,
	}: {
		name: string;
		round?: number;
		gameOver?: boolean;
	}) {
		this.name = name;
		this.round = round;
		this.gameOver = gameOver;
	}
}
