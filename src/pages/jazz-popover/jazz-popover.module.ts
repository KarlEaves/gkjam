import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JazzPopoverPage } from './jazz-popover';

@NgModule({
  declarations: [
    JazzPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(JazzPopoverPage),
  ],
})
export class JazzPopoverPageModule {}
