export class _6Iterable {

  constructor() {
    this.method1();
    this.method2();
    this.method3();


  }

  method3() {
    // явный вызов итерируемых объектов

    let str = 'hello';

    let iterator = str[Symbol.iterator]();

    while (true) {
      let result = iterator.next();
      if (result.done) {
        break;
      }
      console.error(result.value);
    }

  }

  method2() {

    let range = {

      current: 0,
      from: 1,
      to: 5,
      next() {
        if (this.current <= this.to) {
          return {done: false, value: this.current++};
        }
        return {done: true};
      },
      [Symbol.iterator]() {
        this.current = this.from;
        return this;
      },

    };

    for (let v of range) {
      console.error(v);
    }
    for (let v of range) {
      console.error(v);
    }
  }

  method1() {

    let range = {
      from: 1,
      to: 5
    };


    range[Symbol.iterator] = function() {

      return {
        current: this.from,
        last: this.to,
        next() {
          if (this.current <= this.last) {
            return {done: false, value: this.current++};
          }
          return {done: true};
        }
      };
    };

    // @ts-ignore
    for (let v of range) {
      console.error(v);
    }
  }


}
