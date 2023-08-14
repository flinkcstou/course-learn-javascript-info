### Переменные(Variables)

https://learn.javascript.ru/variables

- `terminalogy`
    - variable - переменные
    - assign = присвоить
    - assignment - присвоение


Приведённая ниже инструкция создаёт (другими словами: объявляет или определяет) переменную с именем «message»:
(Declare a variable with the name message):

    var message

(put some data into variable):

    message = 'Hello'

Для краткости можно совместить объявление переменной и запись данных в одну строку:
(Declare variable and assignment)

    var message = 'Hello!'

Мы также можем объявить несколько переменных в одной строке:

    let user = 'John', age = 25, message = 'Hello';

`var`  это устаревший вид объявления вместо него сейчас используется `let`

разница между ними:

- `let` Declaring twice triggers an error;

- `var` можно хоть сколько раз объявлять одну и ту же переменную, а let выкинет ошибку.

        var message ='sdf';
        var message ='sdf; // не будет ошибки
        
        let cat = 'John';
        let cat = 'John'; // будет ошибка

- `var` будет существовать вне блока а `let` не может

        {
        var message ='sdf' 
        } 
        console.error(message) // message будет доступен и вне блока
        
        {
        let cat = 'John
        }
        console.error(cat) // ошибка cat не будет доступен вне блока        

Чтобы объявить константную, то есть, неизменяемую переменную, используйте `const` вместо `let`:

    const COLOR_RED = "#F00";

- `const` Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would
  cause an error:

В JavaScript есть два ограничения, касающиеся имён переменных:

- Имя переменной должно содержать только буквы, цифры или символы $ и _.
- Первый символ не должен быть цифрой.

        let userName;
        let test123;
        let $ = 1; // объявили переменную с именем "$"
        let _ = 2; // а теперь переменную с именем "_"

Примеры неправильных имён переменных:

        let 1a; // не может начинаться с цифры        
        let my-name; // дефис '-' не разрешён в имени
