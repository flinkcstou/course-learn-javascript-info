export class CounterJs {


  constructor() {
    this.method1();
  }

  method4() {
    // https://learn.javascript.ru/closure#nezavisimy-li-schyotchiki
    function makeCounter() {
      let count = 0;

      return function() {
        return count++;
      };
    }

    let counter = makeCounter();
    let counter2 = makeCounter();

    alert(counter()); // 0
    alert(counter()); // 1

    alert(counter2()); // ?
    alert(counter2()); // ?
  }

  method3() {

    // https://learn.javascript.ru/closure#obekt-schyotchika
    function Counter() {
      let count = 0;

      this.up = function() {
        return ++count;
      };

      this.down = function() {
        return --count;
      };

      // { up:function, down:function}
    }

    let counter = new Counter();

    console.error(counter.up()); // 1
    console.error(counter.up()); // 2
    console.error(counter.down()); // 1
  }


  method2() {

    // https://learn.javascript.ru/function-object lesson
    function makeCounter() {
      // вместо
      // let count = 0

      function counter() {
        return counter.count++;
      };

      counter.count = 0;

      return counter;
    }

    let counter = makeCounter();
    console.error(counter()); // 0
    console.error(counter()); // 1
  }

  method1() {
    // https://learn.javascript.ru/function-object#ustanovka-i-umenshenie-znacheniya-schyotchika

    function makeCounter() {
      let count = 0;

      function counter() {
        return count++;
      }

      counter.up = value => count = value;

      counter.down = () => count--;


      // {up, down}
      return counter;
    }

    let counter = makeCounter();
    counter();
    counter.up(2);
  }
}
