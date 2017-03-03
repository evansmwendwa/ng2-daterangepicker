import { Directive, OnInit, AfterViewInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DaterangepickerConfig } from './config.service';

declare var $:any;
var $ = require('jquery');
import 'bootstrap-daterangepicker';
import * as moment from 'moment';

@Directive({ selector: '[daterangepicker]' })
export class DaterangePickerComponent implements AfterViewInit {

    @Input() options: any = {};
    @Output() selected = new EventEmitter();

    // daterangepicker events
    @Output() cancelDaterangepicker = new EventEmitter();
    @Output() applyDaterangepicker = new EventEmitter();
    @Output() hideCalendarDaterangepicker = new EventEmitter();
    @Output() showCalendarDaterangepicker = new EventEmitter();
    @Output() hideDaterangepicker = new EventEmitter();
    @Output() showDaterangepicker = new EventEmitter();

    constructor(private input: ElementRef, private config: DaterangepickerConfig) { }

    ngAfterViewInit() {
        $('head').append('<style>'+require('./daterangepicker.css')+'</style>');

        let targetOptions: any = Object.assign({}, this.config.settings, this.options);

        $(this.input.nativeElement).daterangepicker(targetOptions, this.callback.bind(this));

        $(this.input.nativeElement).on('cancel.daterangepicker',
            (e:any, picker:any) => {
                let event = { event: e, picker: picker };
                this.cancelDaterangepicker.emit(event);
            }
        );

        $(this.input.nativeElement).on('apply.daterangepicker',
            (e:any, picker:any) => {
                let event = { event: e, picker: picker };
                this.applyDaterangepicker.emit(event);
            }
        );

        $(this.input.nativeElement).on('hideCalendar.daterangepicker',
            (e:any, picker:any) => {
                let event = { event: e, picker: picker };
                this.hideCalendarDaterangepicker.emit(event);
            }
        );

        $(this.input.nativeElement).on('showCalendar.daterangepicker',
            (e:any, picker:any) => {
                let event = { event: e, picker: picker };
                this.showCalendarDaterangepicker.emit(event);
            }
        );

        $(this.input.nativeElement).on('hide.daterangepicker',
            (e:any, picker:any) => {
                let event = { event: e, picker: picker };
                this.hideDaterangepicker.emit(event);
            }
        );

        $(this.input.nativeElement).on('show.daterangepicker',
            (e:any, picker:any) => {
                let event = { event: e, picker: picker };
                this.showDaterangepicker.emit(event);
            }
        );
    }

    private callback(start?: any, end?: any): void {
        let obj = {
            start: start,
            end: end
        };

        this.selected.emit(obj);
    }
}
