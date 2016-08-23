import { Component } from '@angular/core';
import {DatabindingComponent} from "./databinding/databinding.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <app-databinding></app-databinding>
  `,
  directives: [DatabindingComponent]
})
export class AppComponent {
}
