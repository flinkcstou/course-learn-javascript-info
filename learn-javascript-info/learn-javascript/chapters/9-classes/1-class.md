### Класс: базовый синтаксис

- `extra task`
    - Чем отличается `new f()` от `new C()`

  /*

    * */

- Чем отличается `new f()` от `new C()`
    - 1 отличие это то что `class C` при его реализации сразу расширяет свой `prototype` под капотом js
    - `function f` ж нет. Нужно либо вызвать функцию один раз `f()`, либо расширять `prototype` из вне тела функции

```js
// 1) случай, где нужно вызвать один раз
function f() {
  f.prototype = {constructor: f, ...{}}
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
    - А свойства(other any data type)  у `class C` то же самое что и `this` у `new f()`

```js
class C {

  // other any data type save in this
  name = 'nameC';

  // method save in prototype 
  method() {
    console.error(this.name)
  }
}

let instanceC = new C()

// если class C переписать под функцию
// что происходит под капотом js
function С() {
  this.name = 'nameC'
  C.prototype.method = function () {
    console.error(this.name)
  }
}

let instanceC = new C()

// class C эквавалентен function C
// class C === function C

```
