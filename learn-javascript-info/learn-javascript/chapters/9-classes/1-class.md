### Класс: базовый синтаксис(Class basic syntax)

- `terminology`
    - da

- `definition`
    - fsd

- `code`
    - [code](../../codes/9-classes/_1-class.ts)
    -
- `extra task`
    - Чем отличается `new f()` от `new C()`


- Чем отличается `new f()` от `new C()`
    - 1 отличие это то что `class C` при его реализации сразу расширяет свой `prototype` под капотом js
    - `function f` ж нет. Нужно либо вызвать функцию один раз `f()`, либо расширять `prototype` из вне тела функции

```js
// 1) случай, где нужно вызвать один раз
function f() {
  if (!new.target) {
    f.prototype = {constructor: f, ...{}}
  }
}

f()
let instanceF = new f();

// 2) случай, где prototype расширяем из вне тела функции
function f() {
}

f.prototype = {constructor: f, ...{}}
let instanceF = new f()

```

- Чем отличается `new f()` от `new C()`
    - Методы и конструкторы `class C` хранятся в его prototype
    - А свойства(other any data type even is it function)  у `class C` то же самое что и `this` у `new f()`
    - не путать method c функцией у объекта. Метод есть только у класса и объекта. а функция это свойства c типом
      данных `function`; `let obj ={method(){}, f:function(){}}`

```js
class C {

  // other any data type save in this
  name = 'nameC';
  someF = function () {

  }

  // constructor save in prototype 
  constructor() {

  }

  // method save in prototype 
  method() {
    console.error(this.name)
  }

  // method save in prototype 
  ['say' + 'Hi']() {
    alert("Привет");
  }

  // method save in prototype
  [Symbol.iterator]() {
  }

  // getter and setter save in prototype
  get fullName() {
    return 'fullName is' + this.name
  }


}

let instanceC = new C()

// если class C переписать под функцию
// что происходит под капотом js
function С() {
  this.name = 'nameC'
  this.someF = function () {

  }

}

C.prototype.method = function () {
  console.error(this.name)
}
C.prototype['say' + 'Hi'] = function () {
  alert("Привет");
}
C.prototype[Symbol.iterator] = function () {
}

Object.defineProperty(C.prototype, 'fullName', {
  get() {
    return 'fullName is' + this.name
  }
})

let instanceC = new C()

// class C эквавалентен function C
// class C === function C

```

- Чем отличается `new f()` от `new C()`
    - Все что мы пишем внутри тела функции  `function f(){//body}` все это равносильно тому что мы будем писать
      внутри `constructor`-a `class C{constructor(){// body}}`
    - Это значит если мы хотим написать локальные функции или маленькую логику. Дальше приравнять к `this` то мы это
      делаем внутри `constructor`-а либо внутри тела функции
    - Это значит все локальные переменные внутри функции равно === class constructor

```js
// создали функцию 
function f() {
  function localF() {
    console.error(this.name)
    console.error('hello localF')
  }

  this.localF = localF()

  function callLocalF() {
    console.error(this.name)
  }

  callLocalF.apply(this)

  function localPrototypeF() {

  }

  f.prototype.localPrototypeF = localPrototypeF
}

// теперь все это напишем через class


class C {
  name = undefined
  localF = undefined

  constructor() {
    function localF() {
      console.error(this.name)
      console.error('hello localF')
    }

    this.localF = localF


    function callLocalF() {
      console.error(this.name)
    }

    callLocalF.apply(this)


    function localPrototypeF() {
    }

    C.prototype.loalPrototypeF = loalPrototypeF
  }

  loalPrototypeF() {

  }
}

```
