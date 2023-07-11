### Преобразование объектов в примитивы

https://learn.javascript.ru/object-toprimitive

- terminology
    - fa

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
        
        // for unary operator(+)
        obj + 1 // при binary plus, hint = 'default'
        // for double equals(==)  comparisons operator
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

`Symbol.toPrimitive`, `valueOf`, `toString` должны возвращать примитив либо значение будет проигнорировано и
последовательно будет вызываться остальные методы `Symbol.toPrimitive`, `valueOf`, `toString`

`valueOf` возвращает по историческим причинам объект самого себя
`toString` если переопределить и вернуть объект а не примитив, то `use strict` будет кидать
ошибку- `Cannot convert object to primitive value`

**Дальнейшие преобразования(Further conversions)**

1. Объект преобразуется в примитив (с использованием правил, описанных выше).
2. Если необходимо для дальнейших вычислений, этот примитив преобразуется дальше.

        let obj = {
        // toString обрабатывает все преобразования в случае отсутствия других методов
        toString() {
        return "2";
        }
        };
        alert(obj * 2); // 4, объект был преобразован к примитиву "2", затем умножение сделало его числом

**моя мысль**
у корневого объекта реализованы дефолтные `toString, valueOf` но когда мы создаем свой объект инстанции то он будет
учитывать только `toString` который реализован дефолтный, а вот `valueOf` проигнорирует, как это выглядит на практике:
Какой б хинт(default, number, string) не прилетел. Он один фиг будет вызывать для `default, number` метод  `valueOf()`
но из за того что он возвращает объект, а не примитив. Будет проигнорирован метод, дальше вызовет метод  `toString` а
там возвращается примитив string со значением -`[Object object]`. Ну как только сам создашь в объекте свой
метод `valueOf`, который
будет возвращать примитив, только тогда будет работать hint корректно для  `number`, `default`;

Если так случится что вы переопределили все три метода `Symbol.toPrimitive`, `valueOf`, `toString` и сделали так что они
будут возвращать `объекты` а не примитивы, то js выведет ошибку `Cannot convert object to primitive value`, при
преобразовании в примитив

### КОММЕНТЫ

Ниже я раскидал 3 основных типа преобразования, просто запомните их:

1) Объект в булевый. Это самое простое, здесь все объекты -true, даже пустые. Поэтому:

>

      const obj1 = {};
      const obj2 = [];
      console.log(Boolean(obj1)) //true
      if (obj2) {
      console.log("exists!")
      }
      //exists!

2) Числовой. Если взять объект и попытаться сложить его с другим объектом, числом, строкой, булеаном, null и т.д, то
   получится вот такая шляпа:

>

      console.log({hobby: 'drug-dealer'} + "nigga") // [object Object]nigga
      console.log(22 + {}) // 22[object Object]
      console.log(null + {} + undefined) // null[object Object]undefined

Чё за ботва? Короче, интерпретатор JS не знает, как распедалить данный говнокод. Сначала он пытается преобразовать всё к
числам, потому что там + стоит. Естественно, ни фига у него не выходит и тогда он думает: "Лажа какая-то. Нафига глупый
кожаный мешок хочет прибавить объект? С дуба рухнул? Может он строку хотел сконкатенировать?" В итоге он берёт, заменяет
объект строкой [object Object], всё превращает в строки и склеивает их в одну большую.
Если объект попытаться умножить, поделить, вычесть, возвести в степень и тд, то сразу получится NaN без всяких
выкрутасов:

      console.log({} * 88) //NaN
      console.log({} ** 2) //NaN
      console.log(10 / {}) //NaN

