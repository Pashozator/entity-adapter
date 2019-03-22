export class EntityAdapter {
    constructor() {
        this.ids = [];
        this.entities = {};
    }

    addOne(element) {
        this.ids.push(element.id);
        this.entities[element.id] = element;
    }

    removeOne(id) {
        delete this.entities[id];

        this.ids = this.ids.filter(_id => _id !== id);
    }
}
