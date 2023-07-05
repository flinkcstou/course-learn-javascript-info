export class CalculatorJs {


  constructor() {
  }

  objectMethods() {
    // https://learn.javascript.ru/constructor-new
    let calculator = {
      sum() {
        return this.a + this.b;
      },

      mul() {
        return this.a * this.b;
      },

      read() {
        this.a = +prompt('a?', '0');
        this.b = +prompt('b?', '0');
      }
    };

    calculator.read();
  }

  constructorNew() {
    function Calculator() {

      this.read = function() {
        this.a = +prompt('a?', '0');
        this.b = +prompt('b?', '0');
      };

      this.sum = function() {
        return this.a + this.b;
      };

      this.mul = function() {
        return this.a * this.b;
      };
    }

    let calculator = new Calculator();
    calculator.read();

  }

}
