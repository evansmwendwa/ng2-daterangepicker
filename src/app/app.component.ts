import { Component, OnInit } from '@angular/core';
import { DaterangepickerConfig } from './daterangepicker/config.service';

import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public picker1 = {
        opens: 'left',
        startDate: moment().subtract(5, 'day'),
        endDate: moment(),
        isInvalidDate: function(date) {
          if (date.isSame('2017-09-26', 'day'))
            return 'mystyle';
          return false;
      	}
    }

    public picker2 = {
        startDate: moment().subtract(2, 'month'),
        endDate: moment(),
        opens: 'right'
    }

    public chosenDate: any = {
        start: moment().subtract(12, 'month'),
        end: moment().subtract(6, 'month'),
    };

    public chosenDate2: any = {
        start: moment().subtract(12, 'month'),
        end: moment().subtract(6, 'month'),
    };

    public eventLog = '';

    constructor(private daterangepickerOptions: DaterangepickerConfig) {
        this.daterangepickerOptions.settings = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false,
            "opens": "right",
            ranges: {
                'Last Month': [moment().subtract(1, 'month'), moment()],
                'Last 3 Months': [moment().subtract(4, 'month'), moment()],
                'Last 6 Months': [moment().subtract(6, 'month'), moment()],
                'Last 12 Months': [moment().subtract(12, 'month'), moment()],
            }
        };
    }

    ngOnInit() { }

    public selectedDate(value: any, dateInput: any) {
        console.log(value);
        dateInput.start = value.start;
        dateInput.end = value.end;
    }

    public calendarEventsHandler(e: any) {
        console.log(e);
        this.eventLog += '\nEvent Fired: ' + e.event.type;
    }

    public toggleDirection(direction: string) {
        this.picker1.opens = direction;
    }

    public applyDatepicker(event:any) {
        console.log('applied');
        console.log(event);
    }

    public updateSettings() {
        this.daterangepickerOptions.settings.locale = { format: 'YYYY/MM/DD' };
        this.daterangepickerOptions.settings.ranges = {
            '30 days ago': [moment().subtract(1, 'month'), moment()],
            '3 months ago': [moment().subtract(4, 'month'), moment()],
            '6 months ago': [moment().subtract(6, 'month'), moment()],
            '7 months ago': [moment().subtract(12, 'month'), moment()],
        };
    }
}
