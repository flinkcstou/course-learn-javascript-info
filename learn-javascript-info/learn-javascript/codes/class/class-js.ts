export class ClassJs {

  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    // this.method5();
    // this.method6();
    this.method7();

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


    function someFunction() {
      /*
      just function
      has local variable
      has property
      has __proto__ = Function prototype
      has prototype = ConstructorPrototype
      * */

      /*
      new function;
      function has local variable
      function has property
      function has __proto__ Function.prototype
      function has prototype = ConstructorPrototype
      has created variable "this"
      variable "this" has __proto__ = ConstructorPrototype

      * */


    }

  }
}

