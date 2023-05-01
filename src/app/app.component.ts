import { Component } from '@angular/core';
import { empty, from, of, throwError } from 'rxjs';
import { ClassInheritance } from '../../learn-javascript-info/learn-javascript/codes/class/class-inheritance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-javascript-info';

  constructor() {

    new ClassInheritance();


    from([1, 2, 3]).subscribe(console.error);


    const source = of({name: 'Brian'}, [1, 2, 3], function hello() {
      return 'Hello';
    });
//output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
    const subscribe = source.subscribe(val => console.log(val));


    throwError(() => new Error('fds'));
  }

}
