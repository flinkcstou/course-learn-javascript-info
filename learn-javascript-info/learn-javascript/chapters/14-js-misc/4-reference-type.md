### Ссылочный тип(Reference Type)

https://learn.javascript.ru/reference-type

- `external-link`
- [this](../../chapters-extra/this.md)

- `Terminology`
    - ссылочный тип- reference type

- `this` работает по концепции `reference type`

- что такое `reference type` ?
    - Ссылочный тип – это внутренний тип языка.
    - Значение ссылочного типа – это «триплет»: комбинация из трёх значений (base, name, strict), где:
    - `base` – это объект.
    - `name` – это имя свойства объекта.
    - `strict` – это режим исполнения. Является true, если действует строгий режим (use strict).
    - для `this` всегда важен c какого объекта вызывается, то есть важно именно точка(dots) перед функцией вызова
      obj.method();
    - для `this` если вызывается функция без объекта то автоматический `this` ссылается на глобальный объект -
      либо `window` либо `undefined`. При вызове метода `method()`. `this` равен `undefined`
    - для `this` есть исключения если мы не используем метод `bind` `call` `apply` они под капотом переопределяют `this`
    - `this` передаётся правильно, только если функция вызывается напрямую с использованием синтаксиса точки
      `obj.method()` или квадратных скобок `obj['method']()` (они делают то же самое). `this` равен `obj`

```js
let user = {
  name: "John",
  hi() {
    alert(this.name);
  }
};

// значение ссылочного типа (Reference Type)
// (user, "hi", true)
user.hi(); // this = user

let hi = user.hi;
// значение ссылочного типа (Reference Type)
// (undefined, "hi", true)
hi(); // this = undefinded



```

- `reference-type` это не есть `lexical environment`
- `reference-type` определяется в момент вызова в run-time. В контексте исполнения кода
- `reference-type` это есть противоположность  `lexical environment`


- `lexical environment` - [lexical-environment](../6-advanced-functions/3-closure.md)
- `lexical environment` - определяется в момент объявления, то есть когда инициализируем классы\функции\переменные
- `lexical-environment` содержит в себе:
    - все объявления переменных контекста
    - все декларации функций
    - все формальные параметры функции(если речь идёт о контексте функций)
