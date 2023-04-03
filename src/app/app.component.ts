import { Component } from '@angular/core';
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
  }
}
