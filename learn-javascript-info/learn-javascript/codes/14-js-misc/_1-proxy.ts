export class _1Proxy {
  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    // this.method5();
    // this.method6();
    // this.method7();
    this.method8();
  }

  method8() {
    function makeObservable(target) {

      target['handlers'] = [];

      target.observe = function(callB: (key, value) => void) {
        target.handlers.push(callB);
      };

      return new Proxy(target, {
        set(target: any, p: string | symbol, newValue: any, receiver: any): boolean {

          target['handlers'].forEach((callback) => callback(p, newValue));
          return Reflect.set(target, p, newValue, receiver);
        }
      });
      /* ваш код */
    }

    let user: any = {};

    user = makeObservable(user);

    user.observe((key, value) => {
      console.error(`SET ${key}=${value}`);
    });
    user.observe((key, value) => {
      console.error(`SET ${key}=${value}`);
    });

    user.name = 'John'; // выводит: SET name=John
  }

  method7() {
    function makeObservable(target) {

      let callback = undefined;
      target.observe = function(callB: (key, value) => void) {
        callback = callB;
      };

      return new Proxy(target, {
        set(target: any, p: string | symbol, newValue: any, receiver: any): boolean {
          if (callback) {
            callback(p, newValue);
          }
          return Reflect.set(target, p, newValue, receiver);
        }
      });
      /* ваш код */
    }

    let user: any = {};

    user = makeObservable(user);

    user.observe((key, value) => {
      console.error(`SET ${key}=${value}`);
    });

    user.name = 'John'; // выводит: SET name=John

  }

  method6() {
    let array = [1, 2, 3];

    array = new Proxy(array, {
      get(target: number[], p: string, receiver: any): any {
        if (+p >= 0) {
          return Reflect.get(target, p, receiver);
        } else {
          return Reflect.get(target, target.length + (+p), receiver);

        }
      }
    });

    console.error(array[-1]);
  }

  method5() {
    let user: any = {
      name: 'John'
    };

    function wrap(target) {
      return new Proxy(target, {

        get(target: any, p: string | symbol, receiver: any): any {
          if (target[p]) {
            // @ts-ignore
            let value = Reflect.get(...arguments);
            return typeof value == 'function' ? value.bind(target) : value;
          }
          throw new Error('sdf');
        }
        /* ваш код */
      });
    }

    user = wrap(user);

    alert(user.name); // John
    alert(user.age); // Ошибка: такого свойства не существует
  }

  method4() {

    let str = new String('sdf');

    str = new Proxy(str, {
      get(target: String, p: string | symbol, receiver: any): any {
        console.error(target, p, receiver);
        return target[p].bind(target);
      }
    });

    console.error(str.toString());
    // console.error(str[0]);
    console.error(str);
  }


  method3() {
    let numbers = [];

    numbers = new Proxy(numbers, {
      set(target: any[], p: string | symbol, newValue: any, receiver: any): boolean {
        if (typeof newValue === 'number') {
          target[p] = newValue;
          return true;
        }
        return false;
      }
    });

    numbers.push(1);
    numbers.push(2);
    console.error(numbers);

    console.error(numbers.length);
    numbers.push('3'); // return error

  }

  method2() {
    let dictionary = {
      'Hello': 'Hola',
      'Bye': 'Adiós'
    };

    dictionary = new Proxy(dictionary, {
      get(target: { Hello: string; Bye: string }, p: string | symbol, receiver: any): any {
        if (target[p]) {
          return target[p];
        }
        return p;
      }
    });


    console.error(dictionary['Hello']); // Hola
    console.error(dictionary['sdf sdf']); // sdf sdf
  }

  method1() {

    // возвращать 0 в случае если нет такого элемента
    let numbers = [0, 1, 2];


    numbers = new Proxy(numbers, {
      get(target: number[], p: string | symbol, receiver: any): any {
        if (target[p]) {
          return target[p];
        }
        return 0;
      }
    });

    console.error(numbers[1]); // 1
    console.error(numbers[123]); // 0
  }


}
