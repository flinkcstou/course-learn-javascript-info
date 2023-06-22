### Типы данных(Data types)

- `terminalogy`
    - типы данных - data types
    - кавычки - quotes
    - Обратные кавычки - Backticks
    - операнд - operand

Есть восемь основных типов данных в JavaScript.

> number, bigint, string, boolean, undefined, object, symbol, function

**Число (number type)**

Числовой тип данных (number)

к числам относятся 1,2,3... Infinity, -Infinity и NaN. и

В JavaScript тип «number» не может содержать числа больше, чем (2^53-1) (т. е. 9007199254740991)

**bigInt (bigInt type)**

есть `bigInt` чтоб работать с произвольной длины

        // символ "n" в конце означает, что это BigInt
        const bigInt = 1234567890123456789012345678901234567890n;

**Строка(string type)**

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

> There is no **character type**.

- In some languages, there is a special “character” type for a single character. For example, in the C language and in
  Java it is called “char”.
- In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be
  empty),
  one character or many of them.

**Булевый (логический) тип (boolean type)**

это `true` `false` и результаты сравнения

        let nameFieldChecked = true; // да, поле отмечено
        let ageFieldChecked = false; // нет, поле не отмечено
        let isGreater = 4 > 1; // результаты сравнения преобразует в boolean, а на сам процесс сравнения, именно результат после сравнения

**Значение «null» (null type)**

Это просто специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».

    let age = null;
    
    // особенности null 
    typeof null // object
    +null // 0
    null == 0 // false
    null >= 0 // true
    null == undefined // true

**Значение «undefined» (undefined type)**

Оно означает, что «значение не было присвоено».
(The meaning of undefined is “value is not assigned”.)

    let age;
    
    alert(age); // выведет "undefined"

**Объекты и символы (Object type and Symbol type)**

Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения (будь то
строка, или число, или что-то ещё). В объектах же хранят коллекции данных или более сложные структуры.

**Оператор typeof (typeof is a unary operator)**

Оператор typeof возвращает тип операнда(operand). Это полезно, когда мы хотим обрабатывать значения различных типов
по-разному
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
