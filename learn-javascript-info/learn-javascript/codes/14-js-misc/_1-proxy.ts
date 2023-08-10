export class _1Proxy {
  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    this.method4();
  }

  method4() {

    let str = new String('sdf');

    str = new Proxy(str, {
      get(target: String, p: string | symbol, receiver: any): any {
        console.error(target, p, receiver);
        return target[p].bind(target)
      }
    });

    console.error(str.toString())
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
