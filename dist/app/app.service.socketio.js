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
var Rx_1 = require("rxjs/Rx");
var io = require("socket.io-client");
var app_emitter_service_1 = require("./app.emitter.service");
var app_state_service_1 = require("./app.state.service");
var app_snakebar_service_1 = require("./app.snakebar.service");
var SocketService = (function () {
    function SocketService(appStateService, appSnakeBarService) {
        this.appStateService = appStateService;
        this.appSnakeBarService = appSnakeBarService;
        this.host = window.location.protocol + "//" + window.location.hostname + ":" + 8124;
        this.initSocketConnect();
    }
    // Get items observable
    SocketService.prototype.initSocketConnect = function (name) {
        var _this = this;
        this.name = 'clients';
        var socketUrl = this.host + "/" + this.name;
        this.socket = io.connect(socketUrl);
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("error", function (error) {
            console.log("ERROR: \"" + error + "\" (" + socketUrl + ")");
        });
        this.socket.on("new-table-structure", function (data) {
            app_emitter_service_1.AppEmitterService.get('new-table-structure').emit(data);
            //this.appStateService.states.progressBarMode = "buffer";
            _this.appStateService.updateAppState("progressBarMode", "determined");
            _this.appSnakeBarService.openSnackBar('New structure of master DB received', 'close');
        });
        this.socket.on("last-structure-update", function (data) {
            app_emitter_service_1.AppEmitterService.get('last-structure-update').emit(data);
        });
        this.socket.on("new-versions-list", function (data) {
            console.log('-- new versions list emmited --');
            app_emitter_service_1.AppEmitterService.get("new-versions-list").emit(data);
        });
        // Return observable which follows "create" and "remove" signals from socket stream
        return Rx_1.Observable.create(function (observer) {
            //this.socket.on("create", (item: any) => observer.next({ action: "create", item: item }) );
            //this.socket.on("remove", (item: any) => observer.next({ action: "remove", item: item }) );
            return function () { return _this.socket.close(); };
        });
    };
    SocketService.prototype.getTableStructure = function () {
        // console.log(this.appStateService.states);
        //this.appStateService.states.progressBarMode = "query";
        this.appStateService.updateAppState("progressBarMode", "query");
        this.socket.emit("get-table-structure", {});
    };
    // Handle connection opening
    SocketService.prototype.connect = function () {
        console.log("Connected to \"" + this.name + "\"");
        // Request initial list when connected
        this.socket.emit("get-versions-list");
    };
    // Handle connection closing
    SocketService.prototype.disconnect = function () {
        console.log("Disconnected from \"" + this.name + "\"");
    };
    SocketService.prototype.ngOnInit = function () {
        //
    };
    return SocketService;
}());
SocketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_state_service_1.AppStateService, app_snakebar_service_1.AppSnakeBarService])
], SocketService);
exports.SocketService = SocketService;
//# sourceMappingURL=app.service.socketio.js.map