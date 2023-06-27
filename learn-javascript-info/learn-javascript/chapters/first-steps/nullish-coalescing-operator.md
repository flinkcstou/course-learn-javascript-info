### Оператор нулевого слияния (??)(Nullish coalescing operator '??')

https://learn.javascript.ru/nullish-coalescing-operator

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
