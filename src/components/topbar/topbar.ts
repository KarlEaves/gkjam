import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { Popover } from 'ionic-angular/components/popover/popover';
import { PopoverPageModule } from '../../pages/popover/popover.module';
import { PopoverPage } from '../../pages/popover/popover';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { FinderPage } from '../../pages/finder/finder';
import { HomePage } from '../../pages/home/home';
import { ScalesPage } from '../../pages/scales/scales';
import { TunerPage } from '../../pages/tuner/tuner';

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
  goToHomePage()
  {
    this.navCtrl.push(HomePage);
  }
  goToFinderPage()
  {
    this.navCtrl.push(FinderPage);
  }

  goToScalesPage(buttonclicked)
  {
    let test = buttonclicked;
    this.navCtrl.push(ScalesPage,{test});
  }

  goToTunerPage()
  {
    this.navCtrl.push(TunerPage);
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
