import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TunerPage } from './tuner';

@NgModule({
  declarations: [
    TunerPage,
  ],
  imports: [
    IonicPageModule.forChild(TunerPage),
  ],
})
export class TunerPageModule {}
