### Модули, введение(Modules, introduction)

- `external link`
    - https://www.w3schools.com/js/js_modules.asp

- в js есть разные виды модулей `AMD` `CommonJs` `UMD`
- в самом браузере тоже есть свои модули которые появились с `ECMA2015`


- `export` отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
- `import` позволяет импортировать функциональность из других модулей.

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// …Тогда другой файл может импортировать её и использовать:


// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

- Код(code) в модуле(module) выполняется только один раз при импорте
- Ещё раз заметим – модуль выполняется только один раз. Генерируется экспорт и после передаётся всем импортёрам,
  поэтому, если что-то изменится в объекте внутри модуля(module), то другие модули тоже увидят эти изменения.
- Код в модулях выполняется только один раз. Экспортируемая функциональность создаётся один раз и передаётся всем
  импортёрам.
- У модулей есть своя область видимости, обмениваться функциональностью можно через import/export.

- чем отличается встроенный `module` от модулей сборщиков проектов такие как `webpack` и тд
- Сборщик `webpack` делает следующее:
    - Недостижимый код удаляется.
    - Неиспользуемые экспорты удаляются («tree-shaking»).
    - Специфические операторы для разработки, такие как console и debugger, удаляются.
    - Современный синтаксис JavaScript также может быть трансформирован в предыдущий стандарт, с похожей
      функциональностью, например, с помощью Babel.
    - Полученный файл можно минимизировать (удалить пробелы, заменить названия переменных на более короткие и т.д.).
    - Если мы используем инструменты сборки, то они объединяют модули вместе в один или несколько файлов, и заменяют
      import/export на свои вызовы. 
