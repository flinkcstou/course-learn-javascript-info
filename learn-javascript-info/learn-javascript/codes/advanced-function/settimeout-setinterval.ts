export class SettimeoutSetinterval {

  constructor() {
    // this.method1();
    // this.method2();
  }

  method2() {
    function printNumbers(from: number, to: number) {
      let between = from;

      function goNext() {
        console.error(between);
        if (between === to) {
          return;
        }
        between++;
        setTimeout(goNext, 1000);
      }

      setTimeout(goNext, 1000);

    }

    printNumbers(0, 5);
  }

  method1() {

    function printNumbers(from: number, to: number) {
      let between = from;
      let timeId: any = null;

      function goNext(): any {
        console.error(between);
        if (between === to) {
          clearInterval(timeId);
        }
        between++;
      }

      timeId = setInterval(goNext, 1000);
      goNext();

    }

    printNumbers(0, 5);
  }

}
