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
