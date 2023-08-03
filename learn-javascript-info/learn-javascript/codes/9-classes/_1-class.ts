export class _1Class {

  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    // this.method5();
    // this.method6();
    // this.method7();
    this.method8();

  }


  method8() {
    class Clock {
      template: any;
      timer: any;

      constructor({template}) {
        this.template = template;
      }

      render() {
        let date = new Date();

        let hours: any = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins: any = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs: any = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);

        console.log(output);
      }

      stop() {
        clearInterval(this.timer);
      }

      start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
      }
    }


    let clock = new Clock({template: 'h:m:s'});
    clock.start();
    clock.stop()


    function ClockF({template}) {
      this.template = template;
      this.timer = null;
    }

    ClockF.prototype.render = function() {

    };
    ClockF.prototype.stop = function() {

    };
    ClockF.prototype.start = function() {

    };
    let clockF = new ClockF({template: 'h:m:s'});
    clockF.start();

  }

  method7() {

    /*
    Все тело функции это и есть конструкция и мы внутри конструкции создаем свойства
    в классе мы можем создать свойства вне конструкции,

    * */

    function MyClassF() {

      let name = () => {
        console.error(name);
      };

      // @ts-ignore
      this.getName = () => {
        name();
      };
    }

    class MyClass {
      constructor() {
        let name = () => {
          console.error(name);
        };
        // @ts-ignore
        this.getName = () => {
          name();
        };
      }
    }

    // @ts-ignore
    new MyClassF().getName();
    // @ts-ignore
    new MyClass().getName();

  }

  method6() {
    class MyClass {

      private static staticMyClass() {
        console.error('staticMyClass');
      }
    }

    // @ts-ignore
    MyClass.staticMyClass();

    console.error(MyClass);
    console.error(Object.getOwnPropertyNames(MyClass));


  }

  method5() {

    function MyClassF() {
      // @ts-ignore
      this.name = 'MyClassF';


      // @ts-ignore
      this.getName = () => {
        // @ts-ignore
        console.error(this.name);
      };

      const gets = () => {
        // @ts-ignore
        console.error(this.name);
      };
      gets();
    }


    // @ts-ignore
    let myClassF = new MyClassF();

    myClassF.getName();

  }

  method4() {
    /*
    свойства в class то же самое что this в функции

    * */

    class MyClass {
      name = 'MyClass';
      getName = () => {
        console.error(this.name);
      };
    }

    // equal to
    function MyClassF() {
      // @ts-ignore
      this.name = 'MyClassF';


      // @ts-ignore
      this.getName = () => {
        // @ts-ignore
        console.error(this.name);
      };

    }

    let myClass = new MyClass();
    // @ts-ignore
    let myClassF = new MyClassF();
    console.error(Object.getOwnPropertyNames(myClass)); // name, getName
    console.error(Object.getOwnPropertyNames(myClassF)); // name, getName

  }

  method3() {
    let User = class {
      sayHi() {
        console.error('Ivan');
      }
    };
    let user = new User();
    console.error(User);
    console.error(Object.getOwnPropertyNames(User)); // prototype, length, name
    console.error(Object.getOwnPropertyNames(User.prototype));// constructor , sayHi


    function makeClass() {
      return class {
        sayHi() {
          console.error('makeClass');
        }
      };
    }

    function Asd() {
      return function() {
        console.error('Asd');
      };
    }

    Asd()();
    // @ts-ignore
    new (makeClass())().sayHi();

  }

  method2() {

    class MyClass {

      constructor(name: any) {

        // @ts-ignore
        this.name = name;
      }

      sayHi() {
        // @ts-ignore
        console.error(this.name);
      }
    }


    function User(name: any) {
      // @ts-ignore
      this.name = name;
    }

    User.prototype.sayHi = function() {
      console.error(this.name);
    };


    let user = new MyClass('Ivan');
    user.sayHi();

    // @ts-ignore
    let userF = new User('Ivan');
    userF.sayHi();


    console.error(MyClass);
    console.error(Object.getOwnPropertyNames(MyClass)); // property, name, length
    console.error(Object.getOwnPropertyNames(MyClass.prototype));// constructor, sayHI
    console.error(User); // class
    console.error(Object.getOwnPropertyNames(User)); // property, name, length
    console.error(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

    /*
    1 отличие это то что Class при его реализации сразу расширяет свой prototype
    Function ж нет нужно либо вызвать функцию один раз либо расширять прототип из вне функции

    * */

  }

  method1() {

  }
}

