import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../features/login/login';
import { SignupPage } from '../features/signup/signup';
import { WelcomePage } from '../features/welcome/welcome';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { PaymentComponent } from '../features/payment/payment.component';
import { environment } from '../env/environment';

@Component({
  templateUrl: 'app.template.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  public rootPage = WelcomePage;
  public pages: any[] = [
    { title: 'Dashboard', component: DashboardComponent },
    { title: 'Payment', component: PaymentComponent },
    { title: 'Login', component: LoginPage },
    { title: 'Signup', component: SignupPage }
  ]

  constructor(
    private platform: Platform,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen) {

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
