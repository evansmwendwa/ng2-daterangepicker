## ng2-daterangepicker
This is a port of the popular Daterange Picker for Bootstrap now optimized for easy use as an importable Angular 2 Module and installable using npm.

### Installation
```
npm install ng2-daterangepicker --save
```

### Usage

Add [Bootstrap](http://getbootstrap.com/) to your project's index.html or include in your workflow

``` html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

**NB: Override icon classes with your own custom icons if you are using Bootstrap 4 without glyphs and without fontawesome. Classes used are below**

```
fa fa-calendar glyphicon glyphicon-calendar
fa fa-chevron-left glyphicon glyphicon-chevron-left
fa fa-chevron-right glyphicon glyphicon-chevron-right
```

import the `Daterangepicker` module in your application module

``` javascript
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
    imports: [Daterangepicker]
})

```

Use the `daterangepicker` directive in your component by passing in options `{}` and consuming the `selected` event.
See this project's `src/app/app.component.ts` for a full usage example

``` javascript
@Component({
    selector: 'my-app',
    template: `<input type="text" name="daterangeInput" daterangepicker [options]="options" (selected)="selectedDate($event)" />`,
})
export class AppComponent {

    public daterange: any = {};

    private selectedDate(value: any) {
        this.daterange.start = value.start;
        this.daterange.end = value.end;
    }
}
```

You can pass global settings that can be overloaded by the `options` object in the daterangepicker instances. Use the `DaterangepickerConfig` service to do so. The service provider is set in the daterangepicker module.

``` javascript
import { DaterangepickerConfig } from 'ng2-daterangepicker';

@Component({
    selector:'my-app',
    template:'<h3>Component Template</h3>'
})
export class AppComponent {

    constructor(private daterangepickerOptions: DaterangepickerConfig) {
        this.daterangepickerOptions.settings = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false
        };
    }
}
```

## Customizing the CSS
> **Skip Adding CSS in Head** - You can bundle the css that styles the calendar in your app by copying or importing the contents of `./src/app/daterangepicker/daterangepicker.css` and customizing as you like. When you do so set the `skipCSS` property of the config service to `true`

``` javascript
import { DaterangepickerConfig } from 'ng2-daterangepicker';

@Component({
    selector:'my-app',
    template:'<h3>Component Template</h3>'
})
export class AppComponent {

    constructor(private daterangepickerOptions: DaterangepickerConfig) {
        this.daterangepickerOptions.skipCSS = true;
    }
}
```

## Using Daterangepicker Events

You can bind to the events fired by the daterangepicker. All events will emit an object containing the event fired and the datepicker object.

```
{
    event: {},
    picker: {}
}
```

#### Available events

Below is the list of events that you can bind into.

Visit the original site for detailed options and documentation http://www.daterangepicker.com/#options

```
cancelDaterangepicker
applyDaterangepicker
hideCalendarDaterangepicker
showCalendarDaterangepicker
hideDaterangepicker
showDaterangepicker
```

Below is a sample usage. You can have multiple methods and implement only the events you want.

Create methods that will be called by the events in your component and bind to fired events in the component's template.

``` javascript
@Component({
    selector: 'my-app',
    template: `<input type="text" name="daterangeInput" daterangepicker [options]="options" (selected)="selectedDate($event)"
    (cancelDaterangepicker)="calendarCanceled($event)"
    (applyDaterangepicker)="calendarApplied($event)"
    />`,
})
export class AppComponent {

    public daterange: any = {};

    private selectedDate(value: any) {
        daterange.start = value.start;
        daterange.end = value.end;
    }

    // expected output is an object containing the event and the picker.
    // your method can be named whaterver you want.
    // you can add multiple params to the method and pass them in the template
    public calendarCanceled(e:any) {
        console.log(e);
        // e.event
        // e.picker
    }

    public calendarApplied(e:any) {
        console.log(e);
        // e.event
        // e.picker
    }
}
```

Below is the link to the original project, there's more info regarding the daterangepicker there. http://www.daterangepicker.com/

> **Note:**
* This Component is still under development and I will be adding more features.
* This Component depends on jQuery, [Moment.js](http://momentjs.com/) and Bootstrap to work correctly.
* I have not tested usage with system js for now, currently working on Angular 2 Webpack setup, will update after thorough testing.
* You are encouraged to contribute
