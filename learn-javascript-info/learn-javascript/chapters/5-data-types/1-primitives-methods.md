### Методы примитивов(Methods of primitives)

https://learn.javascript.ru/primitives-methods

- `terminology`

движок javascript создает для примитвных типов обертку над ними

Каждый примитив имеет свой собственный «объект-обёртку», которые называются: String, Number, Boolean и Symbol. Таким
образом, они имеют разный набор методов.

```js
// Как работает под капотом js
// то как мы объявляем, дальше за нас движок v8 дописывает и опитизирует // писать вторым способом не лучшая идея потому что занимает больше памяти
// Это просто наглядный пример что типы данные создаются через объекты где прописаны все метаданные и все характеристики типов
// Это просто наглядный пример чтобы мы понимали откуда берутся методы и свойства и примитвных типов данных

// 1) String
let str = 'str'
// они эквавалентны
let str = new String('str')


// 2) Number
let number = 5
// они эквавалентны
let number = new Number(5)


// 3) Boolean
let bool = true
// они эквавалентны
let bool = new Boolean(true)


// 4) Function
let f = function () {
// body
}
// они эквавалентны
let f = new Function(/*body*/)

```

К примеру, существует метод str.toUpperCase(), который возвращает строку в верхнем регистре.

Вот, как он работает:

```js

let str = "Привет";
alert(str.toUpperCase()); // ПРИВЕТ

```

А как это устроено под капотом js

```js
// Пример как вся эта функция реализовано под капотом js 
function String() {
  let prototype = {constructor: String, __proto__: Object.prototype}
  prototype.toUpperCase = function () {

  }
  String.prototype = prototype
  String.__proto__ = Function.prototype
  // let this = {}
  this.__proto__ = String.prototype
  return this
}

let str = 'Привет';
// это эквавалентно 
let str = new String('Привет');

str.toUpperCase() // ПРИВЕТ 
// метод toUpperCase было взято из функционального прототипа String где под капотом js реализован метод toUpperCase в прототипе и поэтому смогли до него достучаться


```
