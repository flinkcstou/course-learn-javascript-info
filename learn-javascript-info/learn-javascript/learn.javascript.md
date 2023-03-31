### Введение

- js может работать везде (браузер, сервер, устройство) нужен только движок, один из них V8. Движок компилирует js в
  машинный код и только потом запускается машинный код
- js браузер не может общаться между двумя страницами для того чтоб они могли общаться есть `(Same Origin Policy)`
- Есть языки над js, которые в конечном итоге транспилируют(конвертируют) в js code. Такие языки как (CoffeeScript,
  TypeScript, Brython, Flow, Dart)

### Справочники и спецификации

- чтоб искать что то в интернете связанный с js можете добавлять суффикс `MDN` пример `MDN js parseInt`
- есть сайт `http://caniuse.com` где вы можете посмотреть какие функции поддерживается в разных браузерах. Не только js
  и все технологии браузера.

### IDE

**есть такие IDE:**

- `Visual Studio Code (бесплатно)`
- `WebStorm (платно)`.

Предпочтительнее WebStorm

**есть еще редакторы кода:**

- Atom (кроссплатформенный, бесплатный).
- Sublime Text (кроссплатформенный, условно-бесплатный).
- Notepad++ (Windows, бесплатный).

### Основы javascript

**как добавлять script в html:**

- `<script src="/js/script1.js"></script>`
- `<script>
  alert(1);
  </script>`

нельзя в одном скрипте писать и загружать скрипт

- `<script src="/js/script1.js">    alert(1); </script>` ERROR

### Структура кода

нужно всегда ставить точку запятую в конце строки. В js это опционально, но рекомендуется ставить точку запятую(перевод)
.

Причина:

        alert("Сейчас будет ошибка")
        [1, 2].forEach(alert)

будет прочитан как  `alert("Сейчас будет ошибка")[1, 2].forEach(alert)` и функция alert возвращает undefined и у
undefined хотим взять первый второй элемент массива.

Есть два вида Комментарии внутри кода:

- Однострочные комментарии начинаются с двойной косой черты `//`.
- Многострочные комментарии начинаются косой чертой со звёздочкой `/*` и заканчиваются звёздочкой с косой чертой `*/`.

- `//`
- `/**/`

### Переменные(перевод)

Приведённая ниже инструкция создаёт (другими словами: объявляет или определяет) переменную с именем «message»:

    var message

Для краткости можно совместить объявление переменной и запись данных в одну строку:

    var message = 'Hello!'

Мы также можем объявить несколько переменных в одной строке:

    let user = 'John', age = 25, message = 'Hello';

`var`  это устаревший вид объявления вместо него сейчас используется `let`

разница между ними:

- `var` можно хоть сколько раз объявлять одну и ту же переменную, а let выкинет ошибку.

        var message ='sdf';
        var message ='sdf; // не будет ошибки
        
        let cat = 'John';
        let cat = 'John'; // будет ошибка

- `var` будет существовать вне блока а `let` не может

        {
        var message ='sdf' 
        } 
        console.error(message) // message будет доступен и вне блока
        
        {
        let cat = 'John
        }
        console.error(cat) // ошибка cat не будет доступен вне блока        

Чтобы объявить константную, то есть, неизменяемую переменную, используйте `const` вместо `let`:

    const COLOR_RED = "#F00";

В JavaScript есть два ограничения, касающиеся имён переменных:

- Имя переменной должно содержать только буквы, цифры или символы $ и _.
- Первый символ не должен быть цифрой.

        let userName;
        let test123;
        let $ = 1; // объявили переменную с именем "$"
        let _ = 2; // а теперь переменную с именем "_"

Примеры неправильных имён переменных:

        let 1a; // не может начинаться с цифры        
        let my-name; // дефис '-' не разрешён в имени

### Типы данных

Есть восемь основных типов данных в JavaScript.

> number, bigint, string, boolean, undefined, object, symbol, function

**Число**

Числовой тип данных (number)

к числам относятся 1,2,3... Infinity, -Infinity и NaN. и

В JavaScript тип «number» не может содержать числа больше, чем (2^53-1) (т. е. 9007199254740991)

**bigInt**

есть `bigInt` чтоб работать с произвольной длины

        // символ "n" в конце означает, что это BigInt
        const bigInt = 1234567890123456789012345678901234567890n;

**Строка**

Строка (string) в JavaScript должна быть заключена в кавычки.

В JavaScript существует три типа кавычек.
Двойные, Одинарные, Обратные(перевод)

        let str = "Привет";
        let str2 = 'Одинарные кавычки тоже подойдут';
        let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;(перевод)

Обратные же кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в
${…}. Например:

        let name = "Иван";
       
        // Вставим переменную
        alert( `Привет, ${name}!` ); // Привет, Иван!

**Булевый (логический) тип**

это `true` `false` и результаты сравнения

        let nameFieldChecked = true; // да, поле отмечено
        let ageFieldChecked = false; // нет, поле не отмечено
        let isGreater = 4 > 1; // результаты сравнений:

**Значение «null»**

Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».

    let age = null;
    
    // особенности null 
    typeof null // object
    +null // 0
    null == 0 // false
    null >= 0
    null == undefined // true

**Значение «undefined»**

Оно означает, что «значение не было присвоено».

    let age;
    
    alert(age); // выведет "undefined"

**Объекты и символы**

Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения (будь то
строка, или число, или что-то ещё). В объектах же хранят коллекции данных или более сложные структуры.

**Оператор typeof**

Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному
или просто хотим сделать проверку.

У него есть две синтаксические формы:

- Синтаксис оператора: `typeof x`.
- Синтаксис функции: `typeof(x)`.

        typeof undefined // "undefined"
        
        typeof 0 // "number"
        
        typeof 10n // "bigint"
        
        typeof true // "boolean"
        
        typeof "foo" // "string"
        
        typeof Symbol("id") // "symbol"
        
        typeof Math // "object"  (1)

        
        typeof null // "object"  (2)
        
        typeof alert // "function"  (3)

### Преобразование типов

преобразование примитовных типов в другие типы

**Строковое преобразование**

value primitive to string used:

- String(value);
- value + "" // бинарный оператор(перевод);
- alert(value)

            var message = 'hello'
            var isMessage = true
            var countMessage = 5
            var undefinedMessage; // undefined
            var nullMessage = null

            String(message) // "hello"
            String(isMessage) // "true"
            String(countMessage) // "5"
            String(undefinedMessage) // "undefined"
            String(nullMessage) // "null"
            
            message + "" =  "hello"  
            isMessage + "" =  "true"  
            countMessage + "" =  "5"  
            undefinedMessage + "" =  "undefined"  
            nullMessage + "" =  "null"  
            
            alert(countMessage) // "5"

> значения `undefined`, `null` когда преобразуем в `string` становится строчным значением `"null" "undefined"`.


**Численное преобразование**

value primitive to number used:

- Number(value)
- +value // унарный оператор(перевод)
- any mathematical arithmetic (/, %, -, *)

        var message = 'hello'
        var isMessage = true
        var countMessage = 5
        var undefinedMessage; // undefined
        var nullMessage = null

        Number(message) // NaN
        Number(isMessage) // 1
        Number(countMessage) // 5
        Number(undefinedMessage) // NaN
        Number(nullMessage) // 0
        
        +message // NaN
        +isMessage // 1
        +countMessage // 5
        +undefinedMessage // NaN
        +nullMessage // 0
        
        "6" / "2" // 3
        
        true + "1" // 2

> undefined => NaN
>
> null => 0
>
> true / false =>  1 / 0
>
> `string`  Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем 0, иначе из непустой
> строки «считывается» число. При ошибке результат NaN.

        Number("  123  ") // 123
        Number("  hello  ") // NaN
        Number("  123 hello  ") // NaN
        Number("") // 0

**Логическое преобразование**

value primitive to boolean used:

- Boolean(value)
- !value
- результаты сравнения

        Boolean(1) // true
        Boolean(0) // false
        Boolean(NaN) // false
        Boolean(undefined) // false
        Boolean(null) // false
        Boolean("") // false
        Boolean(" ") // true
        Boolean("0") // true
        
        !undefined // true
        !null // true
        
        5 > 4 // true
        
        false == 0 // true

> 0, null, undefined, NaN, "" => false
>
> любое другое значение => true

### Базовые операторы, математика

Термины: «унарный», «бинарный»

- `Унарным` называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак
  числа на противоположный:

        let x = 1;
        
        x = -x;
        alert( x ); // -1, применили унарный минус

- `Бинарным` называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:

        let x = 1, y = 3;
        alert( y - x ); // 2, бинарный минус вычитает значения

> у бинарного `+` может сложить числа, а также строки

        let s = "моя" + "строка";
        alert(s); // моястрока
        alert( '1' + 2 ); // "12"
        alert( 2 + '1' ); // "21"  

Бинарный `+` имеет степень важности

- между двумя примитивами кроме `string`  преобразуется в `number` и вычисляется. Так как бинарный `+` работает как
  математический оператор
- между любой примитивом и `string` преобразуется в `string`

            true + null // 1
            undefined + null + true // NaN
            true + '1' // "true1" 

### Операторы сравнения

**Сравнение одинаковых типов**

работает как обычно

- если `number` то у кого больше значения там и true
- если `string` то у кого больше index по unicode там и true
- если `boolean` то у кого true там и true :)

**Сравнение разных типов**

При сравнении значений разных типов JavaScript приводит каждое из них к `number`.

        alert( '2' > 1 ); // true, строка '2' становится числом 2
        alert( '01' == 1 ); // true, строка '01' становится числом 1
        alert( true == 1 ); // true, true становится числом 1
        alert( false == 0 ); // true, false становится 0

есть два варианта сравнивания:

- сравниваем сразу между разными типами
- сначала преобразуем в один из типов и потом сравниваем

в чем разница ?

- сравним сразу разные типы без преобразования где за нас сам js сделает и преобразует в тип `number`
- преобразуем разные типы в boolean и потом сравним.

            let a = 0;
            let b = "0";
            a == b // true, переменная b преобразуется в `number` и значения будет 0 
            
            let aB = Boolean(a) //false, переменная a в boolean это false  
            let bB = Boolean(b) // true, переменная b в boolean это true
            aB == bB // false 

Как мы видим разные ответы получаем в зависимости какой тип преобразования использовать в сравнениях

Мы можем сами изначально определить по какому типу преобразования будем работать при сравнении, либо работаем по логике
js где он сам преобразуется в тип `number`

**Строгое сравнение**(перевод)

для строго неравенства используется `===`

если будем сравнивать разные типы будет всегда `false`,
так как он проверяет для начало сами типы если типы разные значит `false`

**Сравнение с null и undefined**

как мы знаем преобразования null к `number` равен 0,
но тут есть одна загвоздка

        null == 0 // false, хотя должен был ответ быть true так как null станвится 0 и 0 == 0 должен дать true
        null >= 0 // true

к этому случаю есть исключения:

- для нестрогого равенства == значений `undefined` и `null` действует особое правило: эти значения ни к чему не
  приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.

### Условное ветвление: if, '?'

**Условный оператор „?“**

Синтаксис:

        let result = условие ? значение1 : значение2;
        
        let accessAllowed = (age > 18) ? true : false; // true

### Логические операторы

В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ).(перевод)

**|| (ИЛИ)**(перевод)

- будет выполняться до тех пор пока первое значения не будет true
- Если все операнды являются ложными (false), возвращает последний из них.

        result = value1 || value2 || value3;

**&& (И)**(перевод)

- находит первое ложное значение
- Если все операнды были истинными, возвращается последний.

        result = value1 && value2 && value3;

> Приоритет оператора && больше, чем у ||
>
Таким образом, код `a && b || c && d` по существу такой же, как если бы выражения && были в круглых
скобках: `(a && b) || (c && d)`.

**! (НЕ)**(перевод)

Оператор НЕ представлен восклицательным знаком !.

        result = !value;

### Оператор объединения с null '??' (перевод)

|| возвращает первое истинное значение.
?? возвращает первое определённое значение.

        (null) || '' || 'user' // 'user'
        (null) ?? '' ?? 'user' ?? ''

- для ?? только если не `null` и `undefined`
- для || все что логический `boolean` не `false`

### Циклы while и for

отличие идет в переменных, как было сказано ранее `let` живет только внутри блока

        for(){
        let message= 'message'
        var varMessage ='varMesssage'
        } 
        message // undefined
        varMessage // 'varMessage

### Функции

        function имя(параметры) {
          ...тело...
        }(перевод)

### Function Expression

Function Declaration (Объявление Функции):

        function sayHi() {
          alert( "Привет" );
        }

Function Expression (Функциональное Выражение).

        let sayHi = function() {
          alert( "Привет" );
        };

«стрелочные функции» (arrow functions),

        let func = (arg1, arg2, ...argN) => expression
        
        let func = (arg1, arg2, ...argN) => {body}

function in object

        user = {
          sayHi: function() {
            alert("Привет");
          }
        };
        
        // сокращённая запись выглядит лучше, не так ли?
        user = {
          sayHi() { // то же самое, что и "sayHi: function()"
            alert("Привет");
          }
        };

### Полифилы(перевод)

Babel – это транспилер(перевод). Он переписывает современный JavaScript-код в предыдущий стандарт.

core js - это полифил(перевод)

Транспайлер - переписывает новый синтаксис языка в старый.
Например:

    // объявление переменных в новом стиле
    const a = `константа`;
    let b = `изменяемая переменная`;

    // приводит к объявлению в старом стиле
    var a = `константа`;
    var b = `изменяемая переменная`;

Полифилл - реализовывает функции из новой версии языка, которых нет в старой
Например:

    // проверка является ли arr массивом в новом варианте
    if (Array.isArray(arr) === true) alert('массив!');
    
    // проверка является ли arr массивом в старом варианте
    
    // Полифилл функции из "новой" версии для старой "версии" языка
    // (для примера здесь, пропишем прямо в прототип Array)
    Array.__proto__.isArray = function(value) {
    return value instanceof Array;
    };
    
    if (Array.isArray(arr) === true) alert('массив!');

### Объекты

    let user = new Object(); // синтаксис "конструктор объекта"(перевод)
    let user = {};  // синтаксис "литерал объекта"(перевод)

    let user = {
      name: "John",
      "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
    };
    
    let user = {};
    
    // присваивание значения свойству
    user["likes birds"] = true;
    
    // получение значения свойства
    user["likes birds"]
    
    let key = "likes birds";
   
    // то же самое, что и user["likes birds"] = true;
    user[key] = true;
    
    let bag = {
      [fruit]: 5, // имя свойства будет взято из переменной fruit
    };
    
    alert( bag.apple ); // 5, если fruit="apple"
    
    
    let user = { name: "John", age: 30 };
    
    alert( "age" in user ); // true, user.age существует
    alert( "blabla" in user ); // false, user.blabla не существует
    
    for (let key in user) {
      // ключи
      alert( key );  // name, age, isAdmin
      // значения ключей
      alert( user[key] ); // John, 30, true
    }

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


