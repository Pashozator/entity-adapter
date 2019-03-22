import {EntityAdapter} from "./entity-adapter";

describe('Entity adapter', () => {
    let entityAdapter;

    beforeEach(() => {
        entityAdapter = new EntityAdapter();
    });

    it('should create new entity adapter', () => {
        expect(entityAdapter).toBeTruthy();
    });

    it('should add element', () => {
        const element = { id: '1', label: 'first' };

        entityAdapter.addOne(element);

        expect(entityAdapter.ids.length).toBe(1);
        expect(entityAdapter.ids[0]).toBe(element.id);
        expect(entityAdapter.entities[element.id]).toEqual(element);
    });
});
