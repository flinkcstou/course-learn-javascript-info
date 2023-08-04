### Наследование классов(Class inheritance)

https://learn.javascript.ru/class-inheritance

- `code`
    - [code](../../codes/9-classes/_2-class-inheritance.ts)

- `extra task`
    - научиться рисовать диаграммы как class наследует от другого класса

- как работает `extends` в `new f()` и у `new c()`

```js
// 1) Пример с функцией
function f() {

}

f.prototype.run = function () {

}

function fExtends() {

}

fExtends.prototype.fly = function () {

}
// мы сначала меняем у fExtends.prototype [[Prototype]]  на f.prototype  это нужно для корректной работы новых инстанции которые создаются через `new f()`
Object.setPrototypeOf(fExtends.prototype, f.prototype)
fExtends.prototype.__proto__ = f.prototype

let instanceFExtends = new fExtends();

// instanceFExtends -> fExtends.prototype -> f.prototype -> Object.prototype -> null
// instanceFExtends.__proto__ = fExtends.prototype &&  fExtends.prototype.__proto__ = f.prototype &&  f.prototype.__proto__ = Object.prototype && Object.prototype.__proto__ = null


// 2) // теперь все это напишем через class

class C {
  run() {

  }
}

class CExtends extends C {

  fly() {

  }
}

let instanceCExtends = new CExtends();


```

- особенность `constructor`-a в class-e
    - constructor будет сначала вызывать родительский если есть и только потом свой
    - constructor инициализирует сначала свойства родительского если есть и только потом свой
    - внутри тела функции или внутри constructor-a происходит следующее:
        - инициализация super
        - инициализация свойств если они инициализированы вне constructor-a
        - и только потом вызывается сама тела функции

```js
// 1) Пример с функцией
function f() {
  // calling super constructor() // constructor будет сначала вызывать родительский если есть и только потом свой
  this.name = 'name' // constructor инициализирует сначала свойства родительского если есть и только потом свой
  console.error(this.name) // инициализвация тела 
}

function fExtends() {
  f.call(this) // constructor будет сначала вызывать родительский если есть и только потом свой
  this.name = 'nameExtends' // constructor инициализирует сначала свойства родительского если есть и только потом свой
  console.error(this.name) // инициализвация тела 
}

// мы сначала меняем у fExtends.prototype [[Prototype]]  на f.prototype  это нужно для корректной работы новых инстанции которые создаются через `new f()`
Object.setPrototypeOf(fExtends.prototype, f.prototype)

let instanceFExtends = new fExtends()


// 2) // теперь все это напишем через class
class C {
  name = 'name'

  constructor() {
    // инициализация super если есть 
    // super() 
    // инициализвация свойств 
    // this.name = 'name'
    // инициализация тела функции
    console.error(this.name)
  }
}

class CExtends extends C {
  name = 'nameExtends' // constructor инициализирует сначала свойства родительского если есть и только потом свой

  constructor() {
    // инициализация super если есть 
    super() // constructor будет сначала вызывать родительский если есть и только потом свой
    // инициализвация свойств 
    // this.name = 'nameExtends'
    // инициализация тела функции
    console.error(this.name)
  }
}

let instanceCExtends = new CExtends();



```

- Чем отличается `super` от `this` в `new f()` или `new C()`
    - `this` работает только в контексте(context). Мы можем узнать какое значения `this` только при вызове функции
    - `this` - все равно вызывается ли `new f()` или `f()`
    - `super` работает только с `[[Prototype]]`
    - У `super` нет контекста ее значение определено как только указали [[Prototype]]
    - `super` статичный как только инициализировали объект с [[Prototype]] он никогда не изменится
    - Метод где есть `super` и если мы его скопируем то `super` будет тот [[Prototype]] с какого объекта было
      скопировано;
    - если есть функция где есть `super` то выкинет ошибку js;
    - `super` это по другому `[[HomeObject]]`

```js
let animal = {
  sayHi() {
    console.log("Я животное");
  }
};

// rabbit наследует от animal
let rabbit = {
  __proto__: animal,
  sayHi() {
    super.sayHi();
  }
};

let plant = {
  sayHi() {
    console.log("Я растение");
  }
};

// tree наследует от plant
let tree = {
  __proto__: plant,
  sayHi: rabbit.sayHi // (*)
};

tree.sayHi();  // Я животное 


tree.sayHi2 = function () {
  super.sayHi()
} // выкинет ошику так как у функции нет super 



```
