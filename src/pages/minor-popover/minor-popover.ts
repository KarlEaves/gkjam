import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScalesPage } from '../scales/scales';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-minor-popover',
  templateUrl: 'minor-popover.html',
})
export class MinorPopoverPage {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController) {}

  close() {
    this.viewCtrl.dismiss();
  }
  goToScalesPage(buttonclicked)
  {
    let test = buttonclicked;

    this.navCtrl.push(ScalesPage,{test});

    this.viewCtrl.dismiss("");

    
  }

}
