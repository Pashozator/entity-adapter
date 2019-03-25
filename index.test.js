import { EntityAdapter } from './index';

describe('Entity adapter', () => {
	let entityAdapter;
	let state;

	beforeEach(() => {
		entityAdapter = new EntityAdapter();
		state = entityAdapter.getInitialState();
	});

	it('should return initial state', () => {
		expect(entityAdapter.getInitialState()).toEqual({ ids: [], entities: {} });
	});

	it('should create new entity adapter', () => {
		expect(entityAdapter).toBeTruthy();
	});

	it('should add element', () => {
		const element = { id: '1', label: 'first' };

		entityAdapter.addOne(element, state);

		expect(state.ids.length).toBe(1);
		expect(state.ids[0]).toBe(element.id);
		expect(state.entities[element.id]).toEqual(element);
	});

	it('should remove element', () => {
		const element = { id: '1', label: 'first' };

		entityAdapter.addOne(element, state);
		entityAdapter.removeOne(element.id, state);

		expect(state.ids.length).toBe(0);
		expect(state.entities).toEqual({});
	});

	it('should update element', () => {
		const element = { id: '1', label: 'first', description: 'lorem ipsum' };
		const changes = { label: 'two' };

		entityAdapter.addOne(element, state);
		entityAdapter.updateOne({ id: element.id, changes}, state);

		expect(state.entities[element.id].label).toEqual(changes.label);
	});

	it('should add all elements', () => {
		let elements = [
			{ id: '1', label: 'first' },
			{ id: '2', label: 'two' }
		];

		entityAdapter.addAll(elements, state);

		expect(state.ids.length).toBe(2);
		expect(state.ids[0]).toBe(elements[0].id);
		expect(state.ids[1]).toBe(elements[1].id);
		expect(state.entities[elements[0].id]).toEqual(elements[0]);
		expect(state.entities[elements[1].id]).toEqual(elements[1]);

		elements = [
			{ id: '3', label: 'third' }
		];

		entityAdapter.addAll(elements, state);

		expect(state.ids.length).toBe(3);
		expect(state.ids[2]).toBe(elements[0].id);
		expect(state.entities[elements[0].id]).toEqual(elements[0]);
	});

	it('should remove all elements', () => {
		const elements = [
			{ id: '1', label: 'first' },
			{ id: '2', label: 'two' }
		];

		entityAdapter.addAll(elements, state);
		entityAdapter.removeAll(state);

		expect(state.ids.length).toBe(0);
		expect(state.entities).toEqual({});
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

		entityAdapter.addAll(elements, state);
		entityAdapter.replaceAll(nextElements, state);

		expect(state.ids.length).toBe(2);
		expect(state.ids[1]).toBe(nextElements[1].id);
		expect(state.entities[elements[0].id]).not.toBe(elements[0]);
	});

	it('should get one element', () => {
		const element = { id: '1', label: 'first' };

		entityAdapter.addOne(element, state);

		expect(entityAdapter.getOne(element.id, state)).toEqual(element);
	});

	it('should get all elements', () => {
		const elements = [
			{ id: '1', label: 'first' },
			{ id: '2', label: 'two' }
		];

		entityAdapter.addAll(elements, state);

		expect(entityAdapter.getAll(state)).toEqual(elements);
	});
});
