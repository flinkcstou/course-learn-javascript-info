### Преобразование типов

[//]: # (https://www.w3schools.com/js/js_type_conversion.asp)

[//]: # (https://www.w3schools.com/js/js_type_conversion.asp)

     Number(' '); String(' '); Boolean(' ')
     Number('true'); String('true'); Boolean('true')
     Number('false'); String('false'); Boolean('false')
     Number(-1); String(-1); Boolean(-1)

     Number(false); String(false); Boolean(false)
     Number(true); String(true); Boolean(true)
     Number(0); String(0); Boolean(0)
     Number(1); String(1); Boolean(1)
     Number('0'); String('0'); Boolean('0')
     Number('000'); String('000'); Boolean('000')
     Number('1'); String('1'); Boolean('1')
     Number(NaN); String(NaN); Boolean(NaN)
     Number(Infinity); String(Infinity); Boolean(Infinity)
     Number(-Infinity); String(-Infinity); Boolean(-Infinity)
     Number('); String('); Boolean(')
     Number('20'); String('20'); Boolean('20')
     Number('twenty'); String('twenty'); Boolean('twenty')
     Number([ ]); String([ ]); Boolean([ ])
     Number([20]); String([20]); Boolean([20])
     Number([10,20]); String([10,20]); Boolean([10,20])
     Number(['twenty']); String(['twenty']); Boolean(['twenty'])
     Number(['ten','twenty']); String(['ten','twenty']); Boolean(['ten','twenty'])
     Number(function(){}); String(function(){}); Boolean(function(){})
     Number({ }); String({ }); Boolean({ })
     Number(null); String(null); Boolean(null)
     Number(undefined); String(undefined); Boolean(undefined)


    var a = ' '
    if(a)
    if(a > 0)
    if(a == 0)
    if(a == true)

    var a = 'true'
    if(a == true) 
    if(a == false) 
    
    var a = 'false'
    if(a == true) 
    if(a == false) 
    
    console.error(undefined == undefined)
    console.error(null == null)
    console.error(true == true)
    console.error(false == false)
    console.error('foo' == 'foo')
    console.error(0 == 0)
    console.error(+0 == -0)
    console.error(+0 == 0)
    console.error(-0 == 0)
    console.error(0n == -0n)
    console.error(0n == -0n)
    console.error(0 == false)
    console.error('' == false)
    console.error('' == 0)
    console.error('0' == 0)
    console.error('17' == 17)
    console.error([1,2] == '1,2')
    console.error(new String('foo') == 'foo')
    console.error(null == undefined)
    console.error(null == false)
    console.error(undefined == false)
    console.error({foo:'bar'} == {foo:'bar'})
    console.error(new String('foo') == new String('foo'))
    console.error(0 == null)
    console.error(0 == undefined)
    console.error(0 == NaN)
    console.error('foo' == NaN)
    console.error(NaN == NaN)


            let a = 0;
            let b = "0";
            a == b // true, переменная b преобразуется в `number` и значения будет 0 
            
            let aB = Boolean(a) //false, переменная a в boolean это false  
            let bB = Boolean(b) // true, переменная b в boolean это true
            aB == bB // false 

### Оператор нулевого слияния (??)

        var b = false ?? 0
        var b = true ?? 0
        var b = 0 ?? 1
        var b = NaN ?? 0
        var b = undefined ?? 0
        var b = null ?? 0

### Методы объекта, "this"

    var userCopy = {
      name: 'fsdfsdfds',
      ref: this
    };

    console.error(userCopy.ref) 
    console.error(userCopy.ref.name) 

    var user = {
      name: 'fsdfds',
      makeUser: () => {
      }
    };

    function makeUser() {
      return {
        name: 'John',
        ref: this
      };
    }

    user.makeUser = makeUser;
    
    console.error(user.makeUser().ref) 
    console.error(user.makeUser().ref.name)


    let obj, method;

    obj = {
    go: function() { console.error(this); }
    };
    
    obj.go();
    
    (obj.go)();
    
    (method = obj.go)();
    
    (obj.go || obj.stop)();

### Конструктор, оператор "new"

        function Asd(){

        this.name = "AsdAsd"
        
        }
        
        Asd.name = 'Asd.name'
        
        var a = new Asd();
        
        var b = Asd();
        
        new Asd();
        Asd();
        
        
        console.error(a)
        console.error(b)
        console.error(a?.name)
        console.error(b?.name)
        console.error(name)
        
        a?.name == 'Asd.name'
        b?.name == 'Asd.name'
        a?.name == 'AsdAsd'
        b?.name == 'AsdAsd' 

### Опциональная цепочка '?.'

        var a = {a: {a: 5}}; 
        
        if(a?.a?.a?.a)

        if(/*write this code instead of above code*/)

### Преобразование объектов в примитивы

        var a = {a: 5}; 
        // write to extra code  here to work below code return true. Wihtout reassignment variable a 
        a - 5 == 0 // true

### Синтаксис "new Function"

        function Asd(){

        this.name = 'fasdfdsf'
        
        return {
            a:'sdfsdfs'
        }
        
        }
        var a = Asd()
        
        var b = new Asd()

### Повторяем стрелочные функции

    const a = ()=>{}
    const a = function(){}  // what is difference between arrow function and NFE 

### Проверка класса: "instanceof"

    var a = new ASD()
    var b = new Object()
    a instanceof ASD
    a instanceof Object
    b instanceof ASD
    b instanceof Object
    a instanceof b
    
    
    class ASD {}
    class ASD1 {}
    var a =  new ASD()
 
    // write to extra code  here to work below code return true

    a instanceof ASD1 // true


