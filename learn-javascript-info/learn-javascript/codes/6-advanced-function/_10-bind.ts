export class _10Bind {
  constructor() {

    // this.method1();
    // this.method2();
    // this.method3();
    this.method4();

  }

  method4() {
    function partial(func: any, ...argsBound: any) {
      return function(...args: any) {
        // @ts-ignore
        return func.call(this, ...argsBound, ...args);
      };
    }

    let user = {
      name: 'John',
      say(time: any, phrase: any) {
        console.error(time, this.name, phrase);
      },
      sayNow: (...args: any) => {
        console.error(this);
      }
    };

    user.sayNow();

    user.sayNow = partial(user.say, 0);

    user.sayNow('hello');

  }

  method3() {
    function mul(a: number, b: number) {
      console.error(a * b);
    }

    let double = mul.bind(null, 2);
    double(3);
  }

  method2() {
    let user = {
      name: 'Vasya',
      sayHi() {
        console.error('this:', this.name);
      }
    };

    function bind(context: any, func: any, ...args: any) {
      return function(...args1: any) {
        return func.apply(context, [...args, args1]);
      };
    }

    let sayHi = user.sayHi.bind(user);
    let sayHi1 = () => user.sayHi();
    setTimeout(sayHi, 100);
    setTimeout(sayHi1, 100);

  }

  method1() {

    let user = {
      name: 'Vasya'
    };

    function getName() {
      // @ts-ignore
      console.error(this.name);
    }

    let name = getName.bind(user);
    name();
  }
}
