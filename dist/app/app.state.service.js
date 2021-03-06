"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var AppStateService = (function () {
    function AppStateService() {
        this.subject = new Subject_1.Subject();
        this.states = {
            "progressBarMode": "determine"
        };
        //
    }
    AppStateService.prototype.updateAppState = function (state, value) {
        this.states[state] = value;
        this.subject.next(this.states);
    };
    AppStateService.prototype.getStates = function () {
        return this.subject.asObservable();
    };
    AppStateService.prototype.get = function (ID) {
        if (this.states[ID]) {
            return this.states[ID];
        }
    };
    AppStateService.prototype.set = function (ID, Value) {
        this.states[ID] = Value;
    };
    return AppStateService;
}());
AppStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppStateService);
exports.AppStateService = AppStateService;
//# sourceMappingURL=app.state.service.js.map