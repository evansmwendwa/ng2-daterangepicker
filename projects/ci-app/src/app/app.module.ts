import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Daterangepicker } from '../../../ng2-daterangepicker/src/daterangepicker.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Daterangepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
