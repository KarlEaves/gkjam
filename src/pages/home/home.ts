import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinderPage } from '../finder/finder';
import { ScalesPage } from '../scales/scales';
import { TunerPage } from '../tuner/tuner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  ionViewWillEnter()
  {
  }
  
  ionViewDidEnter(){
  }
  
  goToTunerPage()
  {
    this.navCtrl.push(TunerPage);
  }

  goToScalesPage(buttonclicked)
  {
    let test = buttonclicked;
    this.navCtrl.push(ScalesPage,{test});
  }
}
