export class PrototypeInheritance {

  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    this.method5();
  }

  method5() {
    let hamster: any = {
      stomach: [123, 123, 123],

      eat(food: any) {

        if (!this.hasOwnProperty(this.stomach)) {
          this.stomach = [...this.stomach];
        }
        this.stomach.push(food);

      }
    };

    let speedy: any = {
      __proto__: hamster
    };

    speedy.eat('sdfsfsd');
    speedy.eat('sdfsfsd');
    console.error(speedy);

  }

  method4() {
    let animal: any = {

      isSleeping: false,
      walk() {
        console.error(this.isSleeping);
      },
    };
    let wolf: any = {
      __proto__: animal
    };


    wolf.walk();

  }

  method3() {
    let hamster = {
      stomach: [] as any[],
      eat(food: any) {
        console.error(this);
        this.stomach.push(food);
      }
    };
    let speedy: any = {
      __proto__: hamster
    };

    let lazy: any = {
      __proto__: hamster
    };


    hamster.eat.call(speedy, 'food');


  }


  method2() {
    let head: any = {
      glasses: 1
    };

    let table: any = {
      pen: 3,
      __proto__: head,
    };

    let bed: any = {
      sheet: 1,
      pillow: 2,
      __proto__: table,
    };

    let pockets: any = {
      money: 2000,
      __proto__: bed,
    };

    console.error(pockets.pen);
    console.error(bed.glasses);

  }

  method1() {

    let user = {
      name: 'John',
      surname: 'Smith',
      home: {
        w: 11,
        h: 11
      },
      set fullName(value: any) {
        console.error(value);
      },
      walk() {
        console.error(this);
        /* этот метод не будет использоваться в rabbit */
      }
    };

    let admin: any = {
      isAdmin: true,
      __proto__: user
    };


    delete admin.name;

    admin.walk();
    admin.fullName = 'fsdfds';
    console.error(admin.name);
    console.error(user, admin);
  }

}
