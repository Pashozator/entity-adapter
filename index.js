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
		state.ids.push(element.id);
		state.entities[element.id] = element;
	}

	addAll(elements, state) {
		for (const element of elements) {
			this.addOne(element, state);
		}
	}

	removeOne(id, state) {
		delete state.entities[id];

		state.ids = state.ids.filter(_id => _id !== id);
	}

	removeAll(state) {
		state.ids = [];
		state.entities = {};
	}

	updateOne(element, state) {
		for (const prop in state.entities[element.id]) {
			if (state.entities[element.id].hasOwnProperty(prop) && element.changes.hasOwnProperty(prop)) {
				state.entities[element.id][prop] = element.changes[prop];
			}
		}
	}

	replaceAll(elements, state) {
		this.removeAll(state);
		this.addAll(elements, state);
	}
}
