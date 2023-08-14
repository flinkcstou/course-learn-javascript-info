import { Component } from '@angular/core';
import { _0Prototypes } from '../../learn-javascript-info/learn-javascript/codes/8-prototypes/_0-prototypes';
import { _0Classes } from '../../learn-javascript-info/learn-javascript/codes/9-classes/_0-classes';
import { _0JsMisc } from '../../learn-javascript-info/learn-javascript/codes/14-js-misc/_0-js-misc';
import { _0DataTypes } from '../../learn-javascript-info/learn-javascript/codes/5-data-types/_0-data-types';
import {
  _0GeneratorsIterators
} from '../../learn-javascript-info/learn-javascript/codes/12-generators-iterators/_0-generators-iterators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-javascript-info';

  constructor() {
    // new _0ObjectBasics();
    // new _0DataTypes();
    // new _1AdvancedFunction();
    // new _0Prototypes();
    // new _0Classes();
    // new _0JsMisc();
    new _0GeneratorsIterators();
  }

}
