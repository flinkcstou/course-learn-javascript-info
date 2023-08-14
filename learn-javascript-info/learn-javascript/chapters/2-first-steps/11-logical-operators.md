### Логические операторы(Logical operators)

https://learn.javascript.ru/logical-operators

- `terminalogy`

> В JavaScript есть четыре логических
> оператора: `|| (ИЛИ), && (И), ! (НЕ), нулевое слияние(OR, AND, NOT, nullish-coalescing)`

**|| (ИЛИ)(OR)**

- `||` возвращает первое истинное значение.
- будет выполняться до тех пор, пока первое значения не будет true
- Если все операнды являются ложными (false), возвращает последний из них.

        result = value1 || value2 || value3;

**&& (И) (AND)**

- находит первое ложное значение
- Если все операнды были истинными, возвращается последний.
- возвращает true, если все аргументы истинны, а иначе – false:

       result = value1 && value2 && value3;

> Приоритет оператора && больше, чем у ||
>
Таким образом, код `a && b || c && d` по существу такой же, как если бы выражения && были в круглых
скобках: `(a && b) || (c && d)`.

**! (НЕ)(NOT**

- Оператор НЕ представлен восклицательным знаком !.
- Сначала приводит аргумент к логическому типу true/false.
- Затем возвращает противоположное значение.

        result = !value;
        console.error(!true); // false

**?? (нулевое слияние)(nullish-coalescing**

- `??` возвращает первое определённое значение.
- Иначе говоря, оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.

      result = (a !== null && a !== undefined) ? a : b; 
      let user;
      alert(user ?? "Аноним"); // Аноним (user не существует)


- || возвращает первое истинное значение.
- ?? возвращает первое определённое значение.

        (null) || '' || 'user' // 'user'
        (null) ?? '' ?? 'user' ?? ''

- для ?? только если не `null` и `undefined`
- для || все что логический `boolean` не `false`