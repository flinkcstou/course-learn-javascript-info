### Класс: базовый синтаксис

    /*
      just function
      has local variable
      has property
      has __proto__ = Function prototype
      has prototype = ConstructorPrototype
      * */

      /*
      new function;
      function has local variable
      function has property
      function has __proto__ Function.prototype
      function has prototype = ConstructorPrototype
      has created variable "this"
      variable "this" has __proto__ = ConstructorPrototype

      * */

>

    /*
    1 отличие это то что Class при его реализации сразу расширяет свой prototype
    Function ж нет нужно либо вызвать функцию один раз либо расширять прототип из вне функции

    * */

Методы и конструкторы классы хранятся в его prototype
А свойства то же самое что и this у new Function


