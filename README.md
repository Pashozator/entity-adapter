# entity-adapter
JavaScript library to maintain entities. It helps you to deal with collections.

## Public API

- Get initial state of entity adapter, by default it returns object like `ids: [], entities: {}`.
```javascript 
getInitialState(): EntityAdapterState
```

- Add one object to collection.
```javascript
addOne(object: any, state: EntityAdapterState): EntityAdapterState
```

- Add array of objects to collection.
```javascript
addAll(objects: any[], state: EntityAdapterState): EntityAdapterState
```

- Update one object from collection.
```javascript
updateOne(object: any, state: EntityAdapterState): EntityAdapterState
```

- Remove one object from collection.
```javascript
removeOne(id: string, state: EntityAdapterState): EntityAdapterState
```

- Remove all objects from collection.
```javascript
removeAll(state: EntityAdapterState): EntityAdapterState
```

- Replace all objects from collection with new objects.
```javascript
replaceAll(objects: any[], state: EntityAdapterState): EntityAdapterState
```

- Get one element from collection.
```javascript
getOne(id: string, state: EntityAdapterState): EntityAdapterState
```

- Get all elements from collection.
```javascript
getAll(state: EntityAdapterState): EntityAdapterState
```
