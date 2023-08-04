### Проверка класса: "instanceof"()

- `syntax`
    - `obj instanceof Class`


- Оператор вернёт `true`, если `obj` принадлежит классу `Class` или наследующему от него.


- интересный момент c `Function`
- Это то что функция Function наследуется от Function.prototype, то есть Function[[Prototype]] = Function.prototype
- Также остальные функции наследуются от Function.prototype,
- то есть f[[Prototype]] = Function.prototype; Object[[Prototype]] = Function.prototype
- Также Function instanceOf Object вернет true
- Также Object instanceOf Function вернет true

```js

// как выглядит под капотом  js нативная функция Function
function Function() {

  function prototype() {

  }

  prototype.constructor = Function
  prototype.__proto__ = Object.prototype

  prototype.call = function () {

  }
  prototype.apply = function () {

  }


  Function.prototype = prototype
  Function.__proto__ = Function.prototype
}


function f() {
  // где то под капотом js
  let prototype = {
    constructor: f,
    __proto__: Object.prototype
  }
  // где то под капотом js
  f.__proto__ = Function.prototype

}

// Интересный момент с Function и Object

//где то под капотом js
function Object() {

  Object.__proto__ = Function.prototype
}

function Function() {

  Function.__proto__ = Function.prototype
}

Function.prototype = function () {
  // Вся магия происходит именно тут
  // По дефолту prototype должен был быть объектом но для Function она почему то функция.
  // раз функция то его ж [[Prototype]](__proto__) должен был быть сама ж функция и тогда была б рекурсия
  // где то под капотом js изменили [[Prototype]] для Function.prototype и она теперь равна Object.prototype

  // Выходит что любая функция даже Function наследуется прототипно но Function.prototype и ее нужно рассматривать как объект,
  // а не как функцию  и тогда выходит что все стоит на свои места. Function.prototype это объект а значит его [[Prototype]](__proto__) равен Object.prototype 
  // Что изменили под капотом js и закастомизировали для того чтобы  нормально работало прототипное наследования 
  // 1) Function.prototype сделали функцией и изменили его [[Prototype]] c Function.prototype на Object.prototype как писал ранее. если б не сделали так то была б рекурсия
  // 2) Object.prototype его [[Prototype]] приравняли на null если б не сделали то была б опять рекурсия
  // 3) Почему так плохо эта рекурсия ? потому что прототипное наследования проверяет на null [[Prototype]]. 
  // Если [[Prototype]] не null то будет искать бесконечно свойства потому что видит что [[Prototype]] не нулл значит есть еще [[Prototype]] где возможно найдется свойства.
  // Из за этого проставили для Object.prototype [[Prototype]] проставили null. а для Function.prototype изменили [[Prototype]] c Function.prototype на Object.prototype     

}
Function.prototype.__proto__ = Object.prototype


```

- как работает `instanceOf`

```js


let obj = {}

obj instanceof Object
// тоже самое как если б я написал
obj.__proto__ === Object.prototype

// Если мы сами случайно перепишем или перезапишем prototype после того как создали инстанцию можно сломать логику instanceOf

function f() {

}

let instanceF = new f();

f.prototype = {constructor: f}

instanceF instanceof f //вернет false // Потому что объект __proto__ у instanceF другой чем объект protoype у функции f

```
