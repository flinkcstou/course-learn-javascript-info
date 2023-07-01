### Методы объекта, "this"(Object methods, "this")

https://learn.javascript.ru/object-methods

- `terminology`
    - метод - methods
    - ссылочный тип - reference type

- `Функции`, которые находятся в свойствах объекта, называются `«методами»`.

> Значение this – это объект «перед точкой», который использовался для вызова метода.
>
> Значение this не смотрит на блоки js а смотрит на `reference Type`

        name = 'Global Name';
        function sayHi() {
          console.error( this.name );
        }

        var user = {
        name:'John' 
        };        
        user.say = sayHi;
        user.say() // 'John'

Если просто вызывать sayHi, то возьмет глобальный объект

        sayHi() // 'Global Name'

Даже если вызывать внутри объекта, все равно возьмет глобальный объект

        var user = {
            name:'John',
            sayHiUser(){

            console.error(this.name);

            sayHi()
            }
        }
        
        user.sayHiUser() // 'John', 'Global Name'

Если передать как переменную функцию, то она потеряет свой контекст, нельзя об этом забывать,

- в первом случае ничем не будет отличаться так как мы создали функцию глобальную

        // первый способ присвоения 
        var copyHi = sayHi
        
        copyHi() //'Global Name'
        
        // второй способ это через function
        function callHi(callback){
        callback()
        }
        
        callHi(sayHi) //'Global Name'

- второй случай это когда мы берем функцию у объекта

        var user = {
                name:'John' 
                };        
        user.say = sayHi;
        
        var copyHi = user.say
        
        copyHi() // 'Global Name' not 'John'
        
        function callHi(callback){
                callback()
                }
                
        callHi(user.say) // 'Global Name' not 'John'

>
> Специальное значение «ссылочного типа», называемого Reference Type.
>
>Этот ссылочный тип (Reference Type) является внутренним типом. Мы не можем явно использовать его, но он используется
> внутри языка.
>
>Значение ссылочного типа – это «триплет»: комбинация из трёх значений (base, name, strict), где:

- base – это объект.
- name – это имя свойства объекта.
- strict – это режим исполнения. Является true, если действует строгий режим (use strict).

> Результатом доступа к свойству user.say является не функция, а значение ссылочного типа. Для user.say в строгом режиме
> оно будет таким:

        // значение ссылочного типа (Reference Type)
        (user, "say", true)
        
        //как только передали в переменную 
        var copyHi = user.say
        (global, 'copyHi, true)
        // где base стал уже глабольным

**У стрелочных функций нет «this»**(перевод)

        let user = {
          firstName: "Илья",
          sayHi() {
            let arrow = () => alert(this.firstName);
            arrow();
          }
        };
        
        user.sayHi(); // 'Илья'

кое-какие особенности:

        let obj, method;
        
        obj = {
          go: function() { alert(this); }
        };
        
        obj.go();               // (1) [object Object], call self function 
        
        (obj.go)();             // (2) [object Object], call self function скобки никак не влияяет
        
        (method = obj.go)();    // (3) undefined, тут идет присвоения и поэтому меняется reference Type
        
        (obj.go || obj.stop)(); // (4) undefined, тоже самое идет присвоение один из функции, меняется reference Type

- также `this` не смотрит на `scope`, на блоки `{}`, и тд

>

      function asd(){
        {
          console.error(this) // все равно на блоки `{}`
        } 
        for(){
          console.error(this) // все равно на scope `for(){}`
        }
        return {
          name:this // все равно на возвращаемый объектный блок `{}` 
        }
        // везде this будет одним и тем же он будет смотреть на Reference Type
        }

