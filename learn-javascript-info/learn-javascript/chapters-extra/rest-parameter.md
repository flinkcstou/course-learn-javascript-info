- `extra task`
    - Нужно собрать воедино destructuring и остаточные параметры и оператор расширения

- `resource`
    - [rest-parameter-and-spread-operator](../chapters/6-advanced-functions/2-rest-parameters-spread-operator.md)
    - [destructing](../chapters/5-data-types/10-destructuring-assignment.md)

- деструктуризация(`Destructing`) работает с любым объектом(object) структурой данным(Structure data) у кого есть
  реализация `Iterable` или реализован метод `Symbol.iterator`
- Array, String, Map, Set, WeakSet, custom structure data
- `Destructing` также работает с обычным объектом(`object`). но вся реализация находится под капотом js и мы не имеем
  доступа чтоб
  что то поменять.

```js
let [a, b, c] = "abc" // ['a', 'b', 'c']

let [one, two, three] = new Set([1, 2, 3])

let [oneMap, twoMap] = new Map([['one', 'oneValue'], ['two', 'twoValue']])
```

- `Symbol.iterator` выдает в ответ `value и done`  по которому можно пробегаться через `for..of`
- `Destructing`   делает несколько вещей под капотом
    - В первую очередь он создает массив и заполняет данным где пробегается по `for..of` у `iterable` объекта
    - дальше с левой стороны создаем массив где объевляем переменные и по индексу переменной он забирает данные из
      массива
- `destructing`  грубо говоря делает следующее
    - Первую очередь выражения с правой стороны для него вызывает `Symbol.iterator` где пробегаясь по `for of` заполняет
      виртуальный массив `Array`
    - дальше с правой стороны созданный массив с переменными начинает матчить. Первый индекс с левой стороны переменную
      приравнивает(assignment) к правой стороне по тому ж индексу у виртуального массива `Array` и так дальше по каждому
      индексу где есть созданные переменные с левой стороны.

```js
// как реализован под капотом js desctructing
let set = new Set()
set.add('key1')
set.add('key2')
let [one, two] = set
// что происходит под капотом js если расписать destructing
let arr = []  // виртуальный Array
// вызывается метод set[Symbol.iterator]() который возвращает iterable объект который уже может работать с for of
for (let key of set) {
  arr.push(key)
}
let [one/*это нулевой индекс переменной*/, two/*это первый индекс переменной*/] = [arr[0], arr[1]]

```

- Остаточный параметр(`rest parameter`) это специальная возможность где мы можем оставшиеся параметры записать в
  отдельный `variable`
- `rest parameter` берет оставшиеся значения
- `rest parameter` работает внутри объекта(`object`)  внутри скобок(`curly braces`) либо внутри массива(`array`) внутри
  скобок(`square brackets`)

```js
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

rest.length // 2
let {name, ...otherObj} = {name: 'sdfdsf', fullName: 'sdfdsf', secondName: 'sdfsfs'}
Object.keys(otherObj).length // 2
```

- если запись идет в переменную, то это `rest parameter`. Если читают из переменной, то это `spread syntax`


- `spread syntax`  грубо говоря делает следующее
    - Первую очередь выражения с правой стороны для него вызывает `Symbol.iterator` где пробегаясь по `for of` заполняет
      виртуальный массив `Array`
    - дальше троеточие делает следующее для виртуального Array
    - разлагает на значения. Это можно представить как много объявленных в значении через запятую без квадратных скобок.
    - `spread syntax` можно сделать где объявляем аргументы в функции либо в квадратынз скобок это массив(Array) либо
      фигурных скобок это обычный объект(object)

