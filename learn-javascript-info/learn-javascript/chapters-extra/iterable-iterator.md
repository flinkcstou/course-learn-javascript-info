### Все о IterableIterator

```ts
// как реализован под капотом js
interface Iterator<T, TReturn = any, TNext = undefined> {
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;

  return?(value?: TReturn): IteratorResult<T, TReturn>;

  throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
  [Symbol.iterator](): IterableIterator<T>;
}


interface Set<T> {
  [Symbol.iterator](): IterableIterator<T>;

  entries(): IterableIterator<[T, T]>;

  keys(): IterableIterator<T>;

  values(): IterableIterator<T>;
}

interface Map<K, V> {
  [Symbol.iterator](): IterableIterator<[K, V]>;

  entries(): IterableIterator<[K, V]>;

  keys(): IterableIterator<K>;

  values(): IterableIterator<V>;
}

interface Array<T> {
  [Symbol.iterator](): IterableIterator<T>;

  entries(): IterableIterator<[number, T]>;

  keys(): IterableIterator<number>;

  values(): IterableIterator<T>;
}

```

```js
// у функции Object есть статичные свойства или просто свойства функции такие как keys, values, entries
// как это реализовано под капотом js

function Object() {
  Object.keys = function () { // Iterable keysObject
    return ['key1', 'key2']
  }
  Object.values = function () { //Iterable valuesObject
    return ['value1', ' value2']
  }
  Object.entries = function () { //Iterable entriesObject
    [['key1', `value1`], ['key2', `value2`]]
  }

  return this
}

```

- у многих структурных данных (`Map`, `Set`, `Array`, etc) реализован свои `IterableIterator`
- `Symbol.iterator`
- `entries`
- `keys`
- `values`
- Каждый из них возвращает объект `IterableIterator`
- `entries, key, values` реализованы для обратной совместимости с `Object`. У Object есть статичные методы(свойства
  функции) такие как `Object.values, Object.keys, Object.entries, Object.fromEntries`
- Чтоб из любого структур данных итерируемых смогли создать инстанцию объекта и наоборот из инстанции объекта создать
  инстанцию структур данных

```ts
// `Object.values, Object.keys, Object.entries` возвращает Array

var obj = {key: 'value'};
var map = new Map(Object.entries(obj))

var set = new Set(Object.keys(obj));
var set = new Set(Object.values(obj));

var arr = Object.keys(obj)
var arr = Object.values(obj)

```

```ts
// принимает объект у которого Iterable равен entriesObject, либо явно вызываем метод entries у структур данных она будет возвращать Iterable entriesObject
Object.fromEntries()
// принимает объект у которого Iterable либо ArraLike
Array.from()
// принимает объект у которого Iterable равен entriesObject, либо явно вызываем метод entries у структур данных она будет возвращать Iterable entriesObject
new Map()
// принимает объект у которого Iterable равен valuesObject, либо явно вызываем метод entries у структур данных она будет возвращать Iterable valuesObject
new Set()
// принимает объект у которого Iterable равен valuesObject, либо явно вызываем метод entries у структур данных она будет возвращать Iterable valuesObject
new Array()

```

