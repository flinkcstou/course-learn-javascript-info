### Остаточные параметры и оператор расширения(Rest parameters and spread syntax)

https://learn.javascript.ru/rest-parameters-spread-operator

- `terminology`
    - Остаточные параметры - rest parameter
    - Оператор расширения -Spread syntax

- `definition`
    - `Остаточные параметры` могут быть обозначены через три точки .... Буквально это значит: «собери оставшиеся
      параметры и положи их в массив».
    - `Оператор расширения` он просто пробегается по итерируемому объекту

- `external link`
    - https://www.youtube.com/watch?v=SGeQ-U0G7dE&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=15&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

- если троеточие `...` стоит с левой стороны от оператора приравнивания(assignment `=`) то это `rest parameter`. А если
  с правой стороны, то это `spread syntax`
- если запись идет в переменную, то это `rest parameter`. Если читают из переменной, то это `spread syntax`

```js

//rest parameter

let {a, ...rest} = {a: 'asdsa', b: 'sdfsd', c: 'fsdfds'} // rest.b, rest.c
let [name, lastName, ...rest] = ['sdfdsf', 'fdsfds', 'fdsfsd', 'fsdfs']

function logs(...rest) {
}


//spread syntax 

let arr = ['sdfas', 'sdfds']
let a = [...arr]
logs(...a)


```

- **spread syntax `...` works with any object which has `iterator`**
- Посмотрим, что происходит. Под капотом оператор расширения использует итераторы, чтобы перебирать элементы. Так же,
  как это делает for..of.

**Spread syntax work with any object which has `iterable`**

```js
let abc = "abc" // ['a', 'b', 'c']

let set = new Set([1, 2, 3])

let map = new Map([['one', 'oneValue'], ['two', 'twoValue']])

let abcArray = [...abc]
let setArray = [...set]
let mapArray = [...map]

function getSpread() {
}

getSpread(...abc);
getSpread(...set);
getSpread(...map);


```

- если это вызов функции и вы видите `...args` то это `spread syntax`  `log(...args)`
- если это объявления функции и вы видите `...parameters` то это 'rest parameters' function `logs(...parameters)`
