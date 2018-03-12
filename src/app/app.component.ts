import { Component } from '@angular/core';
import { Platform,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FinderPage } from '../pages/finder/finder';
import { ScalesPage } from '../pages/scales/scales';
import { NavController } from 'ionic-angular/navigation/nav-controller';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, protected app:App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  
  }

  get navCtrl():NavController{
    return this.app.getActiveNav();
  }
  openHomePage()
  {
    this.navCtrl.push(HomePage);
  }
  openFinderPage()
  {
    this.navCtrl.push(FinderPage);

  }
  openScalesPage()
  {
    this.navCtrl.push(ScalesPage);
  }
  
}

