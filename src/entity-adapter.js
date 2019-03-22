export class EntityAdapter {
	constructor() {
		this.ids = [];
		this.entities = {};
	}

	getOne(id) {
		return this.entities[id];
	}

	getAll() {
		return Object.keys(this.entities).map(key => this.entities[key]);
	}

	addOne(element) {
		this.ids.push(element.id);
		this.entities[element.id] = element;
	}

	addAll(elements) {
		for (const element of elements) {
			this.addOne(element);
		}
	}

	removeOne(id) {
		delete this.entities[id];

		this.ids = this.ids.filter(_id => _id !== id);
	}

	removeAll() {
		this.ids = [];
		this.entities = {};
	}

	updateOne(id, changes) {
		for (const prop in this.entities[id]) {
			if (this.entities[id].hasOwnProperty(prop) && changes.hasOwnProperty(prop)) {
				this.entities[id][prop] = changes[prop];
			}
		}
	}

	replaceAll(elements) {
		this.removeAll();
		this.addAll(elements);
	}
}
