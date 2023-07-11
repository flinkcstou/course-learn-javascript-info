/*
* variableScope:{
* outer: global
* innerLexical:[
* method:{
* outer: lexicalEnvironment call variableScope
* innerLexical:[
*
*
*
* }
*
* ]
* }
*
*
*
* */


export class _4Closure {

  constructor() {
    // this.method();
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    this.method5();
    // this.method6();
  }

  method() {
    function sayHiBye(firstName: any, lastName: any) {
      function getFullName() {
        return firstName + ' ' + lastName;
      }

      return getFullName;

    }

    console.error(sayHiBye('John', 'pete')());
  }

  method1() {
    function makeCounter() {
      let counter = 0;

      return function() {
        counter++;
        console.error(counter);
        return counter;
      };
    }

    let make = makeCounter();
    make();
    make();
    make();
  }

  method2()/*outer lexial environment => class */ {
    let method2Name = 'method2'; // inner lexicalEnvironemt

    function someFFDeclaration(): string /*outer lexical environemt => method2*/ {
      const asdf = 'sdfsa'; // inner lexicalEnvironment[]

      console.error(method2Name);
      return method2Name;
    }

    function getName(someFF: () => string = someFFDeclaration) {

      return function getSecondName() {

        someFF();
      };
    }

    function getNameInner() {

      let method2Name = 'method2 inner';
      getName(() => {
        console.error(method2Name);
        return method2Name;
      })();
    }

    getName()();
    getNameInner();


  }

  method3() {
    let arr = [1, 2, 3, 4, 5];


    function inBetween(from: number, to: number) {

      return function(item: number, index: number): boolean {
        return item > from && item < to;
      };

    }

    function inArray(arr: number[]) {

      return function(item: number, index: number) {
        return arr.includes(item);
      };
    }

    console.error(arr.filter(inBetween(2, 4)));
    console.error(arr.filter(inArray([2, 4])));
  }

  method4() {
    let users = [
      {name: 'John', age: 20, surname: 'Johnson'},
      {name: 'Pete', age: 18, surname: 'Peterson'},
      {name: 'Ann', age: 19, surname: 'Hathaway'}
    ];

    users.sort();

    function byField(key: string) {

      return function compareFn(a: any, b: any): number {
        return a[key] > b[key] ? 1 : -1;
      };


    }

    console.error(users.sort(byField('name')));

  }

  method5() {
    function makeArmy() {
      let shooters = [];

      let i = 0;
      while (i < 10) {
        let j = i;

        function callImmediately() {
          let k = i;
          return function() {
            console.error(j);
          };
        }

        let shooter = callImmediately();
        shooters.push(shooter);
        i++;
      }

      return shooters;
    }

    let army = makeArmy();

    army[0](); // у 0-го стрелка будет номер 10
    army[5](); // и у 5-го стрелка тоже будет номер 10
  }

  method6() {

    let neighbors = ['Dyadya vanya', 'Maria petrovna', 'serega'];

    let gunsCount = 3;

    function getRandomIntFromTo(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function potatoBoom(callback: (name: string) => any) {
      let neighbor = neighbors[getRandomIntFromTo(0, 2)];
      let timeOut = getRandomIntFromTo(20, 200);
      setTimeout(() => {
        callback(neighbor);
      }, timeOut);
    }

    for (let i = 0; i < gunsCount; i++) {
      potatoBoom((value) => console.error('sosed po imeni ' + value));
    }


  }


  method7() {


  }


}
