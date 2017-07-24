import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  public static title = 'Signup';
  public credentials = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  public gotoLogin (event) {
    this.navCtrl.push(LoginPage);
  }

  doSignup() {
    // Attempt to login in through our User service
  //  this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MenuPage);
  //  }, (err) => {

  //    this.navCtrl.push(MainPage); // TODO: Remove this when you add your signup endpoint

      // Unable to sign up
  //    let toast = this.toastCtrl.create({
   //     message: this.signupErrorString,
   //     duration: 3000,
  //      position: 'top'
  //    });
   //   toast.present();
 //   });
  }
}
