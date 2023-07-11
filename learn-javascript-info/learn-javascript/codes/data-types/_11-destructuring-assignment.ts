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

export class _11DestructuringAssignment {


  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    // this.method4();
    this.method5();

  }

  method9() {

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

  method8() {

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


  method7(option: OptionI = {
    items: ['asdsadsa'],
    title: 'dsfds'
  } as OptionI) {
    console.error(option);
  }

  method6({
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

  method5() {

    function showMenu({title = 'name'}: any = {}) {
      console.error(title);
    }

    showMenu({});
  }

  method4() {

    /*

    let {a:{b} = {b:'b'} } = {}
    С левой стороны если хотим достать свойства используем "a: {b}"
    С правой стороны это приравнивания значения "{b:'b'}"
    формула такая

// let {prop  = default, ...rest} = object
// let {prop : varName = default, ...rest} = object
// let {prop : {prop2 = default2} = default, ...rest} = object
// let {prop : {prop2 : varName2 = default2} = default, ...rest} = object
// console.error(prop, varName)
// console.error(prop2, varName2)

    пример method3()


    * */


  }

  method3() {


    let {
      a: {
        a: {
          c
        } = {c: 'cccc'}
      } = {} as any
    }: any = {} as any;

    console.error(c);
  }

  method2() {
    let options = {
      size: {
        size: {
          size: {
            width: 'name'
          }
        }
      }
    };

    let {size} = options;
    console.error(size);

  }

  method1() {

    const map = new Map([['key', 'value'], ['key1', 'value1']]);

    const [first, second] = map;
    console.error(first, second);


    let [name, surname] = ['sdfd', 'sdfds'];
    console.error(name, surname);

    let {name1 = 'AAAA'} = {
      name1: 'BBBB'
    };
    console.error(name1);

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
}
