### Стрелочные функции, основы(Arrow functions, the basics)

https://learn.javascript.ru/arrow-functions-basics

https://learn.javascript.ru/arrow-functions


- `terminalogy`
    - стрелочные функции - arrow functions

**syntax**

- let func = (arg1, arg2, ...argN) => expression;
- let sum = (a, b) => a + b;
- let sum = (a, b) => { let result = a + b; return result; };


### Повторяем стрелочные функции(Arrow functions revisited)

- Не имеют this.   
- Не имеют arguments.
- Не могут быть вызваны с new.
- (У них также нет super)
