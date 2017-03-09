import { Injectable } from '@angular/core';

declare var require:any;
import * as $ from "jquery";

@Injectable()
export class DaterangepickerConfig {

    public settings: any;
    public skipCSS: boolean = false;
    private addedCSS = false;

    constructor() {
        this.settings = {};
    }

    public embedCSS(): void {
        // avoid adding duplicated styles
        if(this.addedCSS) {
            return;
        }

        if(!this.skipCSS) {
            $('head').append('<style>'+ require('./daterangepicker.css')+'</style>');
            this.addedCSS = true;
        }
    }

}
