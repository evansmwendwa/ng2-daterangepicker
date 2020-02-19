import { Component } from '@angular/core';
import moment from 'moment';
import { DaterangepickerConfig } from "ng2-daterangepicker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9';

  public chosenDate: any = {
    start: moment().subtract(12, 'month'),
    end: moment().subtract(6, 'month'),
  };

  public picker1 = {
    opens: 'left',
    startDate: moment().subtract(5, 'day'),
    endDate: moment(),
    isInvalidDate: function (date: any) {
      if (date.isSame('2017-09-26', 'day'))
        return 'mystyle';
      return false;
    }
  }

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

  public selectedDate(value: any, dateInput: any): void {
    console.log(value);
    dateInput.start = value.start;
    dateInput.end = value.end;
  }

  public calendarEventsHandler(e: any): void {
    console.log({ calendarEvents: e });
  }

  public applyDatepicker(e: any) {
    console.log({ applyDatepicker: e });
  }

  public updateSettings(): void {
    this.daterangepickerOptions.settings.locale = { format: 'YYYY/MM/DD' };
    this.daterangepickerOptions.settings.ranges = {
      '30 days ago': [moment().subtract(1, 'month'), moment()],
      '3 months ago': [moment().subtract(4, 'month'), moment()],
      '6 months ago': [moment().subtract(6, 'month'), moment()],
      '7 months ago': [moment().subtract(12, 'month'), moment()],
    };
  }
}
