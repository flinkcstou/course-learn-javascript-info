### Флаги и дескрипторы свойств(Property flags and descriptors)

### Свойства - геттеры и сеттеры(Property getters and setters)

https://learn.javascript.ru/property-descriptors

- `terminology`
    - das

- `definition`
    - das

- `codes`
    - [code](../../codes/7-object-properties/_1-property-descriptors.ts)

- `about`
    - Лучше с нуля прочитать из сайта и решить задачки

object properties has another attributes not only value

its called **'flags'** or **"descriptor"**

- _writable_
- _enumarble_
- _configurable_
- _value_
- _get_
- _set_


- writable – если true, свойство можно изменить, иначе оно только для чтения, нельзя даже
  удалить `delete user.name // error`
- enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
- configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

> also other **descriptors** and **flags**

- Object.preventExtensions(obj)
    - Запрещает добавлять новые свойства в объект.
- Object.seal(obj
    - Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
- Object.freeze(obj)
    - Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех
      существующих свойств.

**how to get _full_ information about property**

```js

let user = {
  name: "John",
  lastName: "John lastName"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.error(JSON.stringify(descriptor, null, 2));

/* дескриптор свойства:
{
"value": "John",
"writable": true,
"enumerable": true,
"configurable": true
}
*/

let descriptors = Object.getOwnPropertyDescriptors(user)

console.error(JSON.stringify(descriptors, null, 2));
/*
{
name: {
"value": "John",
"writable": true,
"enumerable": true,
"configurable": true
},
lastname: {
"value": "John",
"writable": true,
"enumerable": true,
"configurable": true
},
}
* */

```
