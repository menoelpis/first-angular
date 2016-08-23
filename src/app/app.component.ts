import { Component } from '@angular/core';
import { OtherComponent } from "./other/other.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>Inline Template</h1>
    <app-other></app-other>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `],
  directives: [OtherComponent]
})
export class AppComponent {
}
