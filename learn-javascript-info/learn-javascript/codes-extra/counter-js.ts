export class CounterJs {


  constructor() {
    this.method1();
  }

  method1() {
    function Counter() {
      let count = 0;

      this.up = function() {
        return ++count;
      };

      this.down = function() {
        return --count;
      };
    }

    let counter = new Counter();

    console.error(counter.up()); // 1
    console.error(counter.up()); // 2
    console.error(counter.down()); // 1
  }
}
