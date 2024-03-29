### F.prototype(F.prototype)

https://learn.javascript.ru/function-prototype

- `terminology`
    - fds

- `definition`
    - fds

- `code`
    - [code](../../codes/8-prototypes/_2-function-prototype.ts)

- `extra task`
    - Чем отличается вызов `f()` от объекта созданного `new f()`, в чем разница `[[Prototype]]`, `prototype`
      ,  `Function.prototype`, `f.prototype` ?
    - Чем отличается `function f (){}` от `function f(){}; new f()`

- `prototype`
    - у функции(`function`) есть дефолтное свойство(`property`) - `prototype`
    - `prototype` равен `{constructor: f}`
    - `prototype` нужен для присвоения [[Prototype]] при вызове функции через `new f()`

**все способы создания [[Prototype]] системно через js движок для всех типы данных**

```js
// 1)  когда создаем object обычным способом  через assignment opertor and braces
let obj = {}

// где то под капотом js движка 
// obj.__proto__ = Object.prototype
// obj[[Prototype]] = Object.prototype
// тоже самое
let obj = new Object()


// 2) когда создаем function  обычным способок через declaration function
// функция это есть object. имеет все свойства и функциональность object-а / функция это просто super object
function f() {
}

// где то под капотом js движка 
// f.__proto__ = Function.prototype
// f[[Prototype]] = Function.prototype
// тоже саоме 
let f = new Function('console.error("Hello")');


// 3)  когда создаем array обычным способом  через assignment opertor and square brackets
let arr = []
// где то под капотом js движка 
// arr.__proto__ = Array.prototype
// arr[[Prototype]] = Array.prototype
// тоже самое
let arr = new Array()


// 4)  когда создаем number обычным способом  через assignment opertor
let num = 55
// где то под капотом js движка 
// num.__proto__ = Number.prototype
// num[[Prototype]] = Number.prototype
// тоже самое 
let num = new Number(55)


// 5)  когда создаем symbol обычным способом  через assignment opertor and Symbol
let symbol = Sybmol('symbol')
// где то под капотом js движка 
// symbol.__proto__ = Symbol.prototype
// symbol[[Prototype]] = Symbol.prototype
// тоже самое
// нету других альтернатив создания потому что Symbol это особый тип данных 


// 6)  когда создаем string обычным способом  через assignment opertor
let str = 'some String'
// где то под капотом js движка 
// str.__proto__ = String.prototype
// str[[Prototype]] = String.prototype
//тоже самое 
let str = new String('some String')


// 7)  когда создаем boolean обычным способом  через assignment opertor
let bool = true;
// где то под капотом js движка 
// bool.__proto__ = Boolean.prototype
// bool[[Prototype]] = Boolean.prototype
//тоже самое 
let str = new Boolean(true)



```

**все виды `prototype` системно через js движок для всех типы данных**

```js
// 1) Object.prototype
function Object() {
  // где то под капотом js движка
  let prototype = {constructor: Object, __proto__: null}
  prototype.toString = function () {
  }
  Object.prototype = prototype
  Object.__proto__ = Function.prototype


}

// 2) Array.prototype
function Array() {
  // где то под капотом js движка
  let prototype = {constructor: Array, __proto__: Object.prototype}
  prototype.toString = function () {
  }
  prototype.slice = function () {
  }
  Array.prototype = prototype
  Array.__proto__ = Function.prototype

}

// 3) String.prototype
function String() {
  // где то под капотом js движка
  let prototype = {constructor: String, __proto__: Object.prototype}
  prototype.toString = function () {
  }
  String.prototype = prototype
  String.__proto__ = Function.prototype
}

// 4) Function.prototype
function Function() {
  // где то под капотом js движка
  function prototype() {
  }

  prototype.constructor = Function;
  prototype.__proto__ = Object.prototype;
  prototype.toString = function () {
  }
  prototype.call = function () {
  }
  Function.prototype = prototype
  Function.__proto__ = Function.prototype
}


```

**как работает, как взаимосвязаны [[Prototype]] и prototype системно через js движок**

```js
function f() {
  // где то под капотом js движка 
  const prototype = {constructor: f, __proto__: Object.prototype};
  // prototype.__proto__ = Object.prototype
  // prototype[[Prototype]] = Object.prototype
  f.prototype = prototype;

  // где то под капотом js движка 
  // const this = {
  // __proto__: f.prototype
  // }
  // return this
}

const instanceF = new f();
// instanceF = {...someKeyAndValues, __proto__: f.prototype}
// instanceF.__proto__ = f.prototype  ||  instanceF.__proto__ = {constructor:f, __proto__: Object.prototype} 
// instanceF[[Prototype]] = f.prototype  ||  instanceF[[Prototype]] = {constructor:f, __proto__: Object.prototype}

// instanceF -> f.prototype -> Object.prototype -> null
// instanceF.__proto__ = f.prototype && f.prototype.__proto__ = Object.prototype && Object.prototype.__proto__ =null


```

**Как теперь будет работать кастомные [[Prototype]]**

```js
// 1) Сами вручную устанавливаем для объекта __proto__ через assignment operator and braces

let obj = {name: 'name'};
// где то под капотом js движка
// obj.__proto__ = Object.prototype
// obj[[Prototype]] = Object.prototype

// Сами устанавливаем вручную  __proto__([[Prototype]])
let animal = {__proto__: obj}
// тут мы сами напрямую указали __proto__ = obj
// animal -> obj -> Object.prototype -> null
// animal.__proto__ = obj && obj.__proto__ = Object.protype &&  Object.protype.__proto__ = null


// 2) Сами вручную устанавливаем  для объекта  __proto__ через new f()
function f() {
  //Теперь сами устанавливаем вручную  prototype, где мы изменили __proto__ для prototype
  const prototype = {constructor: f, __proto__: obj};
  f.prototype = prototype

  // где то под капотом js движка 
  // const this = {
  // __proto__: f.prototype
  // }
  // return this
}

let instanceF = new f();
// instanceF -> f.prototype -> obj -> Object.prototype -> null
//instanceF.__proto__ = f.prototype && f.prototype.__proto__ = obj && obj.__proto__ = Object.prototype &&  Object.prototype.__proto__ = null


// 3) Сами вручную устанавливаем  для объекта  __proto__ через new f()
function f() {
  //Теперь сами устанавливаем вручную  prototype, где мы изменили __proto__ для prototype
  const prototype = {fName: 'fName', __proto__: obj};
  f.prototype = prototype


  // где то под капотом js движка 
  // const this = {
  // __proto__: f.prototype
  // }
  // return this
}

let instanceF = new f();
// instanceF -> f.prototype -> obj -> Object.prototype -> null
//instanceF.__proto__ = f.prototype && f.prototype.__proto__ = obj && obj.__proto__ = Object.prototype &&  Object.prototype.__proto__ = null

```

**Как реализован `__proto__`  внутри движка js**

```js
let obj = {}
// где то пот капотом js для каждого созданного объекта происходит такая магия 
Object.defineProperty(obj, '__proto__', {
  get() {
    return this[[Prototype]]
  },
  set(value) {
    this[[Prototype]] = value
  }
})
obj.__proto__ = Object.prototype

```

- Чем отличается вызов `f()` от объекта созданного `new f()`, в чем разница `[[Prototype]]`, `prototype`
  ,  `Function.prototype`, `f.prototype` ?
    - ...
    - при вызове `f()` происходит создания обычной функции и тогда
      для `function f(){}`  `f[[Prototype]] || (f.__proto__)`
      равен `Function.prototype`
    - как б функция потом выглядело под капотом js `let f = new Function('body'); f[[Prototype]] = Function.prototype`
    - при вызове  `let a = new f()` происходит создания нового объекта и тогда для
      объекта `a[[Prototype]] || (a.__proto__)` равен `f.prototype`
    - Есть функции Object, Function, Array, Map итд. У всех у них переписаны свойства `prototype` но при создания
      обычной функции `function f(){}` `prototype` равен `prototype` = {constructor:f} и дальше если мы хотим изменить
      мы можем сами поменять `prototype`. Также, как и у встроенных функции Object, Function, Array, Map итд. обычно
      встроенный `prototype` переписывают если мы хотим через функцию создать новый объект -> `new f()`

- Почему происходит путаница, когда речь идет о `[[Prototype]]` `__proto__` и о `prototype` связанный с обычной
  функцией `function f(){}`
    - функция это и есть объект нужно просто привыкнуть воспринимать как `супер объект` который просто имеет
      тело(`function body`), где
      можно код написать и вызвать его(`f()`), а все остальное это объект
    - если объект может наследоваться от другого объекта через `__proto__` `[[Prototype]]`
    - также функция(`супер объект`) может наследоваться от другой функции через `__proto__` `[[Prototype]]`
    - это означает что функция наследованная от другой будет иметь доступ до свойств другой функции, выходит что
      работает так же как и объект
    - `Object.setPrototypeOf(f, fExtends)`


- Чем отличается `function f (){} f()` от `function f(){}; new f()`
- `function f(){} f()`
    - has local variable(any data type)
    - has property(any data type)
    - has __proto__ = Function.prototype
    - has prototype = f.prototype
- `function f(){}; new f()`
    - function has local variable(any data type)
    - function has property(any data type)
    - function has __proto__ Function.prototype
    - function has prototype = f.prototype
    - has created variable "this"
    - variable "this" has __proto__ = f.prototype
