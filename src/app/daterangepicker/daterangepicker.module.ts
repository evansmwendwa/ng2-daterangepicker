import { NgModule, ModuleWithProviders } from '@angular/core';
//import { FormsModule }   from '@angular/forms';
import { DaterangePickerComponent } from './daterangepicker.component';
import { DaterangepickerConfig } from './config.service';

@NgModule({
    //imports: [FormsModule],
    declarations: [DaterangePickerComponent],
    exports: [DaterangePickerComponent]

})
export class Daterangepicker {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: Daterangepicker,
            providers: [
                DaterangepickerConfig
            ]
        }
    }
}
