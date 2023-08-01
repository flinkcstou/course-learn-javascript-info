### Флаги и дескрипторы свойств(Property flags and descriptors)

https://learn.javascript.ru/property-descriptors

object properties has another attributes not only value

its called **'flags'** or **"descriptor"**

- _writable_
- _enumarble_
- _configurable_


- writable – если true, свойство можно изменить, иначе оно только для чтения.
- enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
- configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

how to get _full_ information about property

```js

let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert(JSON.stringify(descriptor, null, 2));
/* дескриптор свойства:
{
"value": "John",
"writable": true,
"enumerable": true,
"configurable": true
}
*/

```

how to clone object with descriptor

```js

let user = {
  name: 'John'
};

Object.defineProperty(PropertyDescriptors, 'name', {
  writable: false
});

let userClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

let ownPropertyDescriptors = Object.getOwnPropertyDescriptors(userClone);
console.error(JSON.stringify(ownPropertyDescriptors));

```
