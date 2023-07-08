import { Component } from '@angular/core';
import { _1ObjectBasics } from '../../learn-javascript-info/learn-javascript/codes/object-basics/_1-object-basics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-javascript-info';

  constructor() {
    new _1ObjectBasics();
  }

}
