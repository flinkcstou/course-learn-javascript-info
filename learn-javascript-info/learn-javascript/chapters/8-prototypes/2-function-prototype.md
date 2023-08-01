### F.prototype(F.prototype)

https://learn.javascript.ru/function-prototype


**F.prototype**

Создания объекта через функцию конструктор

Function.prototype
Object.prototype

function Rabbit(){
Rabbit.prototype
let this = {}

}



### F.prototype

> как работает F.prototype

       /*
    *
    * let user = {name:'name'}
    * let admin = {__proto__:user}
    * set __proto__(value){
    * [[Prototype]]= value
    * }
    *
    * Object.constructor = Object
    *
    * let initialPrototype = {constructor: Rabbit}
    * Rabbit.prototype = initialPrototype
    * set initPrototype(){
    * [[Prototype]] = this.prototype
    * }
    * rabbit = new Rabbit()
    * new rabbit.constructor() // it's Rabbit constructor
    *
    * Rabbit.prototype = user
    * setInitPrototype(){
    * [[Prototype]] = this.prototype
    * }
    * rabbit = new Rabbit();
    * new rabbit.constructor() // it's Object constructor
    *
    * */

    /*
    Rabbit.prototype = animal
    const rabbit = new Rabbit()

    InitConstructor = {constructor: Rabbit}
    Rabbit  --> constructor --> Rabbit
    Rabbit  --> prototype --> animal
                               ^
                               | [[Prototype]]
                               |
                               rabbit

    * */


    /*
    Rabbit.prototype = {constructor: Rabbit }
    const rabbit = new Rabbit()

    InitConstructor = {constructor: Rabbit}
    Rabbit  --> constructor --> Rabbit
    Rabbit  --> prototype --> InitConstructor
                               ^
                               | [[Prototype]]
                               |
                               rabbit


    * */

