export class FPrototype {


  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    this.method5();

  }

  method5() {

  }

  method4() {

    // let user23 = {
    //   key1:'key1',
    //   key2: this.key1+ 'fsdfds'
    //
    // } // not working


    let user = {
      key1: 'key1',
      key2() {
        this.key1 + 'fsdfsd';
      },
    };
    let user1: any = {
      key1: 'key1',
      key2: undefined as any,
      init() {
        this.key2 = this.key1 + 'sdfds';
        return this;
      }
    }.init();
    console.error(user1);

    function user2() {
      //@ts-ignore
      this.key1 = 'key1';

      //@ts-ignore
      this.key2 = this.key1 + 'sdfds';

    }

    // @ts-ignore
    let user3 = new user2();
    console.error(user3);
  }

  method3() {


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
  }

  method2() {
    let animal = {
      eats: true,
    };

    function Rabbit(name: any) {

      /*
      let this = {}
      this.name = name
      if(Rabbit.prototype){
      this.__proto__ = Rabbit.prototype
      }
      return this
      * */

      //@ts-ignore
      this.name = name;
    }

    Rabbit.prototype = animal;

    // @ts-ignore
    let rabbit = new Rabbit('lolo');

    console.error(rabbit.eats);

  }

  method1() {
    let user: any = {
      name: 'John',
      somObject: {
        innerObject: undefined
      }

    };

    user.somObject.innerObject = user;

    console.error(user);

  }

}
