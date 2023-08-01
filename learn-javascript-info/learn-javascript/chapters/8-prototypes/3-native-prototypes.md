### Встроенные прототипы(Native prototypes)

https://learn.javascript.ru/native-prototypes

### Встроенные прототипы

![img.png](../assets/native-prototypes.png)

      /*
    *
    * Изначально в js для каждого  типа встроили [[Prototype]]
    * внизу стоит примеры, как реализовано под капотом
    * */

    /*
    Object.prototype = {toString()}
    let obj ={ __proto__: Object.prototype}

    any create object has default __proto__: Object.prototype

    Function.prototype = {call(), apply()}

    function someFunction(){}
    // someFunction need to see like object
    someFunction.__proto__ = Function.prototype

    let arr = []
    // arr need to see like object
    arr.__proto__ = Array.prototype

    * */

    /*
    * Случай когда нужно создавать свой [[Prototype]]
    * через new Function и через object
    * */

    /*

    ConstructorPrototype = {constructor: f };
    customObject.prototype = ConstructorPrototype
    function customObject(){
    let this = {}
    this.someProperty = 234

    if(new.target){
     this.__proto__ = customObject.prototype
    }
    return this
    }
    let co = new customObject();
    new co.constructor() //it's called ConstructorPrototype

    let user = {name, __proto__:Object.prototype};


    let admin= {__proto__:user};
    admin.name // it's called ConstructorPrototype


    * */

>

    Есть функции Object, Function, Array, Map итд. У всех у них переписаны свойства prototype
    но при создания обычной функции function f(){}  prototype равен ConstructorPrototype = {constructor:f}
    и дальше если мы хотим изменить мы можем сами поменять prototype также как и у встроенных функции  Object, Function, Array, Map итд.
    обычно встроенный prototype ConstructorPrototype переписывают если мы хотим через функцию создать новый объект -> new f()

>

### Есть два способа скопировать методы

1) obj.join = Array.prototype.join;
2) [].join.call(arguments)
