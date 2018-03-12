import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ScalesPage } from '../../pages/scales/scales';


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'pentatonic-popover.html'
})
export class PentatonicPopoverPage {
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

