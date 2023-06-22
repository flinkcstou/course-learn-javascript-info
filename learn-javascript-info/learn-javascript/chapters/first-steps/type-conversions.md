### Преобразование типов(Type conversations)

https://learn.javascript.ru/type-conversions

- `terminology`
    - преобразования - conversions
    - An **operand** – is what operators are applied to. in the multiplication of 5 * 2 there are two operands: the left
      operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
    - An **operator is unary** if it has a single operand.
    - An **operator is binary** if it has two operands. The same minus exists in binary form as well:

Преобразование примитивных типов в другие типы

**Строковое преобразование (String Conversion)**

value primitive convert to string used:

- String(value);
- value + "" // бинарный оператор(binary operator);
- alert(value)

          var message = 'hello'
          var isMessage = true
          var isNotMessage = false
          var countMessage = 5
          var undefinedMessage; // undefined
          var nullMessage = null

          String(message) // "hello"
          String(isMessage) // "true"
          String(isNotMessage) // "false"
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


**Численное преобразование (Numeric Conversion)**

value primitive convert to number used:

- Number(value)
- +value // унарный оператор(перевод)
- any mathematical arithmetic operator (/, %, -, *)

        var message = 'hello'
        var isMessage = true
        var isNotMessage = false
        var countMessage = 5
        var countMessageString = "5"
        var undefinedMessage; // undefined
        var nullMessage = null

        Number(message) // NaN
        Number(isMessage) // 1
        Number(isNotMessage) // 0
        Number(countMessage) // 5
        Number(countMessageString) // 5
        Number(undefinedMessage) // NaN
        Number(nullMessage) // 0
        
        +message // NaN
        +isMessage // 1
        +isNotMessage // 0
        +countMessage // 5
        +countMessageString // 5
        +undefinedMessage // NaN
        +nullMessage // 0
        
        "6" / "2" // 3
        
        1 + 1 // 2
        +"1" // 1  unary operator 'plus' convert to number because it's arithmetic operator 
        true + "1" // 'true1'  binary operator `plus` and we had diferent data type operands. it will be convert to string

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

**Логическое преобразование (Boolean Conversion)**

value primitive convert to boolean used:

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
        Boolean("false") // true
        Boolean("true") // true
        Boolean(true) // true
        Boolean(false) // false
        
        !undefined // true
        !null // true
        
        5 > 4 // true
        
        false == 0 // true

> 0, null, undefined, NaN, "" => false
>
> любое другое значение => true




**full example**

    Number(' '); String(' '); Boolean(' ')
    Number('true'); String('true'); Boolean('true')
    Number('false'); String('false'); Boolean('false')
    Number(-1); String(-1); Boolean(-1)

     Number(false); String(false); Boolean(false)
     Number(true); String(true); Boolean(true)
     Number(0); String(0); Boolean(0)
     Number(1); String(1); Boolean(1)
     Number('0'); String('0'); Boolean('0')
     Number('000'); String('000'); Boolean('000')
     Number('1'); String('1'); Boolean('1')
     Number(NaN); String(NaN); Boolean(NaN)
     Number(Infinity); String(Infinity); Boolean(Infinity)
     Number(-Infinity); String(-Infinity); Boolean(-Infinity)
     Number('); String('); Boolean(')
     Number('20'); String('20'); Boolean('20')
     Number('twenty'); String('twenty'); Boolean('twenty')
     Number([ ]); String([ ]); Boolean([ ])
     Number([20]); String([20]); Boolean([20])
     Number([10,20]); String([10,20]); Boolean([10,20])
     Number(['twenty']); String(['twenty']); Boolean(['twenty'])
     Number(['ten','twenty']); String(['ten','twenty']); Boolean(['ten','twenty'])
     Number(function(){}); String(function(){}); Boolean(function(){})
     Number({ }); String({ }); Boolean({ })
     Number(null); String(null); Boolean(null)
     Number(undefined); String(undefined); Boolean(undefined)
