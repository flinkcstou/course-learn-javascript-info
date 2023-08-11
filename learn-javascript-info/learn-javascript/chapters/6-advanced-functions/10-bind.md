### Привязка контекста к функции (Function binding)

- `terminology`
    - Context Binding - привязка контекста

- `about`
    - Лучше с нуля прочитать из сайта и решить задачки

- `code`
    - [code](../../codes/6-advanced-function/_10-bind.ts)

- `external link`
    - https://www.youtube.com/watch?v=UGapN-hrekw&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
    - https://www.youtube.com/watch?v=fJqYa3BuwaU&list=PLqKQF2ojwm3lPphwTfhT3ffqZbfkv07qt&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD


- Обычно bind применяется для фиксации this в методе объекта, чтобы передать его в качестве колбэка. Например, для
  setTimeout. `setTimeout(func.bind(this), 0)`

- bind
    - `bind` используется для фиксации самой функции чтоб ее не смогли переопределить
    - `bind` используется для фиксации **контекста**(this)
    - `bind` используется для фиксации первых **аргументов**(arguments)
- противоположность
    - `arrow function` чтоб не было фиксации функции, и можно было вызвать переопределенную функцию
    - `arrow function or partial` чтоб не было фиксации **контекста**(this)
    - `any function` где не будет сохранен **аргументы**(arguments)
- partial
    - `partial` используется для фиксации самой функции чтоб ее не смогли переопределить
    - `partial` используется для фиксации первых **аргументов**(arguments)
- local declaration function
    - если вдруг мы хотим функцию, которая будет вызываться внутри самой себя(recursion) и никто не должен
      переопределить
    - Оно позволяет функции ссылаться на себя же.
    - Оно не доступно за пределами функции.

- что Мне дает `bind` `call` `apply` и свои кастомные методы
    - могу менять контекст
    - могу оборачивать метода сверху, делать из них декораторы
    - могу заранее отправлять аргументы
    - могу делить на функциональность методов вызывая по очереди через обертку(throttle, debounce, rxjs, pipe)
    - могу вызвать у функции его свойства функции и отдать ему аргумента а потом он вызывет саму функцию, то есть могу
      swap сделать вызовов функции

```js
/*
* если вызвать через arrow function  метод или функцую то можно успеть перезаписать или переопределить
* */

let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);
  }
};

setTimeout(() => user.sayHi(), 1000); // Другой пользователь в 'setTimeout'!

user = {
  sayHi() {
    alert("Другой пользователь в 'setTimeout'!");
  }
};


/*
* если вызвать через bind то сама функция  сохранится в lexical environment и не будет переопределен
* */


let sayHi = user.sayHi.bind(user); // (*)

setTimeout(sayHi, 1000); // Привет, Вася!

user = {
  sayHi() {
    alert("Другой пользователь в 'setTimeout'!");
  }
};


```

- Также если мы хотим сохранить `arguments` но не хотим привязываться жестко к контексту как в `bind` можем создать свой
  метод который будет называться `partial`

```js


function partialOut(func, ...argsBound) { // its independent function  =>  const asd = partialOut(user.sayHi, 'sdf')
  return function (...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

function partial(...argsBound) { // its dependent function ->   const asd = user.sayHI.partial('sdf')
  const symbol = Symbol();
  const self = this;

  return function (...args) { // (*)

    // return  self.call(this, ...argsBound, ...args) // it's the same like below code

    this[symbol] = self;
    const result = this[symbol](...argsBound, ...args);

    delete this[symbol];
    return result;
  }
}

function bind(context: any, ...args: any) { // its dependent function ->   const asd = user.sayHI.bind(this)
  const symbol = Symbol();
  const self = this;

  function callApply(...args1: any) {
    context[symbol] = self;
    const result = context[symbol](...args, ...args1);
    delete context[symbol];
    return result;
  }

  return callApply;

};

let user = {
  firstName: "Вася",
  sayHi(text) {
    alert(`Привет, ${this.firstName}! ${text}`);
  }
};

Function.partial = partial;
Function.bind = bind;

user.someText = user.sayHi.partial('someText')
user.someText()

user.someText2 = partialOut(user.sayHi, 'someValue')
user.someText2()

const someText = user.sayHi.bind(user.sayHi, 'someText')
someText()


```

- local declaration function
    - Особенности потери ссылок на variable

```js

let sayHi = function (who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest"); // Ошибка: sayHi не является функцией
  }
};


let welcome = sayHi;
sayHi = null;

welcome(); // Ошибка, вложенный вызов sayHi больше не работает!


let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // Теперь всё в порядке
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (вложенный вызов работает)

```


