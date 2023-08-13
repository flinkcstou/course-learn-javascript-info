### Перебираемые объекты(Iterables)

https://learn.javascript.ru/iterable

- `external-link`
    - https://www.youtube.com/watch?v=7wtbNNiOh30&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
    - https://www.youtube.com/watch?v=7wtbNNiOh30&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=11&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

- `extra task`
    - изучить либу https://www.npmjs.com/package/fluent-iterable


- Перебираемые(итерируемые)(`Iterable`) объекты – это обобщение массивов. Концепция, которая позволяет использовать
  любой объект в цикле `for..of`.
- Итерируемые объекты(`Iterables`) – это объекты, которые реализуют метод `Symbol.iterator`, как было описано выше.
- Объекты, которые можно использовать в цикле `for..of`, называются итерируемыми объектами(`iterables`).
- Псевдомассивы(`Array-likes`) – это объекты, у которых есть `index` и свойство `length`, то есть, они выглядят как
  массивы.

```js
// iterables (перебираемые объекты)
let range = {
  [Symbol.iterator]() {
  }
}
// работает (присутствует метод Symbol.iterator)
for (let num of range) {
}


// array-likes (Псевдомассивы)
let arrayLikes = { // // есть индексы и свойство length => псевдомассив
  0: 'hello',
  1: 'worlds',
  length: 2,
}
// Ошибка (отсутствует Symbol.iterator)
for (let item of arrayLikes) {
}

```

- Цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых.
- Цикл `for..of` выполнят перебор объекта у которого реализован метод `Symbol.iterator`


- `Array.from` метод который может из `Iterables`  и `Array-likes` сделать обычный массив(Array)

```js
// как реализовано под капотом js
function Array() {
  let prototype = {constructor: Array, __proto__: Object.prototype}

  Array.prototype = prototype
  Array.__proto__ = Function.prototype

  // let this = {}
  this.__proto__ = Array.prototype
  return this

}

Array.from = function (obj) {
  if (obj[Symbol.iterator]) { // iterable object transform to array
    let array = new Array();

    for (let value of obj) {
      array.push(value)
    }
    return array
  }
  if (obj.length) { // array-like object tranfsorm to array
    let array = new Array();
    let start = 0

    while (true) {
      if (obj[start]) {
        array.push(obj[start])
      }
      start++
      if (start >= obj.length) {
        break
      }
    }
    return array

  }
  throw new TypeError('doesnt match')
}


Array.from(range)
Array.from(arrayLikes)

```

- Кто таки не понял разницу о `for/in` и `for/of`.
  `for/in` - используется исключительно для перечисления свойств объекта и его прототипов рекурсивно (внутри
  перечисления `for/in` используется итератор, который реализует движок браузера или другого агента, изменить этот
  итератор нельзя и он недоступен из кода js или ts, подробнее читайте спецификацию)
- `for/of` - используется исключительно для итерируемых объектов, объектов которые реализуют протокол итератора. То есть
  этот цикл будет смотреть на итератор объекта и заниматься итерацией по правилам итератора. Итераторы могут быть
  разными например у Array, Set, Map свои собственные итераторы. Можно реализовать собственный итератор для своих
  объектов и цикл for/of будет играть по правилам вашего итератора.
- В заключении: так как for/in играет по правилам реализации движка js то и итератор у него свой и правила свои, а вот
  for/of это как раз та конструкция которая играет по вашим правилам.
- Как пример почему нельзя использовать for/in на замену for/of для циклов:
  for (let i in new Array(10)) console.log(i)
  for (let i of new Array(10)) console.log(i)
  В первом примере консоль не будет вызвана вообще
  Во втором консоль будет вызвана 10 раз.


- `Map`, `Set`, `Array` у них уже реализован `Symbol.iterator` и они считаются как `iterables object`(Перебираемыми
  объектами)

```js
// как реализовано под копотом js

function Map() {
  let prototype = {constructor: Map, __proto__: Object.prototype}

  Map.prototype = prototype
  Map.__proto__ = Function.prototype

  // prototype methods
  Map.prototype[Symbol.iterator] = function () {

  }

  // let this = {}
  this.__proto__ = Map.prototype
  return this

}

let map = new Map();

map[Symbol.iterator]() // get from prototype inheritance

for (let [key, value] of map) {

}

```
