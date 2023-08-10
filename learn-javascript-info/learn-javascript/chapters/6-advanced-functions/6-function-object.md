### Объект функции, NFE(Function object, NFE)

https://learn.javascript.ru/function-object

- `terminology`
    - das

- `definition`
    - das

получить название функции (The “name” property)

        function getName(){}
        
        getName.name // 'getName'

получить количество аргументов (The “length” property)
-There is another built-in property “length” that returns the number of function parameters, for instance:

        function getName(name, surname){}
        
        getName.length // 2

функция это и есть по сути объект, но с большими возможностями

для функции можно задавать свойства как и y объекта

        function getName(){
        
        }
        
        getName.surname ='abu'

также можно и внутри функции объявить, но свойства появится только при вызове
и каждый раз будет перезаписываться

        function getName(){
        getName.surname ='nabu baby'
        }
        getName.surname ='abu'
        
        getName()
        
        console.error(getName.surname) // 'nabu baby'

- `Named Function Expression` = `NFE`

            let say = function getName(){}
            let say = function(){}
            let say = ()=>{}


- Особенность Function expression то что при объявления функции с именем имя может быть локальной функцией внутри себя

```js
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

- interesting code

```js

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

```

есть два способа создать объект  
это через сам объект или через функцию
1

```js

let name = {
  someProperties: 'someValues'
}
```

2

```js

let name = function () {
  function f() {
  }

  f.someProperties = 'someValues'

  return f
}
```
