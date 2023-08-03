### Прототипное наследование(Prototypal inheritance)

https://learn.javascript.ru/prototype-inheritance

- `terminology`
    - обычное свойство - regular property
    - наследование - inheritance

- `definition`
    - dfsd

- `external link`
    - https://www.patterns.dev/posts/prototype-pattern
    - https://www.youtube.com/watch?v=cTlxzxsFbDQ&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

- `code`
    - [code](../../codes/8-prototypes/_1-prototype-inheritance.ts)

**javascript реализован через прототипное наследования**

1. у каждого объекта есть свойство **__ proto __** = **[[Prototype]]**
2. При создания объекта через **{}**, его **__ proto __** равен **Object.prototype**
3. **proto** может быть null либо объектом
4. через **proto** можем достучаться до методов и свойств объекта на который он ссылается
5. **proto** не изменяет **this**
6. в **proto** свойства
    1. читать можем
    2. удалять не можем
    3. присваивать значения(assignment operator) не можем у **proto**. если попытаемся, то он нам создаст свойства у
       самого объекта
    4. Примитивные свойства менять значения не можем(так как это assignment operator) у **proto**. если попытаемся, то
       он нам создаст свойства у самого объекта
    5. Объекты свойства менять значения можем(nested object var obj= {nestedObj:{}}) у **proto**  , хотим его свойства
       поменять, то у ссыллающего объекта
       изменится свойства объекта. потому что это будет работать как ссылка, а не как примитив

7. **proto** работает как linkedList если у ссылающего объекта есть свой proto то он дальше начинает искать в
   этом **proto** и так пока **proto** не станет **null**

**Особенности**

1. `__proto__` это getter setter для [[Prototype]]
2. `Object.getPrototypeOf(obj)`, `Object.setPrototypeOf(obj)`  это альтернатива
3. `obj.hasOwnProperty(key)` это проверка есть ли точно свойства(property) у объекта
4. `for(let prop in obj)` пробегается по свойствам объекта и по свойствам [[Prototype]]. Если у свойства(property) стоит
   дескриптор(descriptors)(enumerable=false), то не будет пробегаться по этим свойствам

**Пример**

1.

```js
let obj = {} // [[Prototype]] = Object.prototye
```

2.

```js 
let obj = {}
obj.__proto__ = Object.prototype
```

3.

```js
let obj = {}
obj.__proto__ = null
obj.toString() // not working, because proto is null

```

4.

```js
let obj = {name: 'objName'} //   [[Prototype]] == Object.prototype
let animal = {__proto__: obj} // [[Prototype]] = obj
console.error(animal.name) // 'objName'
```

5.

```js
let obj = {name: 'objName', inner: {name: 'innerName'}} //   [[Prototype]] == Object.prototype
let animal = {__proto__: obj} // [[Prototype]] = obj
console.error(animal.name) // objName
delete animal.name // can't
animal.name = 'animalName';
console.error(obj.name) // objName
console.error(animal.name) // animalName
animal.inner.name = 'AnimalInnerName' // we changed nested object property so it's changed of original object, so js will not create a new nested object for animal object
console.error(obj.inner.name) // AnimalInnerName
console.error(animal.inner.name) // AnimalInnerName
```

7.

```js
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

pockets.glasses // 1 [[Prototype]] = bed | bed[[Prototype]] =table | table[[Prototype]] = head | head[[Prototype]] = Object.prototype 
pockets.glasses2 // not found [[Prototype]] = bed | bed[[Prototype]] =table | table[[Prototype]] = head | head[[Prototype]] = Object.prototype 
```

      
