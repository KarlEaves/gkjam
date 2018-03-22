import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScalesPage } from '../scales/scales';

/**
 * Generated class for the ScaleGatewayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scale-gateway',
  templateUrl: 'scale-gateway.html',
})
export class ScaleGatewayPage {

  minorbuttonClicked: boolean; 
  pentatonicbuttonClicked:boolean;
  jazzbuttonClicked:boolean;
  bluesbuttonClicked:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScaleGatewayPage');
    this.minorbuttonClicked= false;
    this.pentatonicbuttonClicked= false;
    this.jazzbuttonClicked= false;
  }
  

  public showBlues()
  {
    this.bluesbuttonClicked = !this.bluesbuttonClicked;
  }

  public showPentatonics()
  {
    this.pentatonicbuttonClicked = !this.pentatonicbuttonClicked;
  }

  public showMinors() {
    this.minorbuttonClicked = !this.minorbuttonClicked;
  }

  public showJazz()
  {
    this.jazzbuttonClicked = !this.jazzbuttonClicked;
  }

  goToScalesPage(buttonclicked)
  {
    let test = buttonclicked;

    this.navCtrl.push(ScalesPage,{test});
   
  }

}
