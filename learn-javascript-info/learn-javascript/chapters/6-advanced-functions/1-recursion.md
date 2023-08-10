### Рекурсия и стек(Recursion and stack)

https://learn.javascript.ru/recursion

- `terminology`
    - Контекст выполнения, стек - The execution context and stack

- `definition`
    - `Контекст выполнения` – специальная внутренняя структура данных, которая содержит информацию о вызове функции.


- связанный список

```js

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

```

- Альтернативный код для создания:

```js

let list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = {value: 4};

```

- Список можно легко разделить на несколько частей и впоследствии объединить обратно:

```js

let secondList = list.next.next;
list.next.next = null;
```

- Для объединения:

```js

list.next.next = secondList;

```

- Например, для добавления нового элемента нам нужно обновить первый элемент списка:

```js
let list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = {value: 4};

// добавление нового элемента в список
list = {value: "new item", next: list};
```

- Чтобы удалить элемент из середины списка, нужно изменить значение next предыдущего элемента:

```js
list.next = list.next.next;
```
