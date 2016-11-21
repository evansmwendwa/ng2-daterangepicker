## ng2-daterangepicker
This is a port of the popular Daterange Picker for Bootstrap now optimized for easy use as an importable Angular 2 Module and installable using npm.

### Installation
```
npm install ng2-daterangepicker --save
```

### Usage

Add [Bootstrap](http://getbootstrap.com/) to your project's index.html or include in your workflow

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

import the `Daterangepicker` module in your application module

```
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
    imports: [Daterangepicker]
})

```

Use the directive in your component by passing in options `{}` and consuming the `selected` event.
See this project's `src/app/app.component.ts` for a full usage example

```
@Component({
    selector: 'my-app',
    template: `<input type="text" name="daterangeInput" daterangepicker [options]="options" (selected)="selectedDate($event)" />`,
})
export class AppComponent {

    public daterange: any = {};

    private selectedDate(value: any, dateInput: any) {
        daterange.start = value.start;
        daterange.end = value.end;
    }
}
```

You can pass global settings that can be overloaded by the `options` object in the daterangepicker instances. Use the `DaterangepickerConfig` service to do so. The service provider is set in the daterangepicker module.

```
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
For a list of the available daterangepicker options and samples visit the original site http://www.daterangepicker.com/

> **Note:**
* This Component is still under development and I will be adding more features.
* This Component depends on jQuery, [Moment.js](http://momentjs.com/) and Bootstrap to work correctly.
* I have not tested usage with system js for now, currently working on Angular 2 Webpack setup, will update after thorough testing.
* You are encouraged to contribute
