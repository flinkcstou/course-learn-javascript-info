### Генераторы(Generators)

https://learn.javascript.ru/generators

- `external link`
    - https://www.youtube.com/watch?v=7wtbNNiOh30&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=11&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
    - https://habr.com/ru/articles/529560/
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

- `extra task`
    - https://www.codewars.com/kata/5636840bd87777688b00006c
    - https://www.codewars.com/kata/5637ead70013386e30000027
    - https://www.codewars.com/kata/56390ac2815fb1222a000070
    - generator vs for
    - для чего было создано generator и какую проблему решает generator где можно заменить for
    - изучить либу https://www.npmjs.com/package/fluent-iterable


- `terminology`
    - Композиция генераторов - Generator composition

```ts
// как реализовано под капотом js
interface Iterator<T, TReturn = any, TNext = undefined> {
  next(...args: []): IteratorResult<T, TReturn>;

  return?(value?: TReturn): IteratorResult<T, TReturn>;

  throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
}
```

- `generators` это особый вид функции создан для создания легких перебираемых объектов
- `generators` отлично работает с `for..of`
- `generators` возвращает грубо говоря class `Iterable`
- `generators` то есть вам не нужно каждый раз создавать `iterable` `iterator` думать как передавать данные. можно
  просто использовать функцию `generators`
- `generators` грубо говоря является оберткой. то есть сама `asterisk *` говорит нам что это будет оберткой.
- `generators` создает под капотом специальный `closure(замыкания)` при вызове функции `generators`* создается
  внутреннее
  замыкание. Он сильно отличается от обычного замыкания и имеет огромный потенциал.
- `generators` сам по себе не похож ни на что. ни на `Reference type` ни на `LocalEnvironment`. Это особый вид
  реализации
- `generators` также можно на ходу передавать внутрь аргументы. то есть во время runtime.
- `generators` это готовые endpoint-ы. где при каждом вызове next будет останавливаться до следующего `yield`
- `generators` можно вызывать внутри другой `generators` что делает его нереально крутым и особенным. это
  называется `generator composition`
- `generators` это имеет прямое отношения к функциональному программированию.
- `generators` это смесь switch, closure, local environment, и multiple call function

```js

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z

```
