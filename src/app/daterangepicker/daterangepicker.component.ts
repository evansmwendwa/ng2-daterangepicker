import { Directive, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyValueDiffer, KeyValueDiffers, ElementRef, OnDestroy, DoCheck  } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DaterangepickerConfig } from './config.service';

import * as $ from "jquery";
import * as moment from 'moment';
import 'bootstrap-daterangepicker';

@Directive({
    selector: '[daterangepicker]',
})
export class DaterangePickerComponent implements AfterViewInit, OnDestroy, DoCheck {

    private activeRange: any;
    private targetOptions: any = {};
    private _differ: any = {};

    public datePicker: any;

    // daterangepicker properties
    @Input() options: any = {};

    // daterangepicker events
    @Output() selected = new EventEmitter();
    @Output() cancelDaterangepicker = new EventEmitter();
    @Output() applyDaterangepicker = new EventEmitter();
    @Output() hideCalendarDaterangepicker = new EventEmitter();
    @Output() showCalendarDaterangepicker = new EventEmitter();
    @Output() hideDaterangepicker = new EventEmitter();
    @Output() showDaterangepicker = new EventEmitter();

    constructor(
        private input: ElementRef,
        private config: DaterangepickerConfig,
        private differs: KeyValueDiffers
    ) {
        this._differ['options'] = differs.find(this.options).create(null);
        this._differ['settings'] = differs.find(this.config.settings).create(null);
    }

    ngAfterViewInit() {
        this.config.embedCSS();
        this.render();
        this.attachEvents();
    }

    render() {
        this.targetOptions = Object.assign({}, this.config.settings, this.options);

        // cast $ to any to avoid jquery type checking
        (<any>$(this.input.nativeElement)).daterangepicker(this.targetOptions, this.callback.bind(this));

        this.datePicker = (<any>$(this.input.nativeElement)).data('daterangepicker');
    }

    attachEvents() {
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

    private callback(start?: any, end?: any, label?: any): void {
        this.activeRange = {
            start: start,
            end: end,
            label: label
        }

        this.selected.emit(this.activeRange);
    }

    destroyPicker() {
        try {
            (<any>$(this.input.nativeElement)).data('daterangepicker').remove();
        } catch(e) {
            console.log(e.message);
        }
    }

    ngOnDestroy() {
        this.destroyPicker();
    }

    ngDoCheck() {
        let optionsChanged = this._differ['options'].diff(this.options);
        let settingsChanged = this._differ['settings'].diff(this.config.settings);

        if(optionsChanged || settingsChanged) {
            this.render();
            this.attachEvents();
            if(this.activeRange && this.datePicker) {
                this.datePicker.setStartDate(this.activeRange.start);
                this.datePicker.setEndDate(this.activeRange.end);
            }
        }
    }
}
