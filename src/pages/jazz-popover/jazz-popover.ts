import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ScalesPage } from '../scales/scales';

/**
 * Generated class for the JazzPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jazz-popover',
  templateUrl: 'jazz-popover.html',
})
export class JazzPopoverPage {

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
