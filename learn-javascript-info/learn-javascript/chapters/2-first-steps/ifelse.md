### Условное ветвление: if, '?'(Conditional branching: if, '?')

https://learn.javascript.ru/ifelse

- `terminalogy`

**conditional operators**

- `?`
- `if()`

**Boolean conversion**

- The `if (…)` statement evaluates the expression in its parentheses and converts the result to a boolean.
- Let’s recall the conversion rules from the chapter `Type Conversions`:
- A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy”
  values.
- Other values become true, so they are called “truthy”.

**Условный оператор „?“(Conditional operator ‘?’)**

Синтаксис:

        let result = условие ? значение1 : значение2;
        
        let accessAllowed = (age > 18) ? true : false; // true
