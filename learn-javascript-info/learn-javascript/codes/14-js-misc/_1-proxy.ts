export class _1Proxy {
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
    /*
    Пришлось вспоминать :-) Самое сложное в этой задаче - понять условие :-)
makeObservable(target) - тут вместо target мы подставляем произвольный объект, который мы хотим модифицировать.
Вы этому объекту добавляете метод target.observe(func) где func - некая функция. При этом, у этой функции должно быть два аргумента, те, которые мы наблюдаем у функции стрелки key, value и соответственно эти два аргумента, в сеттере, перед тем, как возвращать инвариант должны быть переданы этой функции.
То есть идея в том что когда user.name = "John" то попытка присвоения будет передана в сеттер. И этот сеттер, кроме, собственно операции присвоения, должен выполнить функцию, которую мы передали в target.observe(func). Собственно, в ответе сделано так, чтоб можно было добавить несколько таких функций, подряд. И при присвоении каждая из них исполняется. И у каждой должно быть два аргумента key, value. Сложности тут нет - функции сохраняете в некий пул функций, который также сохраняете в этот объект, и сеттер этот пул запускает, подставляя указанные выше аргументы.
handler - это как бы вообще любая функция, которую принимает target.observe? - да. но, как Вы видите на примере функции стрелки, из ловушки set(target, prop, value, receiver) Вы должны взять prop, value и передать их в эту функцию. То есть все функции, которые Вы туда записываете, должны брать эти два аргумента и что-то с ними делать.
т.е. неправильно handler сразу жестко прописывать внутри makeObservable? -
ну пример, который приведён в задании предполагает что эта функция подставляется в метод, этот метод её записывает, а срабатывает эта функция при сеттере. Так-то можно функцию и жёстко прописать в makeObservable но это будет чуть менее гибко. Хотя тут и так не особо гибко, билет в один конец, добавляем без возможности что-то удалить из добавленного...
Надо, чтобы target.observe возвращал еще одну обертку? - пожалуй нет. Обёртку возвращает makeObservable, и в этой обёртке находится прокси, в котором есть сеттер, и сеттер исполняет пул функций. А target.observe просто записывает новую функцию, которая будет исполнена при работе сеттера. Подумайте, где Вы будете хранить этот пул функций, в принципе это не сложно.
Вот как-то так...

*/
    function makeObservable(target) {

      target['handlers'] = [];

      target.observe = function(callB: (key, value) => void) {
        target.handlers.push(callB);
      };

      return new Proxy(target, {
        set(target: any, p: string | symbol, newValue: any, receiver: any): boolean {

          target['handlers'].forEach((callback) => callback(p, newValue));
          return Reflect.set(target, p, newValue, receiver);
        }
      });
      /* ваш код */
    }

    let user: any = {};

    user = makeObservable(user);

    user.observe((key, value) => {
      console.error(`SET ${key}=${value}`);
    });
    user.observe((key, value) => {
      console.error(`SET ${key}=${value}`);
    });

    user.name = 'John'; // выводит: SET name=John
  }

  method7() {
    function makeObservable(target) {

      let callback = undefined;
      target.observe = function(callB: (key, value) => void) {
        callback = callB;
      };

      return new Proxy(target, {
        set(target: any, p: string | symbol, newValue: any, receiver: any): boolean {
          if (callback) {
            callback(p, newValue);
          }
          return Reflect.set(target, p, newValue, receiver);
        }
      });
      /* ваш код */
    }

    let user: any = {};

    user = makeObservable(user);

    user.observe((key, value) => {
      console.error(`SET ${key}=${value}`);
    });

    user.name = 'John'; // выводит: SET name=John

  }

  method6() {
    let array = [1, 2, 3];

    array = new Proxy(array, {
      get(target: number[], p: string, receiver: any): any {
        if (+p >= 0) {
          return Reflect.get(target, p, receiver);
        } else {
          return Reflect.get(target, target.length + (+p), receiver);

        }
      }
    });

    console.error(array[-1]);
  }

  method5() {
    let user: any = {
      name: 'John'
    };

    function wrap(target) {
      return new Proxy(target, {

        get(target: any, p: string | symbol, receiver: any): any {
          if (target[p]) {
            // @ts-ignore
            let value = Reflect.get(...arguments);
            return typeof value == 'function' ? value.bind(target) : value;
          }
          throw new Error('sdf');
        }
        /* ваш код */
      });
    }

    user = wrap(user);

    alert(user.name); // John
    alert(user.age); // Ошибка: такого свойства не существует
  }

  method4() {

    let str = new String('sdf');

    str = new Proxy(str, {
      get(target: String, p: string | symbol, receiver: any): any {
        console.error(target, p, receiver);
        return target[p].bind(target);
      }
    });

    console.error(str.toString());
    // console.error(str[0]);
    console.error(str);
  }


  method3() {
    let numbers = [];

    numbers = new Proxy(numbers, {
      set(target: any[], p: string | symbol, newValue: any, receiver: any): boolean {
        if (typeof newValue === 'number') {
          target[p] = newValue;
          return true;
        }
        return false;
      }
    });

    numbers.push(1);
    numbers.push(2);
    console.error(numbers);

    console.error(numbers.length);
    numbers.push('3'); // return error

  }

  method2() {
    let dictionary = {
      'Hello': 'Hola',
      'Bye': 'Adiós'
    };

    dictionary = new Proxy(dictionary, {
      get(target: { Hello: string; Bye: string }, p: string | symbol, receiver: any): any {
        if (target[p]) {
          return target[p];
        }
        return p;
      }
    });


    console.error(dictionary['Hello']); // Hola
    console.error(dictionary['sdf sdf']); // sdf sdf
  }

  method1() {

    // возвращать 0 в случае если нет такого элемента
    let numbers = [0, 1, 2];


    numbers = new Proxy(numbers, {
      get(target: number[], p: string | symbol, receiver: any): any {
        if (target[p]) {
          return target[p];
        }
        return 0;
      }
    });

    console.error(numbers[1]); // 1
    console.error(numbers[123]); // 0
  }


}
