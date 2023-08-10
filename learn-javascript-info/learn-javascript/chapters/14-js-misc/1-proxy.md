### Proxy и Reflect(Proxy and Reflect)

https://learn.javascript.ru/proxy

- Объект `Proxy` «оборачивается» вокруг другого объекта и может перехватывать (и, при желании, самостоятельно
  обрабатывать) разные действия с ним, например чтение/запись(read, write) свойств(property) и другие. Далее мы будем
  называть такие объекты `proxy`.

```js
let proxy = new Proxy(target, handler);
```

- `target` – это объект, для которого нужно сделать прокси, может быть чем угодно, все типы данных, инстанция класса,
  функция.
- `handler` - конфигурация прокси: объект с «ловушками» («traps»): методами, которые перехватывают разные операции,
  например, ловушка get – для чтения свойства из target, ловушка set – для записи свойства в target и так далее.

- `handler` методы
    - get
    - set
    - has
    - deleteProperty
    - apply
    - construct
    - getPrototypeOf
    - setPrototypeOf
    - isExtensible
    - preventExtensions
    - defineProperty
    - getOwnPropertyDescriptor
    - ownKeys


