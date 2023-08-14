### Базовые операторы, математика(Basic operators, maths)

https://learn.javascript.ru/operators

- `terminalogy`
    - унарный - unary - одинарный
    - бинарный - binary -двойной

**Виды операторов и выражения языка Javascirpt (Expressions and operators)**

- Операторы присваивания - Assignment operators  [LINK](8-operators.md)
- Арифметические операторы - Arithmetic operators  [LINK](8-operators.md)
- Битовые (поразрядные) операторы - Bitwise operators [LINK](8-operators.md)
- BigInt операторы -BigInt operators [LINK](8-operators.md)
- Строковые операторы - String operators [LINK](8-operators.md)
- Оператор запятая - Comma operator [LINK](8-operators.md)
- Унарные операторы - Unary operators [LINK](8-operators.md)
- Операторы отношения - Relational operators [LINK](8-operators.md)
- Операторы сравнения - Comparison operators  [LINK](9-comparison.md)
- Логические операторы - Logical operators [LINK](11-logical-operators.md)
- Условный (тернарный) оператор - Conditional (ternary) operator  [LINK](10-ifelse.md)


- `Операнд` – то, к чему применяется оператор. Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а
  правый операнд равен 2. Иногда их называют «аргументами(arguments)» вместо «операндов(operands)».

        5 * 2 // operand тут 5 и 2

- `Унарным` называется оператор, который применяется к одному операнду. Например, оператор унарный минус "-" меняет знак
  числа на противоположный:

        let x = 1;
        
        x = -x;
        alert( x ); // -1, применили унарный минус

- `Бинарным` называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме:

        let x = 1, y = 3;
        alert( y - x ); // 2, бинарный минус вычитает значения

**Бинарный `+` имеет степень важности**

> у бинарного plus `+` может сложить числа, а также строки

        let s = "моя" + "строка";
        alert(s); // моястрока
        alert( '1' + 2 ); // "12"
        alert( 2 + '1' ); // "21"  

- между двумя примитивами кроме `string`  преобразуется в `number` и вычисляется. Так как бинарный `+` работает как
  математический оператор
- между любой примитивом и `string` преобразуется в `string`

            true + null // 1
            undefined + null + true // NaN
            true + '1' // "true1" 

**Математика, Арифметические операторы(Arithmetic operators)**

An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single
numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (
/).

- Сложение +, Addition +,
- Вычитание -, Subtraction -,
- Умножение *, Multiplication *,
- Деление /, Division /,
- Взятие остатка от деления %, Remainder %,
- Возведение в степень **. Exponentiation **.

        a = 5 + 3
        a = 5 - 3

**Присваивание, Операторы присваивания(Assignment operators)**

An assignment operator assigns a value to its left operand based on the value of its right operand. The simple
assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = f() is
an assignment expression that assigns the value of f() to x.

- Присваивание - x = y, x = y
- Присваивание со сложением - x += y, x = x + y
- Присваивание с вычитанием - x -= y, x = x - y
- Присваивание с умножением - x *= y, x = x * y
- Присваивание с делением - x /= y, x = x / y
- Присваивание по модулю - x %= y, x = x % y
- Присваивание с левым сдвигом - x <<= y, x = x << y
- Присваивание с правым сдвигом - x >>= y, x = x >> y
- Присваивание с беззнаковым сдвигом вправо - x >>>= y, x = x >>> y
- Присваивание с побитовым AND - x &= y, x = x & y
- Присваивание с побитовым XOR - x ^= y, x = x ^ y
- Присваивание с побитовым OR - x |= y, x = x | y
- Logical OR assignment x ||= f(), x || (x = f())
- Nullish coalescing assignment x ??= f(), x ?? (x = f())

**Побитовые операторы(Bitwise operators)**

A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or
octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their
operations on such binary representations, but they return standard JavaScript numerical values.

- Bitwise AND - a & b
- Bitwise OR - a | b
- Bitwise XOR - a ^ b
- Bitwise NOT -    ~ a
- Left shift - a << b
- Sign-propagating right shift - a >> b
- Zero-fill right shift - a >>> b

**Строковые операторы(String operators)**

In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates
two string values together, returning another string that is the union of the two operand strings.

- binary operator plus `+`

        let a = '34' + 'fsdf' // '34fsdf'

**Оператор «запятая»(Comma operators)**


The comma operator (,) evaluates both of its operands and returns the value of the last operand. This operator is
primarily used inside a for loop, to allow multiple variables to be updated each time through the loop. It is regarded
bad style to use it elsewhere, when it is not necessary. Often two separate statements can and should be used instead.

- comma operator `,`

          // три операции в одной строке
            for (a = 1, b = 3, c = a * b; a < 10; a++) {
            ...
            }

Запятая имеет очень низкий приоритет. Пожалуйста, обратите внимание, что оператор , имеет очень низкий приоритет,
ниже `=`,

**Унарные операторы(Unary operators)**

A unary operation is an operation with only one operand.

- delete object.property - `delete`
- typeof function(){} - `typeof`
- void - `void`

**Операторы отношения(Relational operators)**

A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

- propNameOrNumber in objectName - `in`
- objectName instanceof objectType `instanceOf`
-

**BigInt операторы(BigInt operators)**

Most operators that can be used between numbers can be used between BigInt values as well.

    // BigInt addition
    const a = 1n + 2n; // 3n
    // Division with BigInts round towards zero
    const b = 1n / 2n; // 0n
    // Bitwise operations with BigInts do not truncate either side
    const c = 40000000000000000n >> 2n; // 10000000000000000n

