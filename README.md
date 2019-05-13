# entity-adapter
JavaScript library to maintain entities. It helps you to deal with collections. Inspired by https://ngrx.io/guide/entity/adapter

Works also with typescript;

## Public API

- EntityState<T> interface (where T is your entity type for example Product `{ id: string, name: string, description: string }`)
```typescript
ids: string[];
entites: T[];
```

- Get initial state of entity adapter.
```javascript 
getInitialState(): EntityState<T>
```

- Add one object to collection.
```javascript
addOne(element: T, state: EntityState<T>): EntityState<T>
```

- Add array of objects to collection.
```javascript
addAll(elements: T[], state: EntityState<T>): EntityState<T>
```

- Update one object from collection.
```javascript
updateOne(element: T, state: EntityState<T>): EntityState<T>
```

- Remove one object from collection.
```javascript
removeOne(id: string, state: EntityState<T>): EntityState<T>
```

- Remove all objects from collection.
```javascript
removeAll(state: EntityState<T>): EntityState<T>
```

- Replace all objects from collection with new objects.
```javascript
replaceAll(elements: T[], state: EntityState<T>): EntityState<T>
```

- Get one element from collection.
```javascript
getOne(id: string, state: EntityState<T>): EntityState<T>
```

- Get all elements from collection.
```javascript
getAll(state: EntityState<T>): EntityState<T>
```
