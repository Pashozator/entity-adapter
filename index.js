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

		return { ...state }
	}

	addAll(elements, state) {
		for (const element of elements) {
			this.addOne(element, state);
		}

		return { ...state }
	}

	removeOne(id, state) {
		delete state.entities[id];

		state.ids = state.ids.filter(_id => _id !== id);

		return { ...state }
	}

	removeAll(state) {
		state.ids = [];
		state.entities = {};

		return { ...state }
	}

	updateOne(element, state) {
		for (const prop in state.entities[element.id]) {
			if (state.entities[element.id].hasOwnProperty(prop) && element.changes.hasOwnProperty(prop)) {
				state.entities[element.id][prop] = element.changes[prop];
			}
		}

		return { ...state }
	}

	replaceAll(elements, state) {
		this.removeAll(state);
		this.addAll(elements, state);

		return { ...state }
	}
}
