export class PrototypeMethods {
  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    this.method5();
  }

  method5() {

    function Rabbit(name: any) {
      // @ts-ignore
      this.name = name;
    }

    function Asd() {

    }

    // @ts-ignore
    let rabbit = new Rabbit('yellow Rabbit');
    Rabbit.prototype.sayHi = function() {
      console.error(this.name);
    };
    console.error(Rabbit.prototype);
    console.error(Asd.prototype);

    rabbit.sayHi();// yellow Rabbit
    Rabbit.prototype.sayHi(); // undefined
    rabbit.__proto__.sayHi(); // undefined
    Object.getPrototypeOf(rabbit).sayHi(); // undefined


  }

  method4() {

    let dictionary = Object.create(null);

    dictionary.apple = 'Apple';

    Object.defineProperty(dictionary, 'toString',
      {
        enumerable: false,
        value() {
          let keys = '';
          for (let key in this) {
            console.error(key);
            keys += key + ', ';
          }
          return keys;
        }
      },
    );
    Object.defineProperty(dictionary, '__proto__',
      {
        enumerable: false,
        value: '__proto__'
      },
    );

    console.error(JSON.stringify(dictionary));
    console.error(dictionary.toString());
  }

  method3() {
    let animal = {
      eats: true
    };

    let wolf = {
      name: 'wolf'
    };
    let rabbit = Object.create(animal);


    Object.create(animal, Object.getOwnPropertyDescriptors(wolf));
    // rabbit = {
    //   ...wolf,
    //   ...rabbit,
    // }; // not working this way

    console.error(Object.getPrototypeOf(rabbit) === animal);
  }

  method2() {

    let obj = {
      name: 'Object name',
      set fullName(value: any) {
        console.error(value);
      }
    };
    Object.setPrototypeOf(obj, Array.prototype);

    let cloneObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
    console.error(cloneObj);

    cloneObj.fullName = 'sdfsd';

    console.error(Object.getPrototypeOf(cloneObj) == Array.prototype);

  }


  method1() {

    let animal = {
      eats: true
    };
    let rabbit = Object.create(animal); // __proto__ = animal

    console.error(rabbit.eats); // true

    console.error(Object.getPrototypeOf(rabbit) === animal); //true

    rabbit.eats = false;
    console.error(rabbit); // eats = false
    console.error(animal); // eats = true

  }

}
