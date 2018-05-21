import { AfterViewInit, EventEmitter } from '@angular/core';
import { KeyValueDiffers, ElementRef, OnDestroy, DoCheck } from '@angular/core';
import '../../../daterangepicker.js';
import { DaterangepickerConfig } from './config.service';
export declare class DaterangePickerComponent implements AfterViewInit, OnDestroy, DoCheck {
    private input;
    private config;
    private differs;
    private activeRange;
    private targetOptions;
    private _differ;
    datePicker: any;
    options: any;
    selected: EventEmitter<{}>;
    cancelDaterangepicker: EventEmitter<{}>;
    applyDaterangepicker: EventEmitter<{}>;
    hideCalendarDaterangepicker: EventEmitter<{}>;
    showCalendarDaterangepicker: EventEmitter<{}>;
    hideDaterangepicker: EventEmitter<{}>;
    showDaterangepicker: EventEmitter<{}>;
    constructor(input: ElementRef, config: DaterangepickerConfig, differs: KeyValueDiffers);
    ngAfterViewInit(): void;
    render(): void;
    attachEvents(): void;
    private callback(start?, end?, label?);
    destroyPicker(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
}
