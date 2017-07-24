import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FirstRunPage } from '../pages/pages';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { SignupPage } from '../pages/signup/signup';
import { WelcomePage } from '../pages/welcome/welcome';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PaymentComponent } from '../pages/payment/payment.component';


@Component({
  templateUrl: 'app.template.html'
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Dashboard', component: DashboardComponent },
    { title: 'Payment', component: PaymentComponent },
    { title: 'Login', component: LoginPage },
    { title: 'Signup', component: SignupPage }
  ]

  constructor(private platform: Platform, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {

  }

  ionViewDidLoad() {
    this.platform.ready().then((readySource) => {
      if (readySource === 'cordova') {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }

  public openPage(page) {
    this.nav.setRoot(page.component);
  }
}
