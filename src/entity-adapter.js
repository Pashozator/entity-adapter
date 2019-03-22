export class EntityAdapter {
    constructor() {
        this.ids = [];
        this.entities = {};
    }

    addOne(element) {
        this.ids.push(element.id);
        this.entities[element.id] = element;
    }
}
