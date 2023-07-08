### Объекты

Цикл `for..in` выполняет перебор всех свойств объекта, а не только цифровых.

`псевдомассивы` – объекты, которые выглядят, как массив. То есть, у них есть свойство `length` и `индексы`, но они также
могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны.

### Перебираемые объекты

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

### Map и Set

Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого
типа.

Методы и свойства:

- new Map() – создаёт коллекцию.
  map.set(key, value) – записывает по ключу key значение value.
  map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
  map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
  map.delete(key) – удаляет элемент по ключу key.
  map.clear() – очищает коллекцию от всех элементов.
  map.size – возвращает текущее количество элементов.

            interface Map<K, V> {
                /** Returns an iterable of entries in the map. */
                [Symbol.iterator](): IterableIterator<[K, V]>;
            
                /**
                 * Returns an iterable of key, value pairs for every entry in the map.
                 */
                entries(): IterableIterator<[K, V]>;
            
                /**
                 * Returns an iterable of keys in the map
                 */
                keys(): IterableIterator<K>;
            
                /**
                 * Returns an iterable of values in the map
                 */
                values(): IterableIterator<V>;
            }            

как добавлять множество значении

            // массив пар [ключ, значение]
            let map = new Map([
              ['1',  'str1'],
              [1,    'num1'],
              [true, 'bool1']
            ]);

Объект `Set` – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только
один раз.

как добавлять множество значении

            // массив [ключ, ключ1]
            let set = new Set(["апельсин", "яблоко", "банан"]);

как из массива сделать `map` или `set` и наоборот как сделать массив

            var obj = {key:'value'};
            var map = new Map(Object.entries(obj))
            
            var arr = [['key', 'value']];
            var map = new Map(arr)
            
            var obj = Object.fromEntries(map.entries());    
            var arr = Array.from(map);

                

            var obj = {key: 'value'};
            var set  = new Set(Object.keys(obj);
            var set  = new Set(Object.values(obj);
            
            var arr = ['keys', 'keys1']
            var set  = new Set(arr);
            
            var obj = Object.fromEntries(set.entries())    
            var arr = Array.from(set)

### Object.keys, values, entries

Object.keys, values, entries

у всех структур данных есть три метода, которые возвращает итерируемые объекты

- keys()
- values()
- entries()

Для простых объектов доступны следующие методы:

- Object.keys(obj) – возвращает массив ключей.
- Object.values(obj) – возвращает массив значений.
- Object.entries(obj) – возвращает массив пар [ключ, значение].



### Формат JSON, метод toJSON

- JSON.stringify

      JSON.stringify(value[, replacer, space])
      
      JSON.stringify(meetup, function replacer(key, value) {
        alert(`${key}: ${value}`);
      })
      
      JSON.stringify(user, null, 2)

мы можем закостомизировать объект Custom “toJSON”. Добавив метод  `toJSON` в объект

        let room = {
          number: 23,
          toJSON() {
            return this.number;
          }
        };
        JSON.stringify(room); // 23

- JSON.parse

        let value = JSON.parse(str, [reviver]);
        
        
        JSON.parse(str, function(key, value) {
          if (key == 'date') return new Date(value);
          return value;
        });

