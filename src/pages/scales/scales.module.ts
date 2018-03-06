import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScalesPage } from './scales';

@NgModule({
  declarations: [
    ScalesPage,
  ],
  imports: [
    IonicPageModule.forChild(ScalesPage),
  ],
})
export class ScalesPageModule {}
