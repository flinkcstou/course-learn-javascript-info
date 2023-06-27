### Функции(Functions)

https://learn.javascript.ru/function-basics

- `terminalogy`
    - Локальные переменные - local variable
    - Внешние переменные - outer variable
    - Параметры - parameter
    - Аргументы - arguments

- `definition`
    - Параметр – это переменная, указанная в круглых скобках в объявлении функции.
    - Аргумент – это значение, которое передаётся функции при её вызове.
    - Значение, передаваемое в качестве параметра функции, также называется `аргументом`.

>

    function showMessage(from, text) {
    from = '*' + from + '*'; // немного украсим "from"
    alert( from + ': ' + text );
    }
    let from = "Аня";
    showMessage(from, "Привет"); // *Аня*: Привет

- Рассматривая приведённый выше пример, мы могли бы сказать: "функция showMessage объявляется с двумя параметрами, затем
  вызывается с двумя аргументами: from и "Привет"".

**Значения по умолчанию (Default values)**

- If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
- For instance, the aforementioned function showMessage(from, text) can be called with a single
  argument: `showMessage("Ann");`
- That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes
  undefined.
- We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration,
  using `=`:  `function showMessage(from, text = "no text given") {}`

**Default parameters in old JavaScript code (Alternative default parameters)**
   
    function showMessage(from, text) {
    if (text === undefined) {
    text = 'no text given';
    }
    }

…Or using the || operator:

    function showMessage(from, text) {
    // If the value of text is falsy, assign the default value
    // this assumes that text == "" is the same as no text at all
    text = text || 'no text given';
    ...
    }

…Or using the ?? operator:

    function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
    }




**Function Declaration (Объявление Функции):**

        function sayHi() {
          alert( "Привет" );
        }

**Function Expression (Функциональное Выражение).**

        let sayHi = function() {
          alert( "Привет" );
        };

**«стрелочные функции» (arrow functions),**

        let func = (arg1, arg2, ...argN) => expression
        
        let func = (arg1, arg2, ...argN) => {body}

**function in object**

        user = {
          sayHi: function() {
            alert("Привет");
          }
        };
        
        // сокращённая запись выглядит лучше, не так ли?
        user = {
          sayHi() { // то же самое, что и "sayHi: function()"
            alert("Привет");
          }
        };
