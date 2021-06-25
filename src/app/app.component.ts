import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  textToChange = 'Text to change';
  hobbyArray = ["I like to ride bikes "," I like to watch cartoons and anime ","I love playing sports "];
}
