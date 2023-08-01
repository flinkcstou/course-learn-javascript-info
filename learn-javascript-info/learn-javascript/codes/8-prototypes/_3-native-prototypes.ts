export class _3NativePrototypes {
  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    this.method4();
  }

  method4() {
    function f(a: number, b: number) {
      console.error(a + b);
    }

    //@ts-ignore
    Function.prototype.defer = function(ms: number) {

      const self = this;
      return function(a: number, b: number) {
        setTimeout(() => {
          self(a, b);
        }, ms);

      };

    };


    // @ts-ignore
    f.defer(1000)(2, 2);

  }

  method3() {


    function f() {
      console.error('hello');

    }

    // @ts-ignore
    Function.prototype.defer = function(ms: number) {
      setTimeout(() => {
        this();
      }, ms);
    };

    // @ts-ignore
    f.defer(100)

  }


  method2() {
    /*
    *
    * Изначально в js для каждого примитива встроили [[Prototype]]
    * внизу стоит примеры, как реализовано под капотом
    * */

    /*
    Object.prototype = {toString()}
    let obj ={ __proto__: Object.prototype}

    any create object has default __proto__: Object.prototype

    Function.prototype = {call}

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

  }

  method1() {

    // let object = {} is equal to let object = new Object()

    /*

    ObjectPrototype = {
     constructor()
     valueOf(),
     toString()
    }

    FunctionPrototype = {
    call(),
    bind()
    }

    function Object(){
    Object.create = ()=>{},
    Object.seal = ()=>{}
    }

    function Object(){} // equal to let Object = {__proto__: FunctionPrototype}

    Object.bind() // it's called FunctionPrototype

    let obj = new Object()
    obj.toString // it's called ObjectPrototype

    * */


    /*

     PrototypeFunction = {
      constructor: someFunction,
      apply:()=>{},
      call:()=>{}
      }

      function someFunction(){} // equal to let someFunction = {}
      someFunction.prototype = PrototypeFunction

      someFunction.apply // it's called PrototypeFunction

  * */

    /*
        function createSomeObject(){

        let PrototypeCreateSomeObject = {constructor:createSomeObject}

        this.someProperties = {}
        this.prototype = PrototypeCreateSomeObject

        if(new.target){
        this.__proto__ = prototype
        }
        return  this

        }

        createSomeObject.apply // it's called PrototypeFunction

        var cso = new createSomeObject()

        cso.prototype = {}


    * */

  }
}
