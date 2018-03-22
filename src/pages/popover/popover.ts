import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { ScalesPage } from '../scales/scales';
import { FinderPage } from '../finder/finder';
import { HomePage } from '../home/home';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PentatonicPopoverPage } from '../pentatonic-popover/pentatonic-popover';
import { JazzPopoverPage } from '../jazz-popover/jazz-popover';
import { MinorPopoverPage } from '../minor-popover/minor-popover';

@IonicPage()
@Component({
  templateUrl: 'popover.html'
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public popoverCtrl:PopoverController) {}
  selectedData;
  close() {
    this.viewCtrl.dismiss();
  }
  goToScalesPage(buttonclicked)
  {
    let test = buttonclicked;
    console.log("button : "+buttonclicked);
    this.navCtrl.push(ScalesPage,{test});
    this.viewCtrl.dismiss();
  }
  presentPentatonicPopover(myEvent) {
    let popover = this.popoverCtrl.create(PentatonicPopoverPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      console.log(data);
      if(data!=null){
         this.selectedData = data
      }
      this.viewCtrl.dismiss();
    })
  
  }

  presentJazzPopover(myEvent) {
    let popover = this.popoverCtrl.create(JazzPopoverPage);
    popover.present({
      ev: myEvent
    });
   
    popover.onDidDismiss(data => {
      console.log(data);
      if(data!=null){
         this.selectedData = data
      }
      this.viewCtrl.dismiss();
    })
  }

  presentMinorPopover(myEvent) {
    let popover = this.popoverCtrl.create(MinorPopoverPage);
    popover.present({
      ev: myEvent
    });
   
    popover.onDidDismiss(data => {
      console.log(data);
      if(data!=null){
         this.selectedData = data
      }
      this.viewCtrl.dismiss();
    })
  }
  
}
