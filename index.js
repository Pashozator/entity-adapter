import { cloneDeep } from 'lodash';

export class EntityAdapter {
	constructor() {
		this.ids = [];
		this.entities = {};
	}

	getInitialState() {
		return {
			ids: this.ids,
			entities: this.entities
		}
	}

	getOne(id, state) {
		return state.entities[id];
	}

	getAll(state) {
		return Object.keys(state.entities).map(key => state.entities[key]);
	}

	addOne(element, state) {
		const newState = cloneDeep(state);

		newState.ids.push(element.id);
		newState.entities[element.id] = element;

		return newState;
	}

	addAll(elements, state) {
		let newState = cloneDeep(state);

		for (const element of elements) {
			newState = this.addOne(element, newState);
		}

		return newState;
	}

	removeOne(id, state) {
		const newState = cloneDeep(state);

		delete newState.entities[id];

		newState.ids = newState.ids.filter(_id => _id !== id);

		return newState;
	}

	removeAll(state) {
		const newState = cloneDeep(state);

		newState.ids = [];
		newState.entities = {};

		return newState;
	}

	updateOne(element, state) {
		const newState = cloneDeep(state);

		for (const prop in newState.entities[element.id]) {
			if (newState.entities[element.id].hasOwnProperty(prop) && element.changes.hasOwnProperty(prop)) {
				newState.entities[element.id][prop] = element.changes[prop];
			}
		}

		return newState;
	}

	replaceAll(elements, state) {
		let newState = cloneDeep(state);

		newState = this.removeAll(newState);
		newState = this.addAll(elements, newState);

		return newState;
	}
}
