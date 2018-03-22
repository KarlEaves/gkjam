import { PopoverPage } from './../popover/popover';
import { FinderPage } from './../finder/finder';
import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { ScalesPage } from '../scales/scales';
import { TunerPage } from '../tuner/tuner';

declare var $:any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public popoverCtrl:PopoverController, public navCtrl: NavController) {

  }
  
  ionViewWillEnter()
  {
  }
  
  ionViewDidEnter(){
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

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  goToTunerPage()
  {
    this.navCtrl.push(TunerPage);
  }

 
}
