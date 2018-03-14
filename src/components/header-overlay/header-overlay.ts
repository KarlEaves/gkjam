import { Component } from '@angular/core';

/**
 * Generated class for the HeaderOverlayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-overlay',
  templateUrl: 'header-overlay.html'
})
export class HeaderOverlayComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderOverlayComponent Component');
    this.text = 'Hello World';
  }

}
