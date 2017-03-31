import { NgModule } from '@angular/core';
//import { FormsModule }   from '@angular/forms';
import { DaterangePickerComponent } from './daterangepicker.component';
import { DaterangepickerConfig } from './config.service';

@NgModule({
    //imports: [FormsModule],
    declarations: [DaterangePickerComponent],
    providers: [DaterangepickerConfig],
    exports: [DaterangePickerComponent]

})
export class Daterangepicker { }
