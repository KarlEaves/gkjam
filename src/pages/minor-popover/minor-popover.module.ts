import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinorPopoverPage } from './minor-popover';

@NgModule({
  declarations: [
    MinorPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(MinorPopoverPage),
  ],
})
export class MinorPopoverPageModule {}
