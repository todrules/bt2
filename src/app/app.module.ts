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

import { LoginPage } from '../features/login/login';
import { MenuPage } from '../features/menu/menu';
import { SignupPage } from '../features/signup/signup';
import { WelcomePage } from '../features/welcome/welcome';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { PaymentComponent } from '../features/payment/payment.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { FormsModule } from '@angular/forms';
import { ApiModule } from '../swagger';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      driverOrder: ['indexeddb', 'sqlite', 'websql'],
      name: 'btApp',
      storeName: 'bt_store'
    }),
    WidgetsModule,
    FlexLayoutModule,
    ChartsModule,
    CreditCardDirectivesModule,
    ApiModule
  ],
  declarations: [
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
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  exports: [
    FlexLayoutModule,
    DashboardComponent,
    PaymentComponent,
    ChartsModule,
    CreditCardDirectivesModule,
    FormsModule,
    WidgetsModule,
    ApiModule
  ],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    SignupPage,
    WelcomePage,
    DashboardComponent,
    PaymentComponent
  ],
  bootstrap: [IonicApp]
})
export class AppModule { }
