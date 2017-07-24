import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { provideReduxForms } from '@angular-redux/form';
import { createLogger } from 'redux-logger';

import { RootStatus, statusReducer } from './store.reducer';

@NgModule({
  imports: [
    NgReduxModule],
  providers: [

  ],
})
export class StoreModule {
  constructor (public store: NgRedux<RootStatus>,
               devTools: DevToolsExtension) {

    store.configureStore(statusReducer, {},
      [createLogger()], devTools.isEnabled() ? [devTools.enhancer()] : []);


    provideReduxForms(store);
  }
}
