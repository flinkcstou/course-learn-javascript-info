### Опциональная цепочка '?.'(Optional chaining '?.')

https://learn.javascript.ru/optional-chaining

- `terminology`
    - Проблема «несуществующего свойства» - The “non-existing property” problem


- optional chaining it's - `?.`

>

    // how to get non exisiting property and code which dont take a crash
    let user = {}

    let name = user.address && user.address.street && user.address.street.name
    // or
    let name1 = user?.address?.street?.name

**also has**

- ?. get property // `user?.name`
- ?.[] get value of array if array exist // `users?.[1]`
- ?.() call function if function exist //   `user?.getFullName?.()`

**WARNING**

you can't assign value for property where you use with `optional chaining(?.)`
example:

    let user = {}

    // it's not work
    user?.name = 'sdfdsf' // you take a error
