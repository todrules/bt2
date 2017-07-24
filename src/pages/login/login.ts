import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public static title = 'Login';
  public credentials = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  public gotoSignup (event) {
    this.navCtrl.push(SignupPage);
  }

  public doLogin() {
   // this.user.login(this.credentials).subscribe((resp) => {
     this.navCtrl.push(MenuPage);
   // }, (err) => {
  //    this.navCtrl.push(MainPage);
      // Unable to log in
  //    let toast = this.toastCtrl.create({
   //     message: this.loginErrorString,
   //     duration: 3000,
   //     position: 'top'
  //    });
  //    toast.present();
  //  });
  }
}
