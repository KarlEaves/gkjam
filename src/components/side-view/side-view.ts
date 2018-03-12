import { Component } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { FinderPage } from '../../pages/finder/finder';
import { ScalesPage } from '../../pages/scales/scales';

/**
 * Generated class for the SideViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'side-view',
  templateUrl: 'side-view.html'
})
export class SideViewComponent {

  text: string;

  constructor(public navCtrl:NavController) {
    console.log('Hello SideViewComponent Component');
    this.text = 'Hello World';
  }
  
  openHomePage()
  {
    this.navCtrl.push(HomePage);
  }
  openFinderPage()
  {
    this.navCtrl.push(FinderPage);

  }
  openScalesPage()
  {
    this.navCtrl.push(ScalesPage);
  }

}
