import { ResultsmodalPage } from './../pages/resultsmodal/resultsmodal';
import { FindscalesmodalPage } from './../pages/findscalesmodal/findscalesmodal';
import { Scales } from './../assets/music-classes/Scales';
// import { Scales } from './assets/music-classes/Scales';
import { ScaleDescriptionPage } from './../pages/scale-description/scale-description';
import { ContactUsComponent } from './../components/contact-us/contact-us';
import { ImageSectionComponent } from './../components/image-section/image-section';
import { FeaturesComponent } from './../components/features/features';
import { AboutComponent } from './../components/about/about';
import { HeaderOverlayComponent } from './../components/header-overlay/header-overlay';
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
import { HttpModule } from '@angular/http';
import { ModalPage } from '../pages/modal/modal';


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
    TunerPage,
    HeaderOverlayComponent,
    AboutComponent,
    FeaturesComponent,
    ImageSectionComponent,
    ContactUsComponent,
    ScaleDescriptionPage,
    ModalPage,
    FindscalesmodalPage,
    ResultsmodalPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule

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
    TunerPage,
    HeaderOverlayComponent,
    AboutComponent,
    FeaturesComponent,
    ImageSectionComponent,
    ContactUsComponent,
    ScaleDescriptionPage,
    ModalPage,
    FindscalesmodalPage,
    ResultsmodalPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Scales,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
