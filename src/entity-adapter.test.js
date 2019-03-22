import { EntityAdapter } from './entity-adapter';

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

	it('should remove element', () => {
		const element = { id: '1', label: 'first' };

		entityAdapter.addOne(element);
		entityAdapter.removeOne(element.id);

		expect(entityAdapter.ids.length).toBe(0);
		expect(entityAdapter.entities).toEqual({});
	});

	it('should update element', () => {
		const element = { id: '1', label: 'first', description: 'lorem ipsum' };
		const changes = { label: 'two' };

		entityAdapter.addOne(element);
		entityAdapter.updateOne(element.id, changes);

		expect(entityAdapter.entities[element.id].label).toEqual(changes.label);
	});

	it('should add all elements', () => {
		let elements = [
			{ id: '1', label: 'first' },
			{ id: '2', label: 'two' }
		];

		entityAdapter.addAll(elements);

		expect(entityAdapter.ids.length).toBe(2);
		expect(entityAdapter.ids[0]).toBe(elements[0].id);
		expect(entityAdapter.ids[1]).toBe(elements[1].id);
		expect(entityAdapter.entities[elements[0].id]).toEqual(elements[0]);
		expect(entityAdapter.entities[elements[1].id]).toEqual(elements[1]);

		elements = [
			{ id: '3', label: 'third' }
		];

		entityAdapter.addAll(elements);

		expect(entityAdapter.ids.length).toBe(3);
		expect(entityAdapter.ids[2]).toBe(elements[0].id);
		expect(entityAdapter.entities[elements[0].id]).toEqual(elements[0]);
	});

	it('should remove all elements', () => {
		const elements = [
			{ id: '1', label: 'first' },
			{ id: '2', label: 'two' }
		];

		entityAdapter.addAll(elements);
		entityAdapter.removeAll();

		expect(entityAdapter.ids.length).toBe(0);
		expect(entityAdapter.entities).toEqual({});
	});

	it('should replace all elements', () => {
		const elements = [
			{ id: '1', label: 'first' },
			{ id: '2', label: 'two' }
		];

		const nextElements = [
			{ id: '1', label: 'next first' },
			{ id: '3', label: 'next two' },
		];

		entityAdapter.addAll(elements);
		entityAdapter.replaceAll(nextElements);

		expect(entityAdapter.ids.length).toBe(2);
		expect(entityAdapter.ids[1]).toBe(nextElements[1].id);
		expect(entityAdapter.entities[elements[0].id]).not.toBe(elements[0]);
	});
});
