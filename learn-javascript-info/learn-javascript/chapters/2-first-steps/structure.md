### Структура кода(Code structure)

https://learn.javascript.ru/structure

- `terminalogy`
    - точка запятая - semicolon
    - звездочка - asterisk
    - косой чертой - forward slash

Нужно всегда ставить точку запятую в конце строки. В js это опционально, но рекомендуется ставить точку запятую(
semicolon).

Причина:

        alert("Сейчас будет ошибка")
        [1, 2].forEach(alert)

будет прочитан как  `alert("Сейчас будет ошибка")[1, 2].forEach(alert)` и функция alert возвращает undefined и у
undefined хотим взять первый второй элемент массива.

Есть два вида Комментарии внутри кода:

- Однострочные комментарии(One-line comments)  начинаются с двойной косой черты `//`.
- Многострочные комментарии(Multiline comments) начинаются косой чертой со звёздочкой `/*` и заканчиваются звёздочкой с
  косой чертой `*/`.

- `//`
- `/**/`
