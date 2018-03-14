import { Component } from '@angular/core';

/**
 * Generated class for the FeaturesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'features',
  templateUrl: 'features.html'
})
export class FeaturesComponent {

  text: string;

  constructor() {
    console.log('Hello FeaturesComponent Component');
    this.text = 'Hello World';
  }

}
