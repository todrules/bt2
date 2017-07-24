import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PaymentComponent } from '../payment/payment.component';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  // A reference to the ion-nav in our component
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardComponent;

  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardComponent },
      { title: 'Payment', component: PaymentComponent },
      { title: 'Sign in', component: LoginPage },
      { title: 'Signup', component: SignupPage }
    ];
  }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
