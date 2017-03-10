"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppEmitterService = (function () {
    function AppEmitterService() {
    }
    // Set a new event in the store with a given ID
    // as key
    AppEmitterService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new core_1.EventEmitter();
        return this._emitters[ID];
    };
    return AppEmitterService;
}());
// Event store
AppEmitterService._emitters = {};
AppEmitterService = __decorate([
    core_1.Injectable()
], AppEmitterService);
exports.AppEmitterService = AppEmitterService;
//# sourceMappingURL=app.emitter.service.js.map