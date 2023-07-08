export class _5ReferenceType {

  constructor() {
    this.method1();
  }


  method1() {
    const bigInt = 32432423432423423432423423n;
    const bigInt2 = 32432423432423423432423423n;
    console.error(bigInt - bigInt2);


    var user = {
      name: 'fsdfds',
      makeUser: (): any => {
      }
    };

    function makeUser() {
      return {
        name: 'John',
        // @ts-ignore
        ref: this
      };
    }

    user.makeUser = makeUser;


    console.error(user.makeUser().ref.name);
    let user1 = {
      name: 'John',
      age: 30,
      ref() {
        return this;
      },

      sayHi() {
        // "this" - это "текущий объект".
        console.error(this.name);
        return this;
      }

    };

    console.error(user1.ref());


  }
}
