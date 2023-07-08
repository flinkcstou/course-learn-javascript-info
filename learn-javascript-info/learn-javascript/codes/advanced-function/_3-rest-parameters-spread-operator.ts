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

export class _3RestParametersSpreadOperator {

  constructor() {
    // this.method1()
    // this.method2()
    // this.method3()
    // this.method4()
    // this.method5()
  }


  method5() {

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

  method4() {

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


  method3(option: OptionI = {
    items: ['asdsadsa'],
    title: 'dsfds'
  } as OptionI) {
    console.error(option);
  }

  method2({
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

  method1() {

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

}
