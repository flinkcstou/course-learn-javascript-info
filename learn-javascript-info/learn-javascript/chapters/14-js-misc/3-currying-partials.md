### Каррирование(Currying)

https://learn.javascript.ru/currying-partials

- `Terminology`
    - Каррирование - Currying

- `Currying` – это трансформация, которая превращает вызов f(a, b, c) в f(a)(b)(c). В JavaScript реализация обычно
  позволяет вызывать функцию обоими вариантами: либо нормально, либо возвращает частично применённую функцию, если
  количество аргументов недостаточно.
- `Currying` – это трансформация функций таким образом, чтобы они принимали аргументы не как `f(a, b, c)`, а
  как `f(a)(b)(c)`.


- Продвинутая реализация каррирования(Currying)

```js
function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function pass(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}


function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.error(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально
console.error(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента
console.error(curriedSum(1)(2)(3)); // 6, каррирование всех аргументов
```

- Бесконечный сумматор с каррированием через рекурсию и с сохранением состояния в контексте класса:

```js
function sum(...x) {
  let s = x.reduce((sum, current) => sum + current, 0);
  sum.n = s;

  return (...y) => {
    s += y.reduce((sum, current) => sum + current, 0);
    return sum(s);
  };
}

```
