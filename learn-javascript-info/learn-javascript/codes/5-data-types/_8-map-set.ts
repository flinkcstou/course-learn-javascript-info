export class _8MapSet {


  constructor() {
    this.method1();
    this.method2();
    this.method3();

  }

  method3() {
    var obj = {}
Object.entries(obj)

  }

  method2() {

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


  method1() {
    const obj = {
      id: '123',
      name: 'nazar'
    };
    const map = new Map(Object.entries(obj));
    console.error(map.get('id'));


  }
}
