export class ClassInheritance {

  constructor() {

    // this.method1();
    this.method2();
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
    console.error(Object.getOwnPropertyNames(Rabbit));
    // @ts-ignore
    console.error(Object.getOwnPropertyNames(Rabbit.prototype.__proto__));


  }

}
