export class _1PropertyDescriptors {


  name = 'John';

  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    // this.method5();
    this.method6();
  }

  method7() {

    const fullDay: any = {};

    Object.defineProperties(fullDay, {
      '_hours': {
        value: 0,
        configurable: true,
        writable: false
      },
      'hours': {
        get() {
          return this._hours;
        },
        set(value) {
          if (value >= 0 && value <= 24) {
            Object.defineProperty(this, '_hours', {value});
          }
        }
      }
    });

    console.log(fullDay.hours); // 0
    fullDay.hours = 24;
    console.log(fullDay.hours); // 24
    fullDay.hours = 25;
    console.log(fullDay.hours); // 24
    fullDay._hours = 25;
    console.log(fullDay.hours); // Uncaught TypeError: Cannot assign to read only property '_hours' of object '#<Object>'
  }

  method6() {

    function User(name, birthday) {
      this.name = name;
      this.birthday = birthday;

      Object.defineProperty(this, 'age', {
        get(): any {
          let todayYear = new Date().getFullYear();
          return todayYear - this.birthday.getFullYear();
        }
      });
    }

  }

  method5() {
    let user = {
      name: 'John'
    };

    let userClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

    let ownPropertyDescriptors = Object.getOwnPropertyDescriptors(userClone);
    console.error(JSON.stringify(ownPropertyDescriptors));
  }

  method4() {

    let propertyDescriptors = new _1PropertyDescriptors();

    Object.defineProperty(propertyDescriptors, 'name', {
      writable: false
    });

    propertyDescriptors.name = 'fsdfds'; //get error // because writable attributes  is false


  }

  method3() {
    let user = {
      name: 'John'
    };
    Object.defineProperty(user, 'name', {
      writable: false
    });

    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(user, 'name');

    console.error(JSON.stringify(ownPropertyDescriptor));

    user.name = 'sdfsdfsd'; // get error // because writable attributes  is false

  }

  method2() {
    let user = {};


    Object.defineProperty(user, 'name', {
      value: 'John'
    });

    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(user, 'name');

    console.error(JSON.stringify(ownPropertyDescriptor));
  }

  method1() {

    let user = {
      name: 'John'
    };

    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(user, 'name');

    console.error(JSON.stringify(ownPropertyDescriptor));
    /* дескриптор свойства:
    {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
    }
    */

  }
}
