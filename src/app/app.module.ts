import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { Daterangepicker } from './daterangepicker';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        Daterangepicker
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
