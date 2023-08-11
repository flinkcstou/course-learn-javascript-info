### Перебираемые объекты(Iterables)

https://learn.javascript.ru/iterable

- Перебираемые(итерируемые)(`Iterable`) объекты – это обобщение массивов. Концепция, которая позволяет использовать
  любой объект в цикле `for..of`.



### Объекты

Цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых.

`псевдомассивы` – объекты, которые выглядят, как массив. То есть, у них есть свойство `length` и `индексы`, но они также
могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны.






есть два типа `псевдо-массивы` и `перебираемые`

`псевдо-массивы` `array-likes`

            let arrayLike = { // есть индексы и свойство length => псевдомассив
              0: "Hello",
              1: "World",
              length: 2
            };
            
            // Ошибка (отсутствует Symbol.iterator)
            for (let item of arrayLike) {}

`перебираемые` `iterable`

            let range = {
              from: 1,
              to: 5
            };
            
            // 1. вызов for..of сначала вызывает эту функцию
            range[Symbol.iterator] = function() {
            
              // ...она возвращает объект итератора:
              // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
              return {
                current: this.from,
                last: this.to,
            
                // 3. next() вызывается на каждой итерации цикла for..of
                next() {
                  // 4. он должен вернуть значение в виде объекта {done:.., value :...}
                  if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                  } else {
                    return { done: true };
                  }
                }
              };
            };
            
            // теперь работает!
            for (let num of range) {
              alert(num); // 1, затем 2, 3, 4, 5
            }

- Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator, как было описано выше.

- Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.

явный вызов итерируемых объектов
let str = "Hello";

                // делает то же самое, что и
                // for (let char of str) alert(char);
                
                let iterator = str[Symbol.iterator]();
                
                while (true) {
                  let result = iterator.next();
                  if (result.done) break;
                  alert(result.value); // выводит символы один за другим
                }
