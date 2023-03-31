export class PropertyDescriptors {

  name = 'John';

  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    this.method5();

  }

  method5() {
    let user = {
      name: 'John'
    };

    Object.defineProperty(PropertyDescriptors, 'name', {
      writable: false
    });

    let userClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

    let ownPropertyDescriptors = Object.getOwnPropertyDescriptors(userClone);
    console.error(JSON.stringify(ownPropertyDescriptors));
  }

  method4() {

    let propertyDescriptors = new PropertyDescriptors();

    Object.defineProperty(propertyDescriptors, 'name', {
      writable: false
    });

    // propertyDescriptors.name = 'fsdfds'; //get error
    // because writable attributes  is false


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

    // user.name = 'sdfsdfsd' // get error
    // because writable attributes  is false

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

  }
}
