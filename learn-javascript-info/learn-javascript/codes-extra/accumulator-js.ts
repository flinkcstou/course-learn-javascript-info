export class AccumulatorJs {


  constructor() {
    this.constructorNew();
  }

  constructorNew() {

    function Accumulator(startingValue) {
      this.value = startingValue;

      this.read = function() {
        this.value += +prompt('Сколько нужно добавить?', '0');
      };
    }

    let accumulator = new Accumulator(0);
    accumulator.read();
  }
}
