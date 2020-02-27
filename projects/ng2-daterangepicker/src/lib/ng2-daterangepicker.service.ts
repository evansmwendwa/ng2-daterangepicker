import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaterangepickerConfig {

  public settings: any;

  constructor() {
    this.settings = {};
  }
}
