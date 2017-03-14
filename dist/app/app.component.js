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
var app_service_1 = require("./app.service");
var app_emitter_service_1 = require("./app.emitter.service");
var app_service_socketio_1 = require("./app.service.socketio");
var app_state_service_1 = require("./app.state.service");
var AppComponent = (function () {
    function AppComponent(itemService, appStateService, SocketService) {
        var _this = this;
        this.itemService = itemService;
        this.appStateService = appStateService;
        this.SocketService = SocketService;
        this.Title = 'Database Manager';
        this.personsListId = 'PERSONS_LIST';
        this.personEditId = 'PERSON_EDIT';
        this.getTableStructure = 'TABLE_STRUCTURE';
        this.compareTableStructure = 'COMPARE_TABLE_STRUCTURE';
        //this.SocketService = new SocketService();
        this.subscription = this.appStateService.getStates().subscribe(function (states) { _this.appStates = states; });
        this.appStates = {};
    }
    AppComponent.prototype.loadTableStructure = function () {
        app_emitter_service_1.AppEmitterService.get(this.getTableStructure).emit({});
    };
    AppComponent.prototype.loadTableCompare = function () {
        app_emitter_service_1.AppEmitterService.get(this.compareTableStructure).emit({});
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        app_emitter_service_1.AppEmitterService.get('last-structure-update').subscribe(function (date) {
            _this.lastStructureUpdate = date;
        });
        app_emitter_service_1.AppEmitterService.get('last-compare-update').subscribe(function (date) {
            _this.lastCompareUpdate = date;
        });
    };
    AppComponent.prototype.ngOnChanges = function (changes) {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './dist/app/app.component.html'
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        app_state_service_1.AppStateService,
        app_service_socketio_1.SocketService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map