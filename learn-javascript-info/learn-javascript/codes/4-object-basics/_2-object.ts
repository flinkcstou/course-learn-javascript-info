export class _2Object {
  constructor() {
    console.error('_2Object');
    this.method1();


  }

  method1() {
    let user: any = new Object(); // синтаксис "конструктор объекта"(object constructor)
    let user1: any = {};  // синтаксис "литерал объекта"(object literal)

    let user2 = {
      name: 'John',
      'likes birds': true  // имя свойства из нескольких слов должно быть в кавычках
    };

    // присваивание значения свойству
    user1[`likes birds`] = true;
    // получение значения свойства
    console.error(user1['likes birds']); //true

    let key = 'likes birds';

    // то же самое, что и user["likes birds"] = true;
    user[key] = true;


    let fruit = 'apple';

    let bag = {
      [fruit]: 5, // имя свойства будет взято из переменной fruit
    };
    //@ts-ignore
    console.error(bag.apple); // 5, если fruit="apple"

    let bag1 = {
      [fruit + 'Computers']: 5 // bag1.appleComputers = 5
    };
    //@ts-ignore
    bag1.appleComputers = 5;


    let user3: any = {name: 'John', age: 30};

    console.error('age' in user3); // true, user.age существует
    console.error('blabla' in user3); // false, user.blabla не существует

    for (let key in user3) {
      // ключи
      console.error(key);  // name, age, isAdmin
      // значения ключей
      console.error(user3[key]); // John, 30, true
    }
  }

}
