import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FinderPage } from '../pages/finder/finder';
import { ScalesPage } from '../pages/scales/scales';
import { SideViewComponent } from '../components/side-view/side-view';
import { TopbarComponent } from '../components/topbar/topbar';
import { PopoverPage } from '../pages/popover/popover';
import { PentatonicPopoverPage } from '../pages/pentatonic-popover/pentatonic-popover';
import { JazzPopoverPage } from '../pages/jazz-popover/jazz-popover';
import { TunerPage } from '../pages/tuner/tuner';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FinderPage,
    ScalesPage,
    SideViewComponent,
    TopbarComponent,
    PopoverPage,
    PentatonicPopoverPage,
    JazzPopoverPage,
    TunerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FinderPage,
    ScalesPage,
    SideViewComponent,
    TopbarComponent,
    PopoverPage,
    PentatonicPopoverPage,
    JazzPopoverPage,
    TunerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
