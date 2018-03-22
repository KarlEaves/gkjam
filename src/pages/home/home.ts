import { PopoverPage } from './../popover/popover';
import { FinderPage } from './../finder/finder';
import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { ScalesPage } from '../scales/scales';
import { TunerPage } from '../tuner/tuner';

declare var $: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { }
}
