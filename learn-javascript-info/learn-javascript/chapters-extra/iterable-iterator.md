### Все о IterableIterator

- для начало прочитать [iterable](../chapters/5-data-types/6-iterable.md)
- для начало прочитать [map-set](../chapters/5-data-types/7-map-set.md)
- для начало прочитать [keys-values-entries](../chapters/5-data-types/9-keys-values-entries.md)

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
var map = new Map(Object.entries(obj)) //Iterable entriesObject

var set = new Set(Object.keys(obj)); //Iterable keysObject
var set = new Set(Object.values(obj)); //Iterable valuesObject

var arr = Object.keys(obj)
var arr = Object.values(obj)

```

```ts
// принимает объект у которого Iterable равен entriesObject, либо явно вызываем метод entries у структур данных она будет возвращать Iterable entriesObject
Object.fromEntries()
// принимает объект у которого Iterable либо ArraLike
Array.from()
// принимает объект у которого Iterable равен Symbol(Symbol.toStringTag) entriesObject, либо явно вызываем метод entries у структур данных она будет возвращать Iterable entriesObject
new Map()
// принимает объект у которого Iterable равен valuesObject, либо явно вызываем метод values у структур данных она будет возвращать Iterable valuesObject
new Set()
// принимает объект у которого Iterable равен valuesObject, либо явно вызываем метод values у структур данных она будет возвращать Iterable valuesObject
new Array()

```

- `Iterable` объект который дает возможность пробегаться по циклу `for...of`

- `Iterable` мощная функция которая дает возможность многим вещам реализовываться `rest parameter`, `spread syntex`
  , `for..of`

```js
// под капотом js
function Set(iterable) {
  function generateSetByIterable(iterable) {
    if (iterable.isNot(valuesObject)) {
      throw new Error('sdfds')
    }
    for (let value of iterable) {
      set.add(value)
    }
  }

  let set = new Set()
  if (iterable) {
    generateSetByIterable()
  }
  return set

}



```

- `Map, Set, Array`, в конструктор принимает `iterable` у каждого которого должен быть своим типом. если Map то
  принимает в конструктор Map. если Set то принимает в конструктор Set. если Array то принимает в конструктор Array.
  Также принимает просто Array. если ни один из них то тогда должны вызывать методы `entries, keys, values` для того
  чтоб передавать правильном виде в конструктор

```ts
// как реализовано под капотом js Map

function Map() {

  Map.prototype.entries = function() {
    const iterator: IterableIterator<any> = {
      [Symbol.iterator](): IterableIterator<any> {
        return this;
      },
      next() {
        return {
          value: ['key', 'value'],
          done: false
        }
      }

    }
    return iterator

  }
}

```
