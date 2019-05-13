/// <reference types="node" />

declare module 'entity-adapter' {
	export interface EntityState<T> {
		ids: string[];
		entities: T[];
	}

	export class EntityAdapter<T> {
		constructor();

		public getInitialState(): EntityState<T>;
		public getOne(id: string, state: EntityState<T>): T;
		public getAll(state: EntityState<T>): T[];
		public addOne(element: T, state: EntityState<T>): EntityState<T>;
		public addAll(elements: T[], state: EntityState<T>): EntityState<T>;
		public removeOne(id: string, state: EntityState<T>): EntityState<T>;
		public removeAll(state: EntityState<T>): EntityState<T>;
		public updateOne(element: T, state: EntityState<T>): EntityState<T>;
		public replaceAll(elements: T[], state: EntityState<T>): EntityState<T>;
	}
}
