### Пользовательские ошибки, расширение Error(Custom errors, extending Error)

https://learn.javascript.ru/custom-errors

- `external link`
    - https://habr.com/ru/articles/249525/


- Ошибки можно выкидывать через `throw` `throw new Error('sdf)` `throw 'sdfds'`
- Ошибка необязательно должна наследоваться от class-a Error можно выкидывать ошибку любой тип данных(any data type)
- Почему все таки лучше наследоваться от `Error`?
    - легче поддерживаемая структура. также это общая принятая конвенция среди разработчиков. что лучше выкидывать
      ошибку наследованную от `Error`
    - есть готовые свойства которые уже заполнены(stack, name, message) . если необходимо можно перезаписать,
    - нам дает возможность проверки на `err instanceOf Error`

- Есть нативные классы ошибок которые будут выкидывать по каким то причинам это SyntaxError, ReferenceError, TypeError,
  etc.
- `ReferenceError` A ReferenceError occurs when you try to access a variable that you haven’t created yet. It also
  occurs when you call a variable before initializing it.
- `ReferenceError` когда мы обращаемся к несуществующему переменному(variable), а также при вызове функции перед
  инициализацией
- `ReferenceError` переводится как ссылаться, значит логический можно понять что раз нет ссылки до чего-то, до
  переменной, это ошибка `ReferenceError`
- `ReferenceError` также это будет работать если мы хотим к чему то ссылаться но это невозможно сделать, это
  операция `assignment`. Хотим вызванную функцию к чему то приравнять.

- `SyntexError` - представляет ошибку, возникающую при попытке интерпретировать синтаксически неправильный код.
- `SyntexError` когда мы написали не рабочий код. то есть забыли где скобку, фигурную скобку(braces), кавычки(quotes)
- `SyntexError` когда мы пере объявляем переменную

- `TypeError` occurs when the value of a function or a variable is of an unexpected type.
- `TypeError`: This error occurs when a value is not of the expected type.
- `TypeError` когда из типа хотим сделать манипуляцию будто это другой тип.
    - Скажем есть свойства(property) и тип у него string и хотим сделать манипуляцию будто это number. Потому что мы
      ожидали что это будет number. Но с Сервака прилетело как `string` вызываем методы number и выходит
      ошибка `TypeError`. потому что у string нет таких методов
    - либо хотим достучаться до несуществующего свойства у объекта,
    - либо мы думаем что это number и хотим вызвать методы number-a, а оказалось что свойства имеет тип undefined и
      тогда нам выкидывает ошибку `TypeError` потому что у undefined нет методов таких же как у number.
    - Можно логический понять что TypeError будет выходить в том случае если манипулируем с типами данных не так как
      ожидает система

```js
throw new Error('sdfsd')


// "Псевдокод" встроенного класса Error, определённого самим JavaScript
// как устроен class Error под капотом js
class Error {
  constructor(message) {

    this.message = message;
    this.name = "Error"; // (разные имена для разных встроенных классов ошибок)
    this.stack = '<стек вызовов>'; // нестандартное свойство, но обычно поддерживается
  }
}

// создаем свой класс который наследует от Error
class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Упс!");
}

try {
  test();
} catch (err) {
  console.error(err.message); // Упс!
  console.error(err.name); // ValidationError
  console.error(err.stack); // список вложенных вызовов с номерами строк для каждого
}
```

```js
/* 
   тренируется с ошибками
   если поля stack не будет - просто undefined
   то, что классы должны быть наверху, в данном случае, по-моему, нарушает интуитивность восприятия.
   Они описывают пользовательские ошибки, которые используется уже во "втором круге" проверки...
*/
class PropertyRequiredError extends Error {
  constructor(prop) {
    super("Нет поля: " + prop);
    this.name = this.constructor.name;
    this.prop = prop;      //сохраняем на будущее            
  }
}

class PropertyCorrectError extends PropertyRequiredError {
  constructor(prop) {
    super(prop);
    this.message = "Поле " + prop + " имеет некорректный тип данных";   // перезаписываем сообщение
  }
}


function validateUser(user)    // проверка на наличия нужного поля
{
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
}

function correctUser(user)   // проверка на корректность типа данных
{
  if (typeof (user.name) != 'string') {
    throw new PropertyCorrectError("name");
  }
  if (!(typeof (user.age) == "number" && user.age % 1 == 0 && user.age > 0)) {
    throw new PropertyCorrectError("age");
  }
}


function catchErrorOfJsonRead(json)  // основная функция преобразования и проверка на ошибки
{
  try {
    console.error('Итак преобразуем json: ' + json);
    var userCurrent = JSON.parse(json);  // при некорректном json возникнет синтаксическая ошибка

    try {
      console.error(`Ну, вроде json ${json} преобразован успешно! Начинаем проверку корректности данных`);
      validateUser(userCurrent);  // ошибка валидации
      correctUser(userCurrent);  //  ошибка корректности типа данных

      console.error(`Ура, все поля - присутствуют, типы данных - корректны`);
    } catch (err) {
      if (PropertyRequiredError.prototype.isPrototypeOf(err)) // тут выбрасывается ошибка если преобразование ок, а с данными - проблемы
      {
        console.error(`Итак у нас ошибка в данных: ${err.name}, подробности:\n${err.message}\nсодержание поля stack:\n${err.stack}`);
      } else {
        throw err; // ну мало ли...
      }
      return userCurrent; //вернёт в случае ошибок данных, но не в случае синтаксической ошибке преобразования
    }
  } catch (err) {
    if (SyntaxError.prototype.isPrototypeOf(err)) // выбросит, если проблемы с самим преобразованием
    {
      console.error(`Ошибка преобразования данных, подробности:\n${err.message}\nсодержание поля stack:\n${err.stack}`);
      // console.error(err); // самый простой вариант выведет сообщение в формате: "err.name + ': ' + err.message"
    } else {
      throw err; // теоретически может быть неизвестная ошибка, пробросим её, для, возможной, следующей обёртки       
    }

  }
}

let json1 = '{"name": "Alex", "age": 30 }';
let json2 = ('{bad json}');
let json3 = ('{ "age": 25 }');
let json4 = ('{"name" "Alex" "age": 25 }');
let json5 = ('{"name": 25, "age": "Alex" }');


try {

  let user1 = catchErrorOfJsonRead(json1);
  if (user1) console.error(`Итак проверяем возраст объекта :) - ${user1.age}`); else console.error(`объект не найден`);
  // это поле [age] есть в каждом нашем объекте, где есть объект. значение - 30

  let user2 = catchErrorOfJsonRead(json2);
  if (user2) console.error(`Итак проверяем возраст объекта :) - ${user2.age}`); else console.error(`объект не найден`); // не найден

  let user3 = catchErrorOfJsonRead(json3);
  if (user3) console.error(`Итак проверяем возраст объекта :) - ${user3.age}`); else console.error(`объект не найден`); //25

  let user4 = catchErrorOfJsonRead(json4);
  if (user4) console.error(`Итак проверяем возраст объекта :) - ${user4.age}`); else console.error(`объект не найден`); // не найден

  let user5 = catchErrorOfJsonRead(json5);
  if (user5) console.error(`Итак проверяем возраст объекта :) - ${user5.age}`); else console.error(`объект не найден`); // Alex

  let user6 = catchErrorOfJsonRead(json6);
  if (user6) console.error(`Итак проверяем возраст объекта :) - ${user6.age}`); else console.error(`объект не найден`); // не выполнится

} catch (err) {
  console.error(`Ошибка запуска: ${err.name}, подробности:\n${err.message}\nсодержание поля stack:\n${err.stack}`);
}


```

- Создаем класс, который будет хранить в себе все типы ошибок, мы хотим отработать их, а остальные оставить как есть

```js
class MyError extends Error {
  // здесь мы создали свой кастомный Error который автоматом будет проставлять свойства `name`
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}


class ErrorUser extends MyError {
  // здесь мы создали класс который будет принимать вторым аргументом cause.
  // Cause это тип Error. когда мы ошибку отлавливаем мы выкидываем нашу кастомную ошибку 
  // throw new ErrorUser('some message', err),
  // выходит что внутри ErrorUser будет лежать как свойства оригинальная ошибка
  constructor(message, cause) {
    super(message)
    this.cause = cause
  }
}

class ValidationError extends MyError {
}

class PropertyRequiredError extends ValidationError {
  // здесь мы создали класс который будет выкидывать ошибку если мы понимем что свойства отсутсвует
  constructor(property) {
    super("Нет свойства: " + property);
    this.property = property;
  }
}

function readUser() {
  let data = {}
  try {
    JSON.parse(data)

    if (!data.name) throw new PropertyRequiredError('name')

  } catch (e) {
    if (e instanceof SyntaxError) {
      throw new ErrorUser('syntax error', e)
    }
    if (e instanceof ReferenceError) {
      throw new ErrorUser('Reference error', e)
    }

    throw e
  }
}

try {
  readUser()
} catch (e) {
  if (e instanceof ErrorUser) {
    // мы знаем что нам делать с этими ошибками
  }
  // а с отальными ошибками мы не знаем что делать, зато мы в будущем можем добавить проверку на новую ошибку 
  throw e
}





```
