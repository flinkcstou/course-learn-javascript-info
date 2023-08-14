export class _1Generators {

  constructor() {
    // this.method1();
    // this.method2();
    this.method3();
  }

  method3() {

    function* rangeGenerator() {
      for (let value = 0; value <= 5; value++) {
        yield value;
      }
    }

    rangeGenerator();

    let range = {

      * [Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
        yield* rangeGenerator();
      }
    };

    for (let i of range) {
      console.error(i);
    }
  }


  method2() {

    for (let i of makeIterator()) {
      console.error(i);
    }

    for (let i of makeIterable()) {
      console.error(i);
    }

    function* makeIterator() {
      yield 1;
    }

    function makeIterable() {
      let once = false;

      const iterator: Iterator<any> = {
        next(...args): IteratorResult<any, any> {
          if (once) {
            return {
              value: undefined,
              done: true
            };
          }
          once = true;
          return {
            value: 1,
            done: false
          };
        }
      };
      const iterable: Iterable<any> = {
        [Symbol.iterator](): Iterator<any> {
          return iterator;
        },
      };
      return iterable;
    }

  }

  method1() {

    for (let i of makeIterator()) {
      console.error(i);
    }

    const makeI = makeIterable();
    console.error(makeIterable()[Symbol.iterator]()[Symbol.iterator]().next());
    for (let i of makeI) {
      console.error(i);
    }


    function* makeIterator() {
      yield 1;
      yield 2;
    }

    function makeIterable() {

      let index = 1;

      const iterator = {
        [Symbol.iterator]() {
          return this;
        },
        next() {

          if (index === 3) {
            return {
              done: true
            };
          }

          return {
            value: index++,
            done: false
          };

        }
      };


      return iterator;
    }

  }
}
