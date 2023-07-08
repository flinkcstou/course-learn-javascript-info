export class _2Recursion {

  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
  }


  method3() {
    let list: any = {value: 1};
    list.next = {value: 2};
    list.next.next = {value: 3};
    list.next.next.next = {value: 4};

    // 1)
    // let second = list.next;
    //
    // list.next = list.next.next;
    //
    // second.next = list;
    //
    // console.error(JSON.stringify(second));

    // 2)

    let second = list.next;

    list.next = list.next.next;

    // second.next = list;
    // list =second;
    list = {value: second.value, next: list};

    console.error(JSON.stringify(list));

  }


  method2() {
    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };


    function getIterator() {
      // @ts-ignore
      console.error(this.list);

      // ...она возвращает объект итератора:
      // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
      return {
        // @ts-ignore

        current: this.list,
        // 3. next() вызывается на каждой итерации цикла for..of
        next() {
          console.error(this.current);
          // @ts-ignore
          console.error(this.list);
          // 4. он должен вернуть значение в виде объекта {done:.., value :...}
          const cur = this.current;
          if (cur?.value) {
            this.current = cur.next;
            console.error('cur', cur);
            return {done: false, value: {cur}};
          }
          return {done: true};
        }
      };
    };

    //@ts-ignore
    list[Symbol.iterator] = getIterator;


    console.error(list);
    // @ts-ignore
    for (let num of list) {
      console.error(num); // 1, затем 2, 3, 4, 5
    }
  }

  method1() {
    let range = {
      from: 1,
      to: 5,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };


    function getIterator() {

      // @ts-ignore
      console.error(this.from);
      // @ts-ignore
      console.error(this.to);// @ts-ignore
      console.error(this.next);
      // ...она возвращает объект итератора:
      // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
      return {
        // @ts-ignore
        current: this.from,
        // @ts-ignore
        last: this.to,

        // 3. next() вызывается на каждой итерации цикла for..of
        next() {
          // 4. он должен вернуть значение в виде объекта {done:.., value :...}
          if (this.current <= this.last) {
            return {done: false, value: this.current++};
          } else {
            return {done: true};
          }
        }
      };
    };

    // @ts-ignore
    range[Symbol.iterator] = getIterator;
    // теперь работает!
    // @ts-ignore
    for (let num of range) {
      console.error(num); // 1, затем 2, 3, 4, 5
    }


  }
}
