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
    f.defer(100);

  }


  method2() {

  }

  method1() {

  }
}
