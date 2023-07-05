### Методы примитивов(Methods of primitives)

https://learn.javascript.ru/primitives-methods

- `terminology`

движок javascript создает для примитвных типов обертку над ними

Каждый примитив имеет свой собственный «объект-обёртку», которые называются: String, Number, Boolean и Symbol. Таким
образом, они имеют разный набор методов.

К примеру, существует метод str.toUpperCase(), который возвращает строку в верхнем регистре.

Вот, как он работает:

            let str = "Привет";
            
            alert( str.toUpperCase() ); // ПРИВЕТ
