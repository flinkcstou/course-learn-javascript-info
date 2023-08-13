### Object.keys, values, entries

- `Object.keys`, `Object.values`, `Object.entries`

у всех структур данных(`Map`, `Set`, `Array`, etc) есть три метода, которые возвращает итерируемые объекты

- keys()
- values()
- entries()

Для простых объектов доступны следующие методы:

- Object.keys(obj) – возвращает массив ключей.
- Object.values(obj) – возвращает массив значений.
- Object.entries(obj) – возвращает массив пар [ключ, значение].
- Object.fromEntries(structureData) - возвращает из итерируемых структур данных объект `{key:value}`

```js
// у функции Object есть статичные свойства или просто свойства функции такие как keys, values, entries
// как это реализовано под капотом js

function Object() {
  Object.keys = function () {
  }
  Object.values = function () {
  }
  Object.entries = function () {
  }

  return this
}


```

- `Object.entries`
    - возвращает такую структуру `[['key1', 'value1'], ['key2', 'value2']]`
- `Object.fromEntries`
    - принимает аргумент в таком структуре `[['key1', 'value1'], ['key2', 'value2']]`
- `map.entries`
    - возвращает такую структуру `[['key1', 'value1'], ['key2', 'value2']]`
- `set.entries`
    - возвращает такую структуру `[['key1', 'key1'], ['key2', 'key2']]`
- `array.entries`
    - возвращает такую структуру `[['0', 'value1'], ['1', 'value2']]`
