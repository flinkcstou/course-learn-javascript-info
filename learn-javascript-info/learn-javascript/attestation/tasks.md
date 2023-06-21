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

''

' '

'true'

'false'

'0'

0

NaN

null

undefined

55

-1

### Методы объекта, "this"

    var userCopy = {
      name: 'fsdfsdfds',
      ref: this
    };

    // console.error(userCopy.ref) //
    // console.error(userCopy.ref.name) //

    var user = {
      name: 'fsdfds',
      makeUser: (): any => {
      }
    };

    function makeUser() {
      return {
        name: 'John',
        // @ts-ignore
        ref: this
      };
    }

    user.makeUser = makeUser;
    // console.error(user.makeUser().ref) //
    // console.error(user.makeUser().ref.name) //


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
        
        
        console.error(a)
        console.error(b)
        console.error(a.name)
        console.error(b.name)
        console.error(name)
        
        a.name == 'ASd.name'
        b.name == 'ASd.name'
        a.name == 'AsdAsd'
        b.name == 'AsdAsd' 


### Синтаксис "new Function"


        function Asd(){

        return {
        a:'sdfsdfs'
        }
        
        }
        var a = Asd()
        
        var b = new Asd()


### Проверка класса: "instanceof"


    var a = new ASD()
    var b = new Object()
    a instanceof ASD
    a instanceof Object
    b instanceof ASD
    b instanceof Object
    a instanceof b


