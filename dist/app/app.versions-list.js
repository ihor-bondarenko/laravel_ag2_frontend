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
var app_service_socketio_1 = require("./app.service.socketio");
var app_state_service_1 = require("./app.state.service");
var app_emitter_service_1 = require("./app.emitter.service");
var AppVersionsList = (function () {
    function AppVersionsList(itemService, appStateService, socketService) {
        this.itemService = itemService;
        this.appStateService = appStateService;
        this.socketService = socketService;
        this.versions = [];
    }
    AppVersionsList.prototype.ngOnInit = function () {
        var _this = this;
        app_emitter_service_1.AppEmitterService.get('new-versions-list').subscribe(function (list) {
            _this.versions = list;
        });
    };
    AppVersionsList.prototype.ngOnChanges = function (changes) {
    };
    AppVersionsList.prototype.compareDatabase = function (version) {
        console.log(version);
    };
    return AppVersionsList;
}());
AppVersionsList = __decorate([
    core_1.Component({
        selector: 'versions-list',
        templateUrl: './dist/app/app.versions-list.html',
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        app_state_service_1.AppStateService,
        app_service_socketio_1.SocketService])
], AppVersionsList);
exports.AppVersionsList = AppVersionsList;
//# sourceMappingURL=app.versions-list.js.map