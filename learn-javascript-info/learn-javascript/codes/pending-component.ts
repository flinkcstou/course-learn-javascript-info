export interface OptionI {
  title: string;
  items: string[];
  size: {
    width: string,
    height: string
  };
}

export interface FullNameI {
  name: string,
  surname: string,
  where: {
    from: string,
    to: string,
    whereChild: {
      fromChild: string,
      toChild: string
    }
  },
  arrs: any[]
}

export class PendingComponent {

  constructor() {
    // this.some1()
    // this.some11()
    // this.someMethod()
    // this.some2()
    // this.some3()
    // this.some4()
    // this.some6()
    // this.some5()
    // this.someMethods()
    // this.some7()
    this.some8();
  }

  some8() {
    let list: any = {value: 1};
    list.next = {value: 2};
    list.next.next = {value: 3};
    list.next.next.next = {value: 4};

    // 1)
    // let second = list.next;
    //
    // list.next = list.next.next;
    //
    // second.next = list;
    //
    // console.error(JSON.stringify(second));

    // 2)

    let second = list.next;

    list.next = list.next.next;

    // second.next = list;
    // list =second;
    list = {value: second.value, next: list};

    console.error(JSON.stringify(list));

  }

  some7() {

    let fullName: FullNameI = {
      name: 'name',
      surname: 'surname',
      where: {
        from: 'from', to: 'to',
        whereChild: {fromChild: 'from', toChild: 'to'}
      },
      arrs: []
    };

    let {name}: FullNameI = {
      name: 'name',
      surname: 'surname',
      where: {
        from: 'from', to: 'to',
        whereChild: {fromChild: 'from', toChild: 'to'}
      },
      arrs: []
    };


    let emptyFullName: FullNameI = {} as FullNameI;

    let {surname}: FullNameI = {} as FullNameI;

    let {surname: s = 'surname'}: FullNameI = {} as FullNameI;

    let {
      name: lastName = 'name',
      where: {
        from = 'from',
        to = 'to',
        whereChild: {fromChild = 'fromChild', toChild = 'toChild'} = {} as any
      } = {} as any
    }: FullNameI = {} as FullNameI;

    console.error(name, surname, s, from, to, fromChild, toChild);

  }

  someMethods() {

    let {
      name = 'name',
      where: {
        from = 'from',
        to = 'to',
        whereChild: {fromChild = 'fromChild', toChild = 'toChild'} = {} as any
      } = {} as any,
      arrs: [sdfds = 'das'] = [],
    }: FullNameI = {} as FullNameI;

    const fullName: FullNameI = {
      name: 'name',
      surname: 'surname',
      where: {
        from: 'from',
        to: 'to',
        whereChild: {fromChild: 'fromChild', toChild: 'toChild'}
      },
      arrs: ['das']
    };
    console.error(name);

  }


  some5(option: OptionI = {
    items: ['asdsadsa'],
    title: 'dsfds'
  } as OptionI) {
    console.error(option);
  }

  some6({
          title = 'fdsfds',
          items = [],
          size: {
            width = '11',
            height = '111'
          }
        }: OptionI) {
    const optionI: OptionI = {
      title, items, size: {
        width,
        height
      }
    };
    console.error(optionI);
  }

  some4() {

    const map = new Map([['key', 'value'], ['key1', 'value1']]);

    const [first, second] = map;
    console.error(first, second);


    let [name, surname] = ['sdfd', 'sdfds'];
    console.error(name, surname);

    let {name1 = 'fsdfds'} = {
      name1: 'sdfdsf'
    };

    let options = {
      size: {
        width: 100,
        height: 200
      },
      items: ['Cake', 'Donut'],
      extra: true
    };

// деструктуризация разбита на несколько строк для ясности
    let {
      size: { // положим size сюда
        width,
        height
      },
      items: [item1, item2], // добавим элементы к items
      // @ts-ignore
      title = 'Menu' // отсутствует в объекте (используется значение по умолчанию)
    } = options;
    console.error(item1, item2, title);
  }


  some3() {

    let set = new Set(['апельсин', 'яблоко', 'банан']);
    new Map([['sdf', 'sdf']]);
    console.error(set.keys());

    console.error(Object.fromEntries(set.entries()));
    console.error(Array.from((set.entries())));
    // let map = new Map(set.entries());

    let john = {name: 'John'};
    let john1 = john;

    let map = new Map();
    map.set(john, '...');

    // @ts-ignore
    john = null;
    console.error(map.get(john));
    console.error(map.get(john1));

    //Array.from // iterator, arrayLike
    //Object.entries // object
    //Object.fromEntries // iterator has key value
    //Map.keys // iterator has only key
    //Set.keys // iterator has only key
    //Map.entries // iterator has key and value
    //Set.entries // iterator has key and value
    //


    // arr;
    const arr = new Array(['fdsfsd', 'fsdfds']);

    arr.entries();

    Array.from(map.keys());
    console.error(map.entries());

    const obj = {
      id: '123',
      name: 'nazar'
    };
    let set1 = new Set(Object.entries(obj));
    console.error(set1.keys());


    let map2 = new Map(Object.entries(Object.fromEntries(set1.entries())));

    console.error(map2.entries());
  }


  some2() {
    const obj = {
      id: '123',
      name: 'nazar'
    };
    const map = new Map(Object.entries(obj));
    console.error(map.get('id'));


  }

  someMethod() {
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


  some11() {
    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };


    function getIterator() {
      // @ts-ignore
      console.error(this.list);

      // ...она возвращает объект итератора:
      // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
      return {
        // @ts-ignore

        current: this.list,
        // 3. next() вызывается на каждой итерации цикла for..of
        next() {
          console.error(this.current);
          // @ts-ignore
          console.error(this.list);
          // 4. он должен вернуть значение в виде объекта {done:.., value :...}
          const cur = this.current;
          if (cur?.value) {
            this.current = cur.next;
            console.error('cur', cur);
            return {done: false, value: {cur}};
          }
          return {done: true};
        }
      };
    };

    //@ts-ignore
    list[Symbol.iterator] = getIterator;


    console.error(list);
    // @ts-ignore
    for (let num of list) {
      console.error(num); // 1, затем 2, 3, 4, 5
    }
  }

  some1() {
    let range = {
      from: 1,
      to: 5,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };


    function getIterator() {

      // @ts-ignore
      console.error(this.from);
      // @ts-ignore
      console.error(this.to);// @ts-ignore
      console.error(this.next);
      // ...она возвращает объект итератора:
      // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
      return {
        // @ts-ignore
        current: this.from,
        // @ts-ignore
        last: this.to,

        // 3. next() вызывается на каждой итерации цикла for..of
        next() {
          // 4. он должен вернуть значение в виде объекта {done:.., value :...}
          if (this.current <= this.last) {
            return {done: false, value: this.current++};
          } else {
            return {done: true};
          }
        }
      };
    };

    // @ts-ignore
    range[Symbol.iterator] = getIterator;
    // теперь работает!
    // @ts-ignore
    for (let num of range) {
      console.error(num); // 1, затем 2, 3, 4, 5
    }


  }
}
