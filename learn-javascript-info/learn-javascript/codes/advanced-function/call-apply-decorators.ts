export class CallApplyDecorators {

  constructor() {

    // https://javascript.plainenglish.io/writing-polyfills-for-call-apply-and-bind-methods-in-javascript-13b4ba313273

      // this.method1();
      // this.method2();
      // this.method3();
      // this.method4();
      // this.method5();
      // this.method6();
      // this.method7();
      // this.method8();
      this.method9();
  }

  method9() {

    let car = {
      name: 'toyota'
    };

    function logger(...x: any) {
      console.error(...x);
    }

    function getName(...x: any) {
      logger(x);
      // @ts-ignore
      console.error(this.name);
    }

    function bind(context: any, func: any, ...args: any) {
      function callApply(...a: any) {

        return func.apply(context, [...args, ...a]);
      }

      return callApply;
    }

    let name = bind(car, getName, 'alloha');

    name('asdfsf');

    getName.myBind = function(context: any, ...args: any) {
      const symbol = Symbol();
      const self = this;

      function callApply(...args1: any) {
        context[symbol] = self;
        const result = context[symbol](...args, ...args1);
        delete context[symbol];
        return result;
      }

      return callApply;


    };

    let name1 = getName.myBind(car, 'alloha');
    name1('safasdf');

  }

  method8() {

    function logger(x: any) {
      console.error(x);
    }

    function throttle(func: (x: any) => any, timer: number) {

      let isThrottled = false,
        savedArgs: any = undefined,
        savedThis: any = undefined;

      function callApply(...args: any) {

        if (isThrottled) {

          // @ts-ignore
          savedThis = this;
          savedArgs = args;
          return;
        }

        // @ts-ignore
        func.apply(this, args);
        isThrottled = true;

        setTimeout(() => {


          isThrottled = false;
          if (!!savedArgs) {
            callApply.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;

          }

        }, timer);


      }

      return callApply;
    }


    // f1000 передаёт вызовы f максимум раз в 1000 мс
    let f1000 = throttle(logger, 1000);

    f1000(1); // показывает 1
    f1000(2); // (ограничение, 1000 мс ещё нет)
    f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

  }

  method7() {

    function logger(x: any) {
      console.error(x);
    }

    function debounce(func: (x: any) => any, timer: number) {
      let isCooldown = false;

      function callApply(...args: any) {
        if (isCooldown) {
          return;
        }
        // @ts-ignore
        func.apply(this, args);
        isCooldown = true;
        setTimeout(() => isCooldown = false, timer);
      }


      return callApply;
    }

    let f = debounce(logger, 1000);

    f(1); // выполняется немедленно
    f(2); // проигнорирован

    setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
    setTimeout(() => f(4), 1100); // выполняется
    setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
  }

  method6() {
    function f(x: any) {
      console.error(x);
    }

    function delay(func: (...params: any) => any, timer: number) {

      function callApply(...args: any) {
        setTimeout(() => {
          // @ts-ignore
          func.apply(this, args);
        }, timer);
      }

      return callApply;

    }

// создаём обёртки
    let f1000 = delay(f, 1000);
    let f1500 = delay(f, 1500);

    f1000('test'); // показывает "test" после 1000 мс
    f1500('test'); // показывает "test" после 1500 мс
  }

  method5() {


    function work(a: any, b: any) {
      console.error(a, b);
    }

    function spy(func: (a: any, b: any) => any) {


      function applyCall(a: any, b: any) {
        applyCall.calls.push([a, b]);
        // @ts-ignore
        return func.apply(this, [a, b]);
      }

      // @ts-ignore
      applyCall.calls = [];

      return applyCall;

    }

    // @ts-ignore
    work = spy(work);

    work(1, 2); // 3
    work(4, 5); // 9
    // @ts-ignore
    for (let args of work.calls) {
      console.error('call:' + args.join()); // "call:1,2", "call:4,5"
    }


  }

  method4() {

    var asf = {
      0: '0',
      1: '1',
      length: 2
    };


    let arr: any[] = [];


    // @ts-ignore
    arr.join.myCall = function(context: any) {

      const symbol = Symbol();

      context[symbol] = this;

      const result = context[symbol]();
      delete context[symbol];
      return result;

    };

    console.error(arr.join.call(asf));
    // @ts-ignore
    console.error(arr.join.myCall(asf));


  }

  method3() {

    // https://habr.com/ru/post/464163/

    let car = {
      carName: 'Toyota'
    };

    // @ts-ignore
    function getCarName() {
      // @ts-ignore
      console.error(this.carName);
    }

    getCarName.myCall = function(context: any) {

      const symbol = Symbol();


      context[symbol] = this;

      const result = context[symbol]();
      delete context[symbol];
      return result;

    };


    getCarName.myCall(car);


    /*



    let object = {
    objectFunction: objectFunction
    }

    let objectFunction = function(){
          this
    }
    objectFunction.someProperties = {}

    object.objectFunction() // object
    object.objectFunction.someProperties


    objectFunction.someProperties // this == objectFunction



    * */


  }


  method2() {


    function asdf() {

      const name = 'asdf';
      let worker = {
        someMethod() {
          return 1;
        },
        slow(x: number): number {
          console.error('some logic', x);
          console.error(name);
          return x * this.someMethod();
        }

      };
      return worker;

    }

    let worker = asdf();


    function cachingDecorator(func: (x: number) => number) {

      function callApply(x: number) {
        if (!map.has(x)) {
          // @ts-ignore
          map.set(x, func.call(this, x));
        }
        return map.get(x);
      }

      const map = new Map();
      return callApply;

    }


    worker.slow = cachingDecorator(worker.slow);
    worker.slow(3);


  }

  method1() {

    let slow = function slow(x: any) {
      console.error('some logic', x);
    };

    function cachingDecorator(func: (x: any) => any) {

      function callApply(x: any) {

        if (!map.has(x)) {
          map.set(x, func(x));
        }
        return map.get(x);
      }

      const map = new Map();
      return callApply;
    }

    // @ts-ignore
    slow = cachingDecorator(slow);
    slow('sdfss');

  }
}
