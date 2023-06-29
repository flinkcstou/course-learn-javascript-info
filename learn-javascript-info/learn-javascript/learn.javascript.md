### Основы JavaScript(JavaScript Fundamentals)

- Привет, мир! - Hello, world! [hello-world](chapters/first-steps/hello-world.md)
- Структура кода - Code structure [structure](chapters/first-steps/structure.md)
- Строгий режим — "use strict" - The modern mode, "use strict" [](chapters/first-steps/)
- Переменные - Variables [variables](chapters/first-steps/variables.md)
- Типы данных - Data types [types](chapters/first-steps/types.md)
- Взаимодействие: alert, prompt, confirm - Interaction: alert, prompt, confirm [](chapters/first-steps/)
- Преобразование типов - Type Conversions [type-conversions](chapters/first-steps/type-conversions.md)
- Базовые операторы, математика - Basic operators, maths [operators](chapters/first-steps/operators.md)
- Операторы сравнения - Comparisons [comparison](chapters/first-steps/comparison.md)
- Условное ветвление: if, '?' - Conditional branching: if, '?' [ifelse](chapters/first-steps/ifelse.md)
- Логические операторы - Logical operators [logical-operators](chapters/first-steps/logical-operators.md)
- Оператор нулевого слияния (??) - Nullish coalescing operator '
  ??' [nullish-coalescing-operator](chapters/first-steps/nullish-coalescing-operator.md)
- Циклы while и for - Loops: while and for [while-for](chapters/first-steps/while-for.md)
- Конструкция "switch" - The "switch" statement [switch](chapters/first-steps/switch.md)
- Функции - Functions [function-basics](chapters/first-steps/function-basics.md)
- Function Expression - Function expressions [function-expressions](chapters/first-steps/function-expressions.md)
- Стрелочные функции, основы - Arrow functions, the
  basics [arrow-functions-basics](chapters/first-steps/arrow-functions-basics.md)
- Особенности JavaScript - JavaScript specials [javascript-specials](chapters/first-steps/javascript-specials.md)

### Качество кода(Code quality)

- Отладка в браузере - Debugging in the browser [](chapters/code-quality)
- Советы по стилю кода - Coding Style [](chapters/code-quality)
- Комментарии - Comments [](chapters/code-quality)
- Ниндзя-код - Ninja code [](chapters/code-quality)
- Автоматическое тестирование c использованием фреймворка Mocha - Automated testing with Mocha [](chapters/code-quality)
- Полифилы - Polyfills and transpilers  [polyfills](chapters/code-quality/polyfills.md)

### Объекты: основы(Objects: the basics)

- Объекты - Objects [object](chapters/object-basics/object.md) || [code](codes/object-basics/object.ts)
- Копирование объектов и ссылки - Object references and copying [](chapters/object-basics)
- Сборка мусора - Garbage collection [](chapters/object-basics)
- Методы объекта, "this" - Object methods, "this" [](chapters/object-basics)
- Конструктор, оператор "new" - Constructor, operator "new" [](chapters/object-basics)
- Опциональная цепочка '?.' - Optional chaining '?.' [](chapters/object-basics)
- Тип данных Symbol - Symbol type [](chapters/object-basics)
- Преобразование объектов в примитивы - Object to primitive conversion [](chapters/object-basics)

### Методы объекта, "this"

        name = 'Global Name';
        function sayHi() {
          console.error( this.name );
        }

> Значение this – это объект «перед точкой», который использовался для вызова метода.
>
> Значение this не смотрит на блоки js а смотрит на reference Type

        var user = {
        name:'John' 
        };        
        user.say = sayHi;
        user.say() // 'John'

Если просто вызывать sayHi, то возьмет глобальный объект

        sayHi() // 'Global Name'

Даже если вызывать внутри объекта, все равно возьмет глобальный объект

        var user = {
            name:'John',
            sayHiUser(){
            console.error(this.name);
            sayHi()
            }
        }
        
        user.sayHiUser() // 'John', 'Global Name'

Если передать как переменную функцию, то она потеряет свой контекст, нельзя об этом забывать,

- в первом случае ничем не будет отличаться так как мы создали функцию глобальную

        // первый способ присвоения 
        var copyHi = sayHi
        
        copyHi() //'Global Name'
        
        // второй способ это через function
        function callHi(callback){
        callback()
        }
        
        callHi(sayHi) //'Global Name'

- второй случай это когда мы берем функцию у объекта

        var user = {
                name:'John' 
                };        
        user.say = sayHi;
        
        var copyHi = user.say
        
        copyHi() // 'Global Name' not 'John'
        
        function callHi(callback){
                callback()
                }
                
        callHi(user.say) // 'Global Name' not 'John'

>
> Специальное значение «ссылочного типа», называемого Reference Type.
>
>Этот ссылочный тип (Reference Type) является внутренним типом. Мы не можем явно использовать его, но он используется
> внутри языка.
>
>Значение ссылочного типа – это «триплет»: комбинация из трёх значений (base, name, strict), где:

- base – это объект.
- name – это имя свойства объекта.
- strict – это режим исполнения. Является true, если действует строгий режим (use strict).

> Результатом доступа к свойству user.say является не функция, а значение ссылочного типа. Для user.say в строгом режиме
> оно будет таким:

        // значение ссылочного типа (Reference Type)
        (user, "say", true)
        
        //как только передали в переменную 
        var copyHi = user.say
        (global, 'copyHi, true)
        // где base стал уже глабольным

**У стрелочных функций нет «this»**(перевод)

        let user = {
          firstName: "Илья",
          sayHi() {
            let arrow = () => alert(this.firstName);
            arrow();
          }
        };
        
        user.sayHi(); // 'Илья'

кое-какие особенности:

        let obj, method;
        
        obj = {
          go: function() { alert(this); }
        };
        
        obj.go();               // (1) [object Object], call self function 
        
        (obj.go)();             // (2) [object Object], call self function скобки никак не влияяет
        
        (method = obj.go)();    // (3) undefined, тут идет присвоения и поэтому меняется reference Type
        
        (obj.go || obj.stop)(); // (4) undefined, тоже самое идет присвоение один из функции, меняется reference Type

### Конструкторы, создание объектов через "new"

оператор `new` дает неявное создание нового объекта `this`

        function User(name) {
          // this = {};  (неявно)
        
          // добавляет свойства к this
          this.name = name;
          this.isAdmin = false;
        
          // return this;  (неявно)
        }
        
        let user = new User("Вася");
        
        alert(user.name); // Вася
        alert(user.isAdmin); // false

есть анонимный вызов

        var user = new function(){}
        
        // не нужно вызывать метод так как оператор `new` сделал все за нас
        // посмотрим на это по другому
        
        function User(){
        this.name ='John';
        }
        var user = new User; // это будет валиден, не зависимо от того, что нет скобок так как 'new' все делает за нас
        var user = new User(); // ничено не будет от того что вызываем скобки

для проверки что функция вызвана обычным способом без оператора `new`

        function User(){
        console.error(new.target) // вернет функцию если был вызван через  оператор `new`
        }

если мы в функции возвращаем примитивный тип, то значения `this` сохранится, а если объект возвращаем, то вернет объект

        function SmallUser() {
        
          this.name = "Вася";
        
          return; // <-- возвращает this
        }
        
        alert( new SmallUser().name );  // Вася
        

        function BigUser() {
          this.name = "Вася";
          return { name: "Godzilla" };  // <-- возвращает этот объект
        }
        
        console.error(new BigUser().name) // Godzilla, получили этот объект

### Тип данных Symbol

Символ (symbol) – примитивный тип данных, использующийся для создания уникальных идентификаторов.

        var description = "id"

        var id = Symbol(description) // local Symbol
        
        var user = {}
        
        user[id] = 'some key'
        
        // user[id] is not  user.id
        
        Symbol.for("id") // create, get global Symbol by description
        
        Symbol.keyFor(id) // get description by global Symbol 

`Symbol` используется разработчиками для сокрытия каких либо данных, либо во избежания конфликтов

`Symbol` используется в самом js для сокрытия функции которые отвечает
за основы систем такие функции как:

- Symbol.hasInstance
- Symbol.isConcatSpreadable
- Symbol.iterator
- Symbol.toPrimitive

### Преобразование объектов в примитивы

Объекты можно преобразовать в примитивы
и для этого существует hint, их три - default, number, string

Но чтоб использовать их нужно реализовать функцию `Symbol.toPrimitive`

а если нет то toString, valueOf

если их нет то для `number` будет значение "NaN", а для `string` - "[Ojbect Object]"

`default`

        var obj = {}
        obj[Symbol.toPrimitive] = function(hint) {
          // должен вернуть примитивное значение
          // hint равно чему-то одному из: "string", "number" или "default"
        };
        
        obj + 1 // при binary plus, hint = 'default'
        
        obj == 1 // hint = 'default'

`number`

        var obj = {}
        obj[Symbol.toPrimitive] = function(hint) {
        // должен вернуть примитивное значение
        // hint равно чему-то одному из: "string", "number" или "default"
        };
        
        +obj  // hint = 'number'
        
        Number(obj) // hint = 'number'
        
        obj > 1 // hint = 'number'

`string`

        var obj = {}
        obj[Symbol.toPrimitive] = function(hint) {
        // должен вернуть примитивное значение
        // hint равно чему-то одному из: "string", "number" или "default"
        };
        
        String(obj)  // hint = 'string'
        
        alert(obj) // hint = 'string'

если не реализован `Symbol.toPrimitive`

то вызов будет следующим

hint ='default', hint ='number';  `valueOf` -> `toString` -> NaN

hint ='string';  `toString` -> `valueOf` -> "[Object Object]"

`Symbol.toPrimitive`, `valueOf`, `toString` должны возвращать примитив либо значение будет проигнорировано

### Методы у примитивов

движок javascript создает для примитвных типов обертку над ними

Каждый примитив имеет свой собственный «объект-обёртку», которые называются: String, Number, Boolean и Symbol. Таким
образом, они имеют разный набор методов.

К примеру, существует метод str.toUpperCase(), который возвращает строку в верхнем регистре.

Вот, как он работает:

            let str = "Привет";
            
            alert( str.toUpperCase() ); // ПРИВЕТ

### Объекты

Цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых.

`псевдомассивы` – объекты, которые выглядят, как массив. То есть, у них есть свойство `length` и `индексы`, но они также
могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны.

### Перебираемые объекты

есть два типа `псевдо-массивы` и `перебираемые`

`псевдо-массивы` `array-likes`

            let arrayLike = { // есть индексы и свойство length => псевдомассив
              0: "Hello",
              1: "World",
              length: 2
            };
            
            // Ошибка (отсутствует Symbol.iterator)
            for (let item of arrayLike) {}

`перебираемые` `iterable`

            let range = {
              from: 1,
              to: 5
            };
            
            // 1. вызов for..of сначала вызывает эту функцию
            range[Symbol.iterator] = function() {
            
              // ...она возвращает объект итератора:
              // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
              return {
                current: this.from,
                last: this.to,
            
                // 3. next() вызывается на каждой итерации цикла for..of
                next() {
                  // 4. он должен вернуть значение в виде объекта {done:.., value :...}
                  if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                  } else {
                    return { done: true };
                  }
                }
              };
            };
            
            // теперь работает!
            for (let num of range) {
              alert(num); // 1, затем 2, 3, 4, 5
            }

- Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator, как было описано выше.

- Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.

явный вызов итерируемых объектов
let str = "Hello";

                // делает то же самое, что и
                // for (let char of str) alert(char);
                
                let iterator = str[Symbol.iterator]();
                
                while (true) {
                  let result = iterator.next();
                  if (result.done) break;
                  alert(result.value); // выводит символы один за другим
                }

### Map и Set

Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого
типа.

Методы и свойства:

- new Map() – создаёт коллекцию.
  map.set(key, value) – записывает по ключу key значение value.
  map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
  map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
  map.delete(key) – удаляет элемент по ключу key.
  map.clear() – очищает коллекцию от всех элементов.
  map.size – возвращает текущее количество элементов.

            interface Map<K, V> {
                /** Returns an iterable of entries in the map. */
                [Symbol.iterator](): IterableIterator<[K, V]>;
            
                /**
                 * Returns an iterable of key, value pairs for every entry in the map.
                 */
                entries(): IterableIterator<[K, V]>;
            
                /**
                 * Returns an iterable of keys in the map
                 */
                keys(): IterableIterator<K>;
            
                /**
                 * Returns an iterable of values in the map
                 */
                values(): IterableIterator<V>;
            }            

как добавлять множество значении

            // массив пар [ключ, значение]
            let map = new Map([
              ['1',  'str1'],
              [1,    'num1'],
              [true, 'bool1']
            ]);

Объект `Set` – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только
один раз.

как добавлять множество значении

            // массив [ключ, ключ1]
            let set = new Set(["апельсин", "яблоко", "банан"]);

как из массива сделать `map` или `set` и наоборот как сделать массив

            var obj = {key:'value'};
            var map = new Map(Object.entries(obj))
            
            var arr = [['key', 'value']];
            var map = new Map(arr)
            
            var obj = Object.fromEntries(map.entries())    
            var arr = Array.from(map)

                

            var obj = {key: 'value'};
            var set  = new Set(Object.keys(obj);
            var set  = new Set(Object.values(obj);
            
            var arr = ['keys', 'keys1']
            var set  = new Set(arr);
            
            var obj = Object.fromEntries(set.entries())    
            var arr = Array.from(set)

### Object.keys, values, entries

Object.keys, values, entries

у всех структур данных есть три метода, которые возвращает итерируемые объекты

- keys()
- values()
- entries()

Для простых объектов доступны следующие методы:

- Object.keys(obj) – возвращает массив ключей.
- Object.values(obj) – возвращает массив значений.
- Object.entries(obj) – возвращает массив пар [ключ, значение].

### Деструктурирующее присваивание

            let [a, b, c] = "abc";
            let [one, two, three] = new Set([1, 2, 3]);
            
            let user = {};
            [user.name, user.surname] = "Ilya Kantor".split(' ');
            
            for (let [key, value] of Object.entries(user)) {
              alert(`${key}:${value}`); // name:John, затем age:30
            }
            

            let {var1, var2} = {var1:…, var2:…}

            let options = {
              title: "Menu",
              width: 100,
              height: 200
            };
            let {title, width, height} = options;
            
            // { sourceProperty: targetVariable = defaultValue }
            let {width: w, height: h, title} = options;
            let {width = 100, height = 200, title} = options;
            
            
            function({
              incomingProperty: varName = defaultValue
              ...
            })
            
            let {prop : varName = default, ...rest} = object
            
            
            let [item1 = default, item2, ...rest] = array



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

### Формат JSON, метод toJSON

- JSON.stringify

      JSON.stringify(value[, replacer, space])
      
      JSON.stringify(meetup, function replacer(key, value) {
        alert(`${key}: ${value}`);
      })
      
      JSON.stringify(user, null, 2)

мы можем закостомизировать объект Custom “toJSON”. Добавив метод  `toJSON` в объект

        let room = {
          number: 23,
          toJSON() {
            return this.number;
          }
        };
        JSON.stringify(room); // 23

- JSON.parse

        let value = JSON.parse(str, [reviver]);
        
        
        JSON.parse(str, function(key, value) {
          if (key == 'date') return new Date(value);
          return value;
        });

### Рекурсия и стек

связанный список

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

Альтернативный код для создания:

        let list = { value: 1 };
        list.next = { value: 2 };
        list.next.next = { value: 3 };
        list.next.next.next = { value: 4 };

Список можно легко разделить на несколько частей и впоследствии объединить обратно:

        let secondList = list.next.next;
        list.next.next = null;

Для объединения:

        list.next.next = secondList;

Например, для добавления нового элемента нам нужно обновить первый элемент списка:

        let list = { value: 1 };
        list.next = { value: 2 };
        list.next.next = { value: 3 };
        list.next.next.next = { value: 4 };
        
        // добавление нового элемента в список
        list = { value: "new item", next: list };

Чтобы удалить элемент из середины списка, нужно изменить значение next предыдущего элемента:

        list.next = list.next.next;

### Замыкание

Лучше с нуля прочитать из сайта и решить задачки

Все созданные функции берут outer lexical environment там где они были объявлены, а не там где они были вызваны

All functions “on birth” receive a hidden property [[Environment]] with a reference to the Lexical Environment of their
creatio

During the execution of makeCounter(), a tiny nested function is created.

It doesn’t matter whether the function is created using Function Declaration or Function Expression. All functions get
the [[Environment]] property that references the Lexical Environment in which they were made. So our new tiny nested
function gets it as well.

For our new nested function the value of [[Environment]] is the current Lexical Environment of makeCounter() (where it
was born):

### Объект функции, NFE

получить название функции

        function getName(){}
        
        getName.name // 'getName'

получить количество аргументов

        function getName(name, surname){}
        
        getName.length // 2

функция это и есть по сути объект, но с большими возможностями

для функции можно задавать свойства как и y объекта

        function getName(){
        
        }
        
        getName.surname ='abu'

также можно и внутри функции объявить, но свойства появится только при вызове
и каждый раз будет перезаписываться

        function getName(){
        getName.surname ='nabu baby'
        }
        getName.surname ='abu'
        
        getName()
        
        console.error(getName.surname) // 'nabu baby'

- `Named Function Expression` = `NFE`

            let say = function getName(){}
            let say = function(){}
            let say = ()=>{}


- interesting code

        function sum(a) {
        
          let currentSum = a;
        
          function f(b) {
            currentSum += b;
            return f;
          }
        
          f.toString = function() {
            return currentSum;
          };
        
          return f;
        }

есть два способа создать объект  
это через сам объект или через функцию
1

      let name = {
      ..some properties
      }

2

    let name = function(){
      function f(){
      }
      f.someProperties  = ...
      
      return f
      }

### Синтаксис "new Function"

        let func = new Function([arg1, arg2, ...argN], functionBody);
        
        let sum = new Function('a', 'b', 'return a + b');
        sum(1, 2); // 3
        
        let sayHi = new Function('alert("Hello")');
        sayHi(); // Hello

`new Function` позволяет превратить любую строку в функцию. Например, можно получить новую функцию с сервера и затем
выполнить её:

`new Function` ее lexical environment сразу смотрит на глобальный, а не на родительский

        function getFunc() {
          let value = "test";
        
          let func = new Function('alert(value)');
        
          return func;
        }
        
        getFunc()(); // ошибка: value не определено~~

### Планирование: setTimeout и setInterval

    ---

### Декораторы и переадресация вызова, call/apply

Лучше с нуля прочитать из сайта и решить задачки

create custom method as call

      let arr: any[] = [];


    // @ts-ignore
    arr.join.myCall = function(context: any) {

      const symbol = Symbol();

      context[symbol] = this;

      const result = context[symbol]();
      delete context[symbol];
      return result;

    };
    // identify 
        console.error(arr.join.call(asf));
        // @ts-ignore
        console.error(arr.join.myCall(asf));

>

    /*
    let object = {
    objectFunction: objectFunction
    }

    let objectFunction = function(){
          this
    }
    objectFunction.someProperties = {}

    object.objectFunction() // object
    object.objectFunction.someProperties


    objectFunction.someProperties // this == objectFunction



    * */

see how to write polyfill for the call(), apply(), and bind() methods in JavaScript

### Привязка контекста к функции

Лучше с нуля прочитать из сайта и решить задачки

как работает bind

    let user = {
      name: 'Vasya',
      sayHi() {
        console.error('this:', this.name);
      }
    };

    function bind(context: any, func: any, ...args: any) {
      return function(...args1: any) {
        return func.apply(context, [...args, args1]);
      };
    }

    let sayHi = user.sayHi.bind(user);
    let sayHi1 = () => user.sayHi();
    setTimeout(sayHi, 100);
    setTimeout(sayHi1, 100);

### Повторяем стрелочные функции

- Не имеют this.
- Не имеют arguments.
- Не могут быть вызваны с new.
- (У них также нет super)

### Флаги и дескрипторы свойств

object properties has another attributes not only value

its called **'flags'** or **"descriptor"**

- _writable_
- _enumarble_
- _configurable_


- writable – если true, свойство можно изменить, иначе оно только для чтения.
- enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
- configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

how to get _full_ information about property

      let user = {
      name: "John"
      };
      
      let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
      
      alert( JSON.stringify(descriptor, null, 2 ) );
      /* дескриптор свойства:
      {
      "value": "John",
      "writable": true,
      "enumerable": true,
      "configurable": true
      }
      */

how to clone object with descriptor

     let user = {
      name: 'John'
    };

    Object.defineProperty(PropertyDescriptors, 'name', {
      writable: false
    });

    let userClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

    let ownPropertyDescriptors = Object.getOwnPropertyDescriptors(userClone);
    console.error(JSON.stringify(ownPropertyDescriptors));

### Свойства - геттеры и сеттеры

Лучше с нуля прочитать из сайта

### Прототипное наследование

дописать

### F.prototype

> как работает F.prototype

       /*
    *
    * let user = {name:'name'}
    * let admin = {__proto__:user}
    * set __proto__(value){
    * [[Prototype]]= value
    * }
    *
    * Object.constructor = Object
    *
    * let initialPrototype = {constructor: Rabbit}
    * Rabbit.prototype = initialPrototype
    * set initPrototype(){
    * [[Prototype]] = this.prototype
    * }
    * rabbit = new Rabbit()
    * new rabbit.constructor() // it's Rabbit constructor
    *
    * Rabbit.prototype = user
    * setInitPrototype(){
    * [[Prototype]] = this.prototype
    * }
    * rabbit = new Rabbit();
    * new rabbit.constructor() // it's Object constructor
    *
    * */

    /*
    Rabbit.prototype = animal
    const rabbit = new Rabbit()

    InitConstructor = {constructor: Rabbit}
    Rabbit  --> constructor --> Rabbit
    Rabbit  --> prototype --> animal
                               ^
                               | [[Prototype]]
                               |
                               rabbit

    * */


    /*
    Rabbit.prototype = {constructor: Rabbit }
    const rabbit = new Rabbit()

    InitConstructor = {constructor: Rabbit}
    Rabbit  --> constructor --> Rabbit
    Rabbit  --> prototype --> InitConstructor
                               ^
                               | [[Prototype]]
                               |
                               rabbit


    * */

### Встроенные прототипы

![img.png](../assets/native-prototypes.png)

      /*
    *
    * Изначально в js для каждого  типа встроили [[Prototype]]
    * внизу стоит примеры, как реализовано под капотом
    * */

    /*
    Object.prototype = {toString()}
    let obj ={ __proto__: Object.prototype}

    any create object has default __proto__: Object.prototype

    Function.prototype = {call(), apply()}

    function someFunction(){}
    // someFunction need to see like object
    someFunction.__proto__ = Function.prototype

    let arr = []
    // arr need to see like object
    arr.__proto__ = Array.prototype

    * */

    /*
    * Случай когда нужно создавать свой [[Prototype]]
    * через new Function и через object
    * */

    /*

    ConstructorPrototype = {constructor: f };
    customObject.prototype = ConstructorPrototype
    function customObject(){
    let this = {}
    this.someProperty = 234

    if(new.target){
     this.__proto__ = customObject.prototype
    }
    return this
    }
    let co = new customObject();
    new co.constructor() //it's called ConstructorPrototype

    let user = {name, __proto__:Object.prototype};


    let admin= {__proto__:user};
    admin.name // it's called ConstructorPrototype


    * */

>

    Есть функции Object, Function, Array, Map итд. У всех у них переписаны свойства prototype
    но при создания обычной функции function f(){}  prototype равен ConstructorPrototype = {constructor:f}
    и дальше если мы хотим изменить мы можем сами поменять prototype также как и у встроенных функции  Object, Function, Array, Map итд.
    обычно встроенный prototype ConstructorPrototype переписывают если мы хотим через функцию создать новый объект -> new f()

>

### Есть два способа скопировать методы

1) obj.join = Array.prototype.join;
2) [].join.call(arguments)

### Методы прототипов, объекты без свойства __proto__

> Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и
> необязательными дескрипторами свойств descriptors.

> Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.

> Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto

### Класс: базовый синтаксис

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

>

    /*
    1 отличие это то что Class при его реализации сразу расширяет свой prototype
    Function ж нет нужно либо вызвать функцию один раз либо расширять прототип из вне функции

    * */

Методы и конструкторы классы хранятся в его prototype
А свойства то же самое что и this у new Function


