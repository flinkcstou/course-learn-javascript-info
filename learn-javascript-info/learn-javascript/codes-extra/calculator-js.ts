export class CalculatorJs {


  constructor() {
  }

  arrayMethods(){
    // https://learn.javascript.ru/array-methods#sozdat-rasshiryaemyy-kalkulyator
    function Calculator() {

      this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
      };

      this.calculate = function(str) {

        let split = str.split(' '),
          a = +split[0],
          op = split[1],
          b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN;
        }

        return this.methods[op](a, b);
      }

      this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
    }
    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8
  }

  objectMethods() {
    // https://learn.javascript.ru/object-methods#sozdayte-kalkulyator
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
    // https://learn.javascript.ru/constructor-new#sozdayte-kalkulyator-pri-pomoschi-konstruktora-new-calculator

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
