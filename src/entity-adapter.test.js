import {EntityAdapter} from "./entity-adapter";

describe('Entity adapter', () => {
    it('should create new entity adapter', () => {
        const entityAdapter = new EntityAdapter();

        expect(entityAdapter).toBeTruthy();
    });

    it('should add element', () => {
        const entityAdapter = new EntityAdapter();
        const element = { id: '1', label: 'first' };

        entityAdapter.addOne(element);

        expect(entityAdapter.ids.length).toBe(1);
        expect(entityAdapter.ids[0]).toBe(element.id);
        expect(entityAdapter.entities[element.id]).toBe(element);
    });
});
