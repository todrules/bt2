import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BgColorDirective } from './bg-color.directive';
import { ServerError } from './pages/servererror.component';
import { MethodNotAllowed } from './pages/methodnotallowed.component';
import { PageNotFound } from './pages/pagenotfound.component';
import { Unauthorized } from './pages/unauthorized.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BgColorDirective,
    ServerError,
    MethodNotAllowed,
    PageNotFound,
    Unauthorized
  ],
  exports: [
    CommonModule,
    FormsModule,
    BgColorDirective

  ],
  entryComponents: [
    ServerError,
    MethodNotAllowed,
    PageNotFound,
    Unauthorized
  ],
})
export class WidgetsModule {}
