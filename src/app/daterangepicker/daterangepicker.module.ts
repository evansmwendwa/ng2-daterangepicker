import { NgModule } from '@angular/core';
import { DaterangePickerComponent } from './daterangepicker.component';
import { DaterangepickerConfig } from './config.service';

@NgModule({
    imports: [],
    declarations: [DaterangePickerComponent],
    providers: [DaterangepickerConfig],
    exports: [DaterangePickerComponent]

})
export class Daterangepicker { }
