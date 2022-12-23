import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'ColorChangerApp';

  selected= {
    name: 'Lime',
    color: 'lime'
  }

  data = [{
    name: 'Lime',
    color: 'lime'
  }, {
    name: 'Lavender',
    color: 'lavender'
  }, {
    name: 'Crimson',
    color: 'crimson'
  }, {
    name: 'Darkblue',
    color: 'darkblue'
  }]

  compareObjects(o1: any, o2: any): boolean {
    return o1.color === o2.color
  }

}
