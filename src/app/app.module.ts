import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Daterangepicker } from "ng2-daterangepicker";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Daterangepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
