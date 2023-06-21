### Преобразование типов

    var a = ' '
    
    if(a){
    
        console.error('A')
    
    }
    
    if(a > 0){
    console.error('A>0')
    
    }
    
    if(a == 0){
    
        console.error('A=0')
    
    }
    
    if(a == true){
    
    console.error('Atrue')
    
    }
    
    var a = 'true'
    
    a == true // which answer
    a == false // which answer
    
    var a = 'false'
    
    a == true // which answer
    a == false // which answer
    
    var a = 0;
    console.error( Boolean(a) );
    
    var b = "0";
    console.error( Boolean(b) );
    
    console.error(a == b);
    
    **Type Conversions to boolean**
    
    Boolean('')
    
    Boolean(' ')
    
    Boolean('true')
    
    Boolean('false')
    
    Boolean('0')
    
    Boolean(0)
    
    Boolean(NaN)
    
    Boolean(null)
    
    Boolean(undefined)
    
    Boolean(55)
    
    Boolean(-1)

### Оператор нулевого слияния (??)

        var a = false;
        var b = a ?? 0
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
        
        a?.name == 'ASd.name'
        b?.name == 'ASd.name'
        a?.name == 'AsdAsd'
        b?.name == 'AsdAsd' 

### Опциональная цепочка '?.'

        var a = {a: {a: 5}}; 
        
        if(a?.a?.a?.a)

### Преобразование объектов в примитивы

        var a = {a: 5}; 
        // write to extra code  here to work below core return true. Wihtout reassignment variable a 
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
    
    // write code here

    var a =  new ASD()
    a instanceof ASD1 // true


