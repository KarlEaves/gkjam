import { Component } from '@angular/core';

/**
 * Generated class for the ImageSectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-section',
  templateUrl: 'image-section.html'
})
export class ImageSectionComponent {

  text: string;

  constructor() {
    console.log('Hello ImageSectionComponent Component');
    this.text = 'Hello World';
  }

}
