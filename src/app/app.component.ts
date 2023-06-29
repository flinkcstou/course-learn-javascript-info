import { Component } from '@angular/core';
import { ObjectBasics } from '../../learn-javascript-info/learn-javascript/codes/object-basics/object-basics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-javascript-info';

  constructor() {
    new ObjectBasics();
  }

}
