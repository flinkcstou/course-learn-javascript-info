import { Component } from '@angular/core';
import { _1ObjectBasics } from '../../learn-javascript-info/learn-javascript/codes/4-object-basics/_1-object-basics';
import { _1DataTypes } from '../../learn-javascript-info/learn-javascript/codes/5-data-types/_1-data-types';
import {
  _1AdvancedFunction
} from '../../learn-javascript-info/learn-javascript/codes/6-advanced-function/_1-advanced-function';

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
    new _1AdvancedFunction();
  }

}
