### Тип данных Symbol(Symbol type) 

https://learn.javascript.ru/symbol

- `terminology`
    - 'sdf'

Символ (symbol) – примитивный тип данных, использующийся для создания уникальных идентификаторов.

        var description = "id"

        var id = Symbol(description) // local Symbol
        
        var user = {}
        
        user[id] = 'some key'
        
        // user[id] is not  user.id
        
        Symbol.for("id") // create, get global Symbol by description
        
        Symbol.keyFor(id) // get description by global Symbol 

`Symbol` используется разработчиками для сокрытия каких либо данных, либо во избежания конфликтов

`Symbol` используется в самом js для сокрытия функции которые отвечает
за основы систем такие функции как:

- Symbol.hasInstance
- Symbol.isConcatSpreadable
- Symbol.iterator
- Symbol.toPrimitive
