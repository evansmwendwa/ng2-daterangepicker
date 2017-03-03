import { Component, OnInit } from '@angular/core';
import { DaterangepickerConfig } from './daterangepicker';

import '../../public/css/styles.css';
import * as moment from 'moment';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    public dateInputs: any = [
        {
            start: moment().subtract(12, 'month'),
            end: moment().subtract(6, 'month')
        },
        {
            start: moment().subtract(9, 'month'),
            end: moment().subtract(6, 'month')
        },
        {
            start: moment().subtract(4, 'month'),
            end: moment()
        },
        {
            start: moment(),
            end: moment().add(5, 'month'),
        }
    ];

    public mainInput = {
        start: moment().subtract(12, 'month'),
        end: moment().subtract(6, 'month')
    }

    public eventLog = '';

    constructor(private daterangepickerOptions: DaterangepickerConfig) {
        this.daterangepickerOptions.settings = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false,
            ranges: {
               'Last Month': [moment().subtract(1, 'month'), moment()],
               'Last 3 Months': [moment().subtract(4, 'month'), moment()],
               'Last 6 Months': [moment().subtract(6, 'month'), moment()],
               'Last 12 Months': [moment().subtract(12, 'month'), moment()],
            }
        };
    }

    ngOnInit() {}

    private selectedDate(value: any, dateInput: any) {
        dateInput.start = value.start;
        dateInput.end = value.end;
    }

    private applyDate(value: any, dateInput: any) {
        dateInput.start = value.start;
        dateInput.end = value.end;
    }

    public calendarEventsHandler(e:any) {
        console.log(e);
        this.eventLog += '\nEvent Fired: ' + e.event.type;
    }

}
