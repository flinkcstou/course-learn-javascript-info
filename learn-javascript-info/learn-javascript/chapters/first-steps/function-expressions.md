### Function Expression

https://learn.javascript.ru/function-expressions

-`terminalogy`

- Function Declaration - Объявление Функции
- Function Expression - Функциональное Выражение


- Function Declaration (Объявление Функции): `function sayHi() {}`
- Function Expression: let sayHi = function() {}

**Function Expression в сравнении с Function Declaration**

-Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.

>

        function sum(a, b) {
        return a + b;
        }

- Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае
  функция создаётся в правой части «выражения присваивания» =:

>

        // Function Expression
        let sum = function(a, b) {
        return a + b;
        };

- Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
- Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.
