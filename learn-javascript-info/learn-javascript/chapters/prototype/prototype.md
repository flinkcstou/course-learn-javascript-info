**Prototypal inheritance**
**Прототипное наследование**

javascript реализован через прототипное наследования

1. у каждого объекта есть свойство **__ proto __** = **[[Prototype]]**
2. При создания объекта через **{}**, его **__ proto __** равен **Object.prototype**
3. **proto** может быть null либо объектом
4. через **proto** можем достучаться до методов и свойств объекта на который он ссылается
5. **proto** не изменяет **this**
6. в **proto** свойства
    1. читать можем
    2. удалять не можем
    3. присваивать значения не можем у **proto**. если попытаемся, то он нам создаст свойства у самого объекта
    3. Примитивные свойства менять значения не можем у **proto**. если попытаемся, то он нам создаст свойства у самого
       объекта
    5. Объекты свойства менять значения можем у **proto**  , хотим его свойства поменять, то у ссыллающего объекта
       изменится
       свойства объекта

7. **proto** работает как linkedList если у ссылающего объекта есть свой proto то он дальше начинает искать в
   этом **proto** и так пока **proto** не станет null

1

      let obj = {} [[Prototype]] = Object.prototye

2

      let obj = {}
      obj.__proto__ = Object.prototype

3

      let obj = {}
      obj.__proto__ = null 
      obj.toString() // not working, because proto is null

4

      let obj = {name:'objName'} //   [[Prototype]] == Object.prototype
      let animal = {__proto__:obj} // [[Prototype]] = obj
      console.error(animal.name) // 'objName'

6

      let obj = {name:'objName', inner: {name:'innerName'}} //   [[Prototype]] == Object.prototype
      let animal = {__proto__:obj} // [[Prototype]] = obj
      console.error(animal.name) // objName
      delete animal.name // can't
      animal.name = 'animalName';
      console.error(obj.name) // objName
      console.error(animal.name) // animalName
      animal.inner.name = 'AnimalInnerName'
      console.error(obj.inner.name) // AnimalInnerName
      console.error(animal.inner.name) // AnimalInnerName

7

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

**F.prototype**

Создания объекта через функцию конструктор

Function.prototype
Object.prototype

function Rabbit(){
Rabbit.prototype
let this = {}

}
