import { Component } from '@angular/core';
import { _0Prototypes } from '../../learn-javascript-info/learn-javascript/codes/8-prototypes/_0-prototypes';
import { _0Classes } from '../../learn-javascript-info/learn-javascript/codes/9-classes/_0-classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-javascript-info';

  constructor() {
    // new _1ObjectBasics();
    // new _1DataTypes();
    // new _1AdvancedFunction();
    // new _0Prototypes();
    new _0Classes();
  }

}
