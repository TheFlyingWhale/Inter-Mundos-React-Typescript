import { EnemyType } from './Enemy';

export type TileType =
	| 'plains'
	| 'jungle'
	| 'forest'
	| 'mountain'
	| 'desert'
	| 'lake'
	| 'river'
	| 'swamp'
	| 'cave'
	| 'temple'
	| 'base';

export class Tile {
	public id: string;
	public name: string;
	public index: number;
	public type: TileType;
	public enemy: EnemyType | undefined;

	constructor({
		id,
		name = 'tile name',
		index,
		type = 'plains',
		enemy = undefined,
	}: {
		id: string;
		name?: string;
		index: number;
		type?: TileType;
		enemy?: EnemyType | undefined;
	}) {
		this.id = id;
		this.name = name;
		this.index = index;
		this.type = type;
		this.enemy = enemy;
	}
}
