### Числа(Numbers)

https://learn.javascript.ru/string

- Есть тип данных `string`

как реализовано под капотом js тип данных `string`

```js

// Пример как вся эта функция реализовано под капотом js 
function String() {

  let prototype = {constructor: String, __proto__: Object.prototype}

  String.__proto__ = Function.prototype
  String.prototype = prototype

// static methods
  String.fromCodePoint = function () {

  }
  String.toString = function () {

  }

  // prototype methods
  String.prototype.substr = function () {

  }
  String.prototype.slice = function () {
  }


  // let this  ={}
  this.__proto__ = String.prototype
  return this
}


```

```js

let str = 'str'

str.slice(0, 1) // prototype method

String.fromCodePoint(0) // static method
```
