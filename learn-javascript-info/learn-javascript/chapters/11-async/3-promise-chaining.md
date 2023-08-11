### Цепочка промисов(Promises chaining)

https://learn.javascript.ru/promise-chaining

- `terminology`
    - dasd

- `definition`
    - das
- `extra task`
    - implement your own Promise
    - custom implement of Promise class
    - custom implement of Promise.resolve https://stasonmars.ru/javascript/promisy-v-javascript-dlya-chainikov/

- `external-link`
    - https://www.youtube.com/watch?v=SQMCtWnCxEA&list=PLqKQF2ojwm3lPphwTfhT3ffqZbfkv07qt&index=2&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

- `unhandledrejection` специальное событие который вызывается если мы не обрабатываем ошибки в промисе. то есть если мы
  глотаем ошибки в промисе то их можно отловить через
  событие `unhandledrejection` `window.addEventListener('unhandledrejection', (event)=>{})`

```text

Promise цепочка работает логический
если вызываешь `then` то вернет для следующего `then` новый `Promise` где вызывается метод `resolve` который создается под капотом  
 в новый `then` придет значения что мы вернули(return) в предыдущем `then`
 Также в then можно отправлять новый `Promise` и он для следующего `then` будет работать уже нами созднанным `Promise` то есть мы переопределили Promise под капотом

если вызываешь `catch` то он ожидает что мы вернем ошибку либо обработаем ошибку.
  Если вернем ошибку то создается под капотом новый `Promise` который вызывает метод `reject` и следующий `catch` может это отловить
  Если обработаем ошибку то создается под капот новый `Promise` который вызывает метод `resolve` и следующий then может от отловить
  
  
Promise при вызове цепочки then catch не важен порядок. 
что это значит? Это значит когда вызываем then then а потом catch then then 
В первом случае если нигде не будет ошибки то порядок выполнения будет таким then then then then. Выходит что catch пропускается
В втором случае если будет ошибка сразу у  `Promise` то выполнится catch then then. Выходит что первые два then пропускается 

Как это работает под капотом цепочка вызова ? 
Просто. Перед каждым вызовом цепочки смотрит какое значения у `Promise` и какой метод следующий `catch` либо `then`.
Если `Promise` вызывает `resolve`. он ожидает по цепочке метод `then` если видит `catch` то под капотом просто пропускает вызов `callback` у `catch` и возвращает дальше Promise и так будет проходиться в вызове цепочки до тех пор пока не встретит  - `then` 
Если `Promise` вызываем 'reject' - он ожидат по цепочке метод `catch` если видит `then` то под капотом просто пропускает вызов `callback` у `then`  и возвращает дальше Promise и так будет проходится в вызове цепочки до тех пор пока не встретит  - `catch`
Как только `Promise` не важно какой вызов был 'resolve' 'reject' нашли свой метод в цепочке (then, catch) вызвали их `callback` А  создается новый `Promise` и это будет по кругу работать. Если `Promise` `resolve` то ищет опять `then `а если `reject` ищет `catch`


Самое главное нужно понимать что методы `then` `catch` возвращают новый `Promise` под капотом для следующего `then` `catch`. Либо мы в `callback-e` `then` `catch` возвращаем `Promise` который перезапишет `Promise` под капотом. 

```
