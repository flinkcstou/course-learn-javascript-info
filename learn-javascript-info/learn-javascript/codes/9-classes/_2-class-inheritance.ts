export class _2ClassInheritance {

  constructor() {

    // this.method1();
    // this.method2();
    // this.method3();
    this.method4();
  }

  method4() {



    // @ts-ignore
    class Rabbit extends Array {

      constructor() {
        super();
        // @ts-ignore
        console.error(this.length);
      }
    }

    new Rabbit();

  }

  method3() {
    class Animal {
      name = 'animal';

      getName() {
        console.error(this.name);
      }

      constructor() {
        this.getName();
      }
    }

    class Rabbit extends Animal {
      override name = 'rabbit';

      override getName() {
        console.error(this.name);
      }

      constructor() {
        super();
      }
    }

    new Animal(); // animal
    new Rabbit(); // animal

  }

  method2() {

    function f(phrase: any) {
      return class {
        sayHi() {
          console.error('sayHi' + phrase);
        }
      };
    }

    class User extends f('Private') {

    }

    let user = new User();
    user.sayHi();

  }

  method1() {

    class Animal {
      speed: any;
      name: any;

      constructor(name: any) {
        this.speed = 0;
        this.name = name;
      }

      run(speed: any) {
        this.speed = speed;
        console.error('run');
      }

      stop() {
        this.speed = 0;
        console.error('stop');
      }

    }

    let animal = new Animal('Frog');

    class Rabbit extends Animal {
      hide() {
        console.error('hide ');
      }

    }

    let rabbit = new Rabbit('Rabbit');

    console.error(rabbit);
    console.error(Object.getOwnPropertyNames(Rabbit));// constructor/ name/ length
    console.error(Object.getOwnPropertyNames(Rabbit.prototype));// constructor/ name/ length
    // @ts-ignore
    console.error(Object.getOwnPropertyNames(Rabbit.prototype.__proto__));
    console.error(Object.getOwnPropertyNames(Animal.prototype));

    /*
    Object.prototype = {toString, __proto__:null}
    Function.prototype  = {... , __proto__: Object.prototype}

    1) Empty class __proto__ = Function.prototype
    2) Empty.prototype = ConstructorPrototype
    3) Instance Empty class __proto = ConstructorPrototype
    4) Animal class __proto__ = Function.prototype
    5) Animal.prototype = {...ConstructorPrototype, run, stop, __proto__:Object.prototype}
    6) Instance Animal class __proto__ = Animal.prototype
    7) Rabbit class __proto__ = Function.prototype
    8) Rabbit.prototype = {...ConstructorPrototype, hide, __proto__:Animal.prototype}
    9) Instance Rabbit class __proto__ = Rabbit.prototype


    * */

  }

}
