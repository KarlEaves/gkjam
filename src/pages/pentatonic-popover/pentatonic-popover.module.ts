import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PentatonicPopoverPage } from './pentatonic-popover';

@NgModule({
  declarations: [
    PentatonicPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(PentatonicPopoverPage),
  ],
})
export class PentatonicPopoverPageModule {}
