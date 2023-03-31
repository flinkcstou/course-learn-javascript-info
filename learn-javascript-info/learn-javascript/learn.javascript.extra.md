### Lexical environment

        var first;
        var second;
        
        function testFn() {
          var a = 10;
          
          first = function() {
            return ++a;
          }
        
          second = function() {
           return --a;
          }
        
          a = 2;
          first();//3
        }
        
        testFn();
        
        first();//4
        second();//3

#### Есть три понятия это lexical environment, область видимости и контекст

- контекст это `reference-type` у функции
- область видимости это относится к переменным
- `lexical environment` это область видимости для блочных элементов, где создаются ссылки на верхние уровни



Т.е. декоратор передаёт вызов оригинальному методу, но без контекста. Следовательно – ошибка.

            let func = worker.slow;
            func(2);

Давайте это исправим.

Существует специальный встроенный метод функции func.call(context, …args), который позволяет вызывать функцию, явно устанавливая this.

        function sayHi() {
          alert(this.name);
        }
        
        let user = { name: "John" };
        let admin = { name: "Admin" };
        
        // используем 'call' для передачи различных объектов в качестве 'this'
        sayHi.call( user ); // John
        sayHi.call( admin ); // Admin

также существует `bind`, который будет хранить в себе context для лучшего понимания нужно пройти материал


### Продвинутая работа с функциями

мне нужно самому дописать основные концепции о lexical environment, context, reference type
и со всеми примерами. Кажется, завтра допишу.

