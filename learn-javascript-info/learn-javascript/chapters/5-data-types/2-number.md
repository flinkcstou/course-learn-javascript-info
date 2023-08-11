### Числа(Numbers)

https://learn.javascript.ru/number

- Есть тип данных `number`

как реализовано под капотом js тип данных `number`

```js

// Пример как вся эта функция реализовано под капотом js 
function Number() {

  let prototype = {constructor: Number, __proto__: Object.prototype}

  Number.__proto__ = Function.prototype
  Number.prototype = prototype

// static methods
  Number.isNaN = function () {

  }
  Number.isFinite = function () {

  }

  // prototype methods
  Number.prototype.toString = function () {

  }
  Number.prototype.toFixed = function () {
  }


  // let this  ={}
  this.__proto__ = Number.prototype
  return this
}

```

```js

let num = 5

num.toString() // prototype method

Number.isFinite(num) // static method
```
