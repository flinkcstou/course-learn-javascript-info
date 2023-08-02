### F.prototype(F.prototype)

https://learn.javascript.ru/function-prototype

- `terminology`
    - fds

- `definition`
    - fds

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
  Object.prototype = prototype
}

// 2) Array.prototype
function Array() {
  // где то под капотом js движка
  let prototype = {constructor: Array, __proto__: Object.prototype}
  Array.prototype = prototype
}

// 3) String.prototype
function String() {
  // где то под капотом js движка
  let prototype = {constructor: String, __proto__: Object.prototype}
  String.prototype = prototype
}

// 4) Function.prototype
function Function() {
  // где то под капотом js движка
  function prototype() {
  }

  prototype.constructor = Function;
  prototype.__proto__ = Object.prototype;
  Function.prototype = prototype
}


```

**как работает, как взаимосвязаны [[Prototytpe]] и prototype системно через js движок**

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

Object.defineProperty({}, '__proto__', {
  get() {
    return this[[Prototype]]
  },
  set(value) {
    this[[Prototype]] = value
  }
})

```
