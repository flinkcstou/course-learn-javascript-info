

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

