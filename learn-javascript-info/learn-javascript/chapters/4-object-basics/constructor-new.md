### Конструктор, оператор "new"(Constructor, operator "new")

https://learn.javascript.ru/constructor-new

- `terminology`
    - 'asd'

оператор `new` дает неявное создание нового объекта `this`

        function User(name) {
          // this = {};  (неявно)
        
          // добавляет свойства к this
          this.name = name;
          this.isAdmin = false;
        
          // return this;  (неявно)
        }
        
        let user = new User("Вася");
        
        alert(user.name); // Вася
        alert(user.isAdmin); // false

есть анонимный вызов

        var user = new function(){}
        
        // не нужно вызывать метод так как оператор `new` сделал все за нас
        // посмотрим на это по другому
        
        function User(){
        this.name ='John';
        }
        var user = new User; // это будет валиден, не зависимо от того, что нет скобок так как 'new' все делает за нас
        var user = new User(); // ничено не будет от того что вызываем скобки

для проверки что функция вызвана обычным способом без оператора `new`

        function User(){
        console.error(new.target) // вернет функцию если был вызван через  оператор `new`
        }

если мы в функции возвращаем примитивный тип, то значения `this` сохранится, а если объект возвращаем, то вернет объект

        function SmallUser() {
        
          this.name = "Вася";
        
          return; // <-- возвращает this
        }
        
        alert( new SmallUser().name );  // Вася
        

        function BigUser() {
          this.name = "Вася";
          return { name: "Godzilla" };  // <-- возвращает этот объект
        }
        
        console.error(new BigUser().name) // Godzilla, получили этот объект
