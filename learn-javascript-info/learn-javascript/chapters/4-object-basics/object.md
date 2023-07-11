### Объекты(Objects)

https://learn.javascript.ru/object

- `terminology`
    - конструктор объекта - object constructor
    - Свойство из переменной - Property value shorthand

>

    let user = new Object(); // синтаксис "конструктор объекта"(object constructor)
    let user = {};  // синтаксис "литерал объекта"(object literal)

    let user = {
      name: "John",
      "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
    };
    
    let user = {};
    
    // присваивание значения свойству
    user["likes birds"] = true;
    
    // получение значения свойства
    user["likes birds"]
    
    let key = "likes birds";
   
    // то же самое, что и user["likes birds"] = true;
    user[key] = true;

    let fruit = 'fdsf sdf sdfd sfsdfd'
    
    let bag = {
      [fruit]: 5, // имя свойства будет взято из переменной fruit
    };
    
    alert( bag.apple ); // 5, если fruit="apple"

    let fruit = 'apple';
    let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
    };
    
    let user = { name: "John", age: 30 };
    
    alert( "age" in user ); // true, user.age существует
    alert( "blabla" in user ); // false, user.blabla не существует
    
    for (let key in user) {
      // ключи
      alert( key );  // name, age, isAdmin
      // значения ключей
      alert( user[key] ); // John, 30, true
    }

**Свойство из переменной(Property value shorthand)**

- In the example above, properties have the same names as variables. The use-case of making a property from a variable
  is
  so common, that there’s a special property value shorthand to make it shorter.
  - Instead of name:name we can just write name, like this:

>

    function makeUser(name, age) {
    return {
    name, // same as name: name
    age,  // same as age: age
    // ...
    };
    }

**Важное(Important)**

- Они хранят свойства (пары ключ-значение), где:
- Ключи свойств должны быть строками(String) или символами(Symbol) или числами(Number) - (обычно строками). Значения
  могут быть любого типа данных(а их 8).


- Чтобы получить доступ к свойству, мы можем использовать:
    - Запись через точку: `obj.property`.
    - Квадратные скобки `obj["property"]`.
    - Квадратные скобки позволяют взять ключ из переменной, например, `obj[varWithKey]`.

- Дополнительные операторы:
    - Удаление свойства: `delete obj.prop`.
    - Проверка существования свойства: `"key" in obj`.
    - Перебор свойств объекта: цикл for `for (let key in obj)`.
