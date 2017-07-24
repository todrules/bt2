import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Chart from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { SignupPage } from '../pages/signup/signup';
import { WelcomePage } from '../pages/welcome/welcome';

import { Settings } from '../providers/settings';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PaymentComponent } from '../pages/payment/payment.component';

export function provideSettings(storage: Storage) {

  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    SignupPage,
    WelcomePage,
    DashboardComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FlexLayoutModule,
    ChartsModule,
    CreditCardDirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    SignupPage,
    WelcomePage,
    DashboardComponent,
    PaymentComponent
  ],
  providers: [
    Camera,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  exports: [
    FlexLayoutModule,
    DashboardComponent,
    PaymentComponent,
    ChartsModule,
    CreditCardDirectivesModule
  ]
})
export class AppModule { }
