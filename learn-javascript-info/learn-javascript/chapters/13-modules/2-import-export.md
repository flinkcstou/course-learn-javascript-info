### Экспорт и импорт(Export and import)

- что такое `export` ?
    - Это когда отмечаем классы\функции\переменные чтоб могли использовать вне текущего модуля
- что такое `import` ?
    - Gозволяет импортировать функциональность из других модулей.
- что такое `re-export` ?
    - по другому это называется `import-export`
    - Это когда делаем одновременно `export` and `import`. В основном используется в файлах как `index.ts` `index.js`,
      где мы не хотим отдельно импортировать в `index file` а потом на следующей строке делать `export`


- как делать `export`
    - перед объявлением класса\функции\переменной
    - `export [defaul] class/function/variable`
    - отдельный `export` после объявления класса\функции\переменной
    - `export {x [as y], ...}`
- как делать `import`
    - обычный способ `impoprt-а`
    - `import {x [as y], ...} from "module"`
    - Всё сразу
    - `import * as obj from "module"`
    - Импорт по умолчанию(default)
    - `import x from "module"`
    - `import {default as x} from "module"`
- как делать `re-export`
    - обычный способ `re-export-a`
    - `export {x [as y], ...} from "module"`
    - когда `re-export-ируем` всё, (не реэкспортирует `export default`).
    - `export * from "module"`
    - когда `re-export-ируем` `default`
    - `export {default [as y]} from "module"`

