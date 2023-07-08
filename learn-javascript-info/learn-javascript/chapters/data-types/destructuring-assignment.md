### Деструктурирующее присваивание(Destructuring assignment)

https://learn.javascript.ru/destructuring-assignment

- `terminology`
    - деструктуризация -destructing
    - 

>

            let [a, b, c] = "abc";
            let [one, two, three] = new Set([1, 2, 3]);
            
            let user = {};
            [user.name, user.surname] = "Ilya Kantor".split(' ');
            
            for (let [key, value] of Object.entries(user)) {
              alert(`${key}:${value}`); // name:John, затем age:30
            }
            

            let {var1, var2} = {var1:…, var2:…}

            let options = {
              title: "Menu",
              width: 100,
              height: 200
            };
            let {title, width, height} = options;
            
            // { sourceProperty: targetVariable = defaultValue }
            let {width: w, height: h, title} = options;
            let {width = 100, height = 200, title} = options;
            
            
            function({
              incomingProperty: varName = defaultValue
              ...
            })
            
            let {prop : varName = default, ...rest} = object
            
            
            let [item1 = default, item2, ...rest] = array



            export interface FullNameI {
            name: string,
            surname: string,
            where: {
            from: string,
            to: string,
            whereChild: {
            fromChild: string,
            toChild: string
            }
            },
            arrs: any[]
            }

              someMethods() {

              let {
                name = 'name',
                where: {
                  from = 'from',
                  to = 'to',
                  whereChild: {fromChild = 'fromChild', toChild = 'toChild'} = {} as any
                } = {} as any,
                arrs: [sdfds = 'das'] = [],
              }: FullNameI = {} as FullNameI;
          
              const fullName: FullNameI = {
                name: 'name',
                surname: 'surname',
                where: {
                  from: 'from',
                  to: 'to',
                  whereChild: {fromChild: 'fromChild', toChild: 'toChild'}
                },
                arrs: ['das']
              };
              console.error(name);
          
            }

