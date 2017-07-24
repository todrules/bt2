import { Injectable } from '@angular/core';
import { RootStatus } from '../store.reducer';
import { Credentials } from './auth.models';
import { Employee } from '../../swagger/model/employee';
import { NavController, ToastController } from 'ionic-angular';
import { NgRedux, select } from '@angular-redux/store';
import { EmployeeService } from '../../swagger/api/employee.service';
import { Storage } from '@ionic/storage';
import { Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActionType } from '../interfaces';
import { LoginPage } from '../../features/login/login';
import { MenuPage } from '../../features/menu/menu';

@Injectable()
export class AuthActions {

  private _token: string;
  public profile: Employee;
  private empService: EmployeeService;
  private notify: ToastController;
  public redirectUrl;
  constructor (private store: NgRedux<RootStatus>,
               private _empService: EmployeeService,
               private nav: NavController,
               private storageService: Storage,
               private toast: ToastController) {
    this.empService = _empService;
    this.notify = toast;
  }

  /****************
   * INIT AUTH
   ****************/
    // INIT AUTH
  public static INIT_AUTH = 'INIT_AUTH';
  public static IS_AUTH = 'IS_AUTH';
  public static NOT_AUTH = 'NOT_AUTH';
  public static INIT_AUTH_ERROR = 'INIT_AUTH_ERROR';

  private _initAuth (): void {
    this.store.dispatch({
      type: AuthActions.INIT_AUTH,
      payload: null
    });
  }

  private _initAuthError (errMsg: any) {
    this.noAuth();
    this.store.dispatch(AuthActions.handleError(errMsg, AuthActions.INIT_AUTH_ERROR));
    return Observable.create(errMsg);
  }

  private _isAuth (token: string, profile: Employee): void {
    this.store.dispatch({
      type: AuthActions.IS_AUTH,
      payload: {
        isAuthenticated: true,
        access_token: token,
        profile: profile
      }
    });
  }

  private _notAuth (): void {
    this.store.dispatch({
      type: AuthActions.NOT_AUTH,
      payload: {
        isAuthenticated: false,
        access_token: null,
        profile: null
      }
    });
  }

  private noAuth = () => {
    this._notAuth();
    this.nav.push(LoginPage);
    const toast = this.notify.create({
      message: 'PLease log in.',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  public initAuth = () => {
    this._initAuth();
    this.getStorageProfile().then((profile) => {
      if(this.checkProfile()) {
        this.checkToken();
      }
    });
  }

  /****************
   * LOGIN
   ****************/
    // LOGIN SERVICE
  public static LOGIN = 'LOGIN';
  public static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  public static LOGIN_ERROR = 'LOGIN_ERROR';




  public login = (email: string, password: string) => {
    const TWO_WEEKS = 60 * 60 * 24 * 7 * 2;
    const creds = {
      email: email,
      password: password,
      ttl: TWO_WEEKS
    };
    this._login(creds);
    this.empService.employeeLogin(creds, 'User').map(res => {
      const token = res.id;
      const profile = res.user;
      this._loginSuccess(token, profile);
      this.nav.push(MenuPage);
      return res;
    }).catch(err => {
      this._loginError(err);
      return err;
    }).subscribe();
  }

  private _login (creds: Credentials): void {
    this.store.dispatch({
      type: AuthActions.LOGIN,
      payload: creds
    });
  }

  private _loginSuccess (token: string, profile: Employee): void {
    const toast = this.notify.create({
      message: 'Successfully logged in!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    this.store.dispatch({
      type: AuthActions.LOGIN_SUCCESS,
      payload: {
        isAuthenticated: true,
        access_token: token,
        profile: profile
      }
    });
  }

  private _loginError (errMsg: string): void {
    const toast = this.notify.create({
      message: errMsg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    this.store.dispatch(AuthActions.handleError(errMsg, AuthActions.LOGIN_ERROR));
  }


  /****************
   * LOGOUT
   ****************/
    // LOGOUT SERVICE
  public static LOGOUT = 'LOGOUT';
  public static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
  public static LOGOUT_ERROR = 'LOGOUT_ERROR';

  public logout = (token) => {
    const headers: Headers = new Headers({
      'Authorization': token
    });
    const reqOpts: RequestOptions = new RequestOptions({
      headers: headers
    });
    this._logout();
    this.empService.employeeLogout(reqOpts).subscribe(() => {
      this.storageService.clear();
      this._logoutSuccess();
    });
  }

  private _logout (): void {
    this.store.dispatch({
      type: AuthActions.LOGOUT
    });
  }

  public _logoutSuccess (): void {
    this.store.dispatch({
      type: AuthActions.LOGOUT_SUCCESS,
      payload: {
        isAuthenticated: false,
        access_token: '',
        profile: null
      }
    });
  }

  public disLogoutError (errMsg: string): void {
    this.store.dispatch(AuthActions.handleError(errMsg, AuthActions.LOGOUT_ERROR));
  }

  /****************
   * SIGNUP
   ****************/
    // SIGNUP SERVICE
  public static SIGNUP = 'SIGNUP';
  public static SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
  public static SIGNUP_ERROR = 'SIGNUP_ERROR';

  public signup (creds) {
    const email = creds.email;
    const pass = creds.password;
    this.empService.employeeCreate(creds).map(res => {
      const profile = res;
      this._signupSuccess(profile);
      this.login(email, pass);
    }).catch(err => {
      this._signupError(err);
      return err;
    }).subscribe();
  }

  private _signup (profile: Employee): void {
    this.store.dispatch({
      type: AuthActions.SIGNUP,
      payload: {
        profile: profile
      }
    });
  }

  private _signupSuccess (profile: Employee): void {
    const toast = this.notify.create({
      message: 'Successfully signed up!',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    this.store.dispatch({
      type: AuthActions.SIGNUP_SUCCESS,
      payload: {
        profile: profile
      }
    });
  }

  private _signupError (errMsg: string): void {
    const toast = this.notify.create({
      message: errMsg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    this.store.dispatch(AuthActions.handleError(errMsg, AuthActions.SIGNUP_ERROR));
  }

  /****************
   * HELPER METHODS
   ****************/
  private checkToken = () => {
    if (this.token === null || typeof this.token === 'undefined' || this.token === '') {
      this.noAuth();
    } else {
      const exist = this.empService.employeeExistsGetEmployeesidExists(this.profile.id.toString(), AuthActions.getHeaders(this.token))
        .map(res => res.exists ? this._isAuth(this.token, this.profile) : this.noAuth()).catch(this._initAuthError);
      exist.subscribe();
    }
  }

  private getStorageProfile() {
    return this.storageService.get('profile').then((val) => {
      this.profile = val;
      return val;
    });
  }

  private checkProfile = () => {
    if (this.profile === null || typeof this.profile === 'undefined' || this.profile.id === null) {
      this._notAuth();
      const toast = this.notify.create({
        message: 'Please log in.',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      setTimeout(() => {
        this.nav.push(LoginPage);
        return false;
      }, 3000);

    } else {
      return true;
    }

  }

  private getStorageToken () {
    return this.storageService.get('token').then((data) => {
      this.token = data;
      return this.token;
    });
  }

  public static getHeaders (token: string | null): RequestOptionsArgs {
    const headers: Headers = new Headers({
      'Authorization': token
    });
    const reqOpts: RequestOptions = new RequestOptions({
      headers: headers
    });
    return reqOpts;

  }

  @select(['auth', 'access_token']) readonly token$: Observable<string>;

  public source = this.token$.subscribe(item => {
    this.token = item;
  });

  public get token (): string {
    return this._token;
  }

  public set token (value: string) {
    this._token = value;
  }

  public static handleError (errMsg: string, type: string): ActionType {
    return {
      type: type,
      payload: errMsg
    };
  }
}
