### Синтаксис "new Function"(The "new Function" syntax)

https://learn.javascript.ru/new-function

```js

let func = new Function([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');
sum(1, 2); // 3

let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

```

`new Function` позволяет превратить любую строку в функцию. Например, можно получить новую функцию с сервера и затем
выполнить её:

`new Function` ее lexical environment сразу смотрит на глобальный, а не на родительский

```js

function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // ошибка: value не определено~~
```
