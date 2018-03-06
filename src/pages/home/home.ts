import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinderPage } from '../finder/finder';
import { ScalesPage } from '../scales/scales';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToFinderPage()
  {
    this.navCtrl.push(FinderPage);
  }

  goToScalesPage()
  {
    this.navCtrl.push(ScalesPage);
  }
}
