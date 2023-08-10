### Замыкание(Variable scope, closure)

Лучше с нуля прочитать из сайта и решить задачки

- `external link`
    - https://www.youtube.com/watch?v=pahO5XjnfLA&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
    - https://habr.com/ru/articles/474852/

**lexical environment**
**LexicalEnvironment**

- Объект лексического окружения состоит из двух частей:
    - Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая
      информация, такая как значение this).
    - Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих
      фигурных скобок).

У любого блока `{}` есть свой `lexical environment`

Все созданные функции берут outer lexical environment там где они были объявлены, а не там где они были вызваны

All functions “on birth” receive a hidden property [[Environment]] with a reference to the Lexical Environment of their
creatio

During the execution of makeCounter(), a tiny nested function is created.

It doesn’t matter whether the function is created using Function Declaration or Function Expression. All functions get
the [[Environment]] property that references the Lexical Environment in which they were made. So our new tiny nested
function gets it as well.

For our new nested function the value of [[Environment]] is the current Lexical Environment of makeCounter() (where it
was born):
