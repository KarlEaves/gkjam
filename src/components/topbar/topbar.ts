import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { Popover } from 'ionic-angular/components/popover/popover';
// import { PopoverPageModule } from '../../pages/popover/popover.module';
import { PopoverPage } from '../../pages/popover/popover';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { FinderPage } from '../../pages/finder/finder';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the TopbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'topbar',
  templateUrl: 'topbar.html'
})
export class TopbarComponent {

  text: string;

  constructor(public popoverCtrl:PopoverController,public navCtrl:NavController) {
  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
goToFinderPage()
  {
    this.navCtrl.push(FinderPage);
  }
  goToHomePage()
  {
    this.navCtrl.push(HomePage);
  }
}
