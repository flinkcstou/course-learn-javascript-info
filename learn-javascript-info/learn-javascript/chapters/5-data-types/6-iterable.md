### Перебираемые объекты(Iterables)

https://learn.javascript.ru/iterable

- `external-link`
    - https://www.youtube.com/watch?v=7wtbNNiOh30&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD


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

### Объекты

Цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых.
Цикл `for..of` выполнят перебор
