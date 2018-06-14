"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var daterangepicker_component_1 = require("./daterangepicker.component");
var config_service_1 = require("./config.service");
var Daterangepicker = (function () {
    function Daterangepicker() {
    }
    Daterangepicker.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [daterangepicker_component_1.DaterangePickerComponent],
                    providers: [config_service_1.DaterangepickerConfig],
                    exports: [daterangepicker_component_1.DaterangePickerComponent]
                },] },
    ];
    Daterangepicker.ctorParameters = function () { return []; };
    return Daterangepicker;
}());
exports.Daterangepicker = Daterangepicker;
//# sourceMappingURL=daterangepicker.module.js.map