### Деструктурирующее присваивание(Destructuring assignment)

https://learn.javascript.ru/destructuring-assignment

- `terminology`
    - деструктуризация -destructing
    - остаточный параметр - the rest parameter

**array destructing**

```

let [firstName, secondName] = ['Nazar', 'Abu']

// is equal to 
let firstName = arr[0];
let surname = arr[1];

// if you want skip value, just using commas

let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

firstName; // Julius
title; // Consul


```

**Destructing work with any object which has `iterable`**

```

let [a, b, c] = "abc" // ['a', 'b', 'c']

let [one, two , three]  = new Set([1, 2, 3])

let [oneMap, twoMap] = new Map([['one', 'oneValue'], ['two', 'twoValue']])

```

**Assign to anything at the left-side**

```
let user = {};
[user.name, user.surname] = "John Smith".split(' ');
[user.name, user.surname] = ['a', 'b', 'c']
[user.name, user.surname] = new Set([1, 2, 3])


let name, surname;

[name, surname] = "John Smith".split(' ');

```

**The rest parameter‘…’**

- остаточный параметр берет оставшиеся значения

```
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

rest.length // 2
```

**Default values**

- Значения по умолчанию будут вызываться только если с правой стороны не будет значения. Это значит если мы по умолчанию
  присвоим вызов функции, то функция вызовет только в том случае если с правой стороны отсутствует значения

```
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];
```

**Object destructuring**

```
let {var1, var2} = {var1:…, var2:…} // basic syntax
let {prop1:varName1, prop2: varName2} = {prop1:…, prop2:…} // basic syntax
```

```js run

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;
```

```js

let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;
w; // 100
h; // 200
title; // 'Menu'
```

**Nested destructuring**

```js 
// формула такая для js
// let {prop  = default, ...rest} = object
// let {prop : varName = default, ...rest} = object
// let {prop : {prop2 = default2} = default, ...rest} = object
// let {prop : {prop2 : varName2 = default2} = default, ...rest} = object
// console.error(prop, varName)
// console.error(prop2, varName2)

let {
  a: {
    a: {
      c = 'lyalyalya'
    } = {c: 'cccc'}
  } = {}
} = {};

console.error(c);


```

**Smart function parameters**

```js
// формула такая для js 
// function({prop  = default, ...rest} = object){}
// function({prop : varName = default, ...rest} = object){}
// function({prop : {prop2 = default2} = default, ...rest} = object){}
// function({prop : {prop2 : varName2 = default2} = default, ...rest} = object){}

```

- если мы хотим сначала деструктурировать, а потом опять собрать, то это просто

```js

function method6({
                   title = 'fdsfds',
                   items = [],
                   size: {
                     width = '11',
                     height = '111'
                   }
                 }: OptionI) {

  // если мы хотим сначала деструктурировать в parameter-ах, а потом опять собрать, то это просто
  // создаем новый объект где все значения проставляем вручную и можем дальше передавать

  const optionI: OptionI = {
    title, items, size: {
      width,
      height
    }
  };
  console.error(optionI);
}

method6()
method6({})

```
